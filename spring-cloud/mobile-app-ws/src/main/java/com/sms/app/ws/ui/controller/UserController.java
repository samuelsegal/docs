package com.sms.app.ws.ui.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sms.app.ws.service.UserService;
import com.sms.app.ws.ui.model.request.UserDetailsRequestModel;
import com.sms.app.ws.ui.model.response.UserRest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

	Map<String, UserRest> users = new HashMap<>();
	
	final UserService userService;
	
	@GetMapping
	public List<UserRest> getUsers(
			@RequestParam(value="page", defaultValue="1") int page, 
			@RequestParam(value="limit", defaultValue="25") int limit,
			@RequestParam(value="sort", defaultValue="asc", required=false) String sort) {
		return List.of(UserRest.builder().userid("1").build());
	}
	
	@GetMapping(path="/{userid}",
				produces= {MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE}
	)
	public ResponseEntity<UserRest> getUser(@PathVariable String userid) {
		if(users.containsKey(userid)) {
			return new ResponseEntity<>(users.get(userid), HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@PostMapping(consumes={MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE},
				 produces={MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE})
	public ResponseEntity<UserRest> createUser(@Valid @RequestBody UserDetailsRequestModel user) {
		UserRest ur = userService.createUser(user);
		return new ResponseEntity<>(ur, HttpStatus.OK);
	}
	
	@PutMapping(path="/{userid}",
				consumes={MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE},
				produces={MediaType.APPLICATION_JSON_VALUE,  
							MediaType.APPLICATION_XML_VALUE})
	public ResponseEntity<UserRest> updateUser(@PathVariable String userid, 
												@RequestBody UserDetailsRequestModel user) {
		user = null;
		if(users.containsKey(userid)) {
			UserRest ur = users.get(userid);
			if(user.getFirstName() != null) {
				ur.setFirstName(user.getFirstName());
			}
			if(user.getLastName() != null) {
				ur.setLastName(user.getLastName());
			}
			users.put(userid, ur);
			return new ResponseEntity<UserRest>(ur, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		
	}
	
	@DeleteMapping(path="/{userid}")
	public ResponseEntity<Void> deleteUser(@PathVariable String userid) {
		users.remove(userid);
		return ResponseEntity.noContent().build();
		
	}
}
