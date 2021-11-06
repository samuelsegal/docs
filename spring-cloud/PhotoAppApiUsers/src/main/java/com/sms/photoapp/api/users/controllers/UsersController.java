package com.sms.photoapp.api.users.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.core.env.Environment;
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

import com.sms.photoapp.api.users.model.UserRequestModel;
import com.sms.photoapp.api.users.model.UserResponseModel;
import com.sms.photoapp.api.users.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UsersController {

	private final Environment env;
	private final UserService userService;
	
	@GetMapping("/status/check")
	public String status() {
		return String.format("Working on port :%s with token : %s ", 
							env.getProperty("local.server.port"),
							env.getProperty("token.secret"));
	}
	
	@GetMapping
	public List<UserRequestModel> getUsers(
			@RequestParam(value="page", defaultValue="1") int page, 
			@RequestParam(value="limit", defaultValue="25") int limit,
			@RequestParam(value="sort", defaultValue="asc", required=false) String sort) {
		return List.of(UserRequestModel.builder().userid("1").build());
	}
	
	@GetMapping(path="/{userid}",
				produces= { MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE }
	)
	public ResponseEntity<UserResponseModel> getUser(@PathVariable String userid) {
		
		//UserResponseModel user = userService.getUser(userid);
		UserResponseModel user = userService.getUserByUserId(userid);
		if(user != null) {

			return new ResponseEntity<>(user, HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@PostMapping(consumes={ MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE },
				 produces={ MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<UserResponseModel> createUser(@Valid @RequestBody UserRequestModel user) {
		UserResponseModel uresponse = userService.createUser(user);
		return new ResponseEntity<>(uresponse, HttpStatus.CREATED);
	}
	
	@PutMapping(path="/{userid}",
				consumes={MediaType.APPLICATION_JSON_VALUE, 
							MediaType.APPLICATION_XML_VALUE},
				produces={MediaType.APPLICATION_JSON_VALUE,  
							MediaType.APPLICATION_XML_VALUE})
	public ResponseEntity<UserResponseModel> updateUser(@PathVariable String userid, 
												@RequestBody UserRequestModel user) {
		UserResponseModel userRequestModel = userService.updateUser(userid, user);
		if(userRequestModel != null) {
			return new ResponseEntity<UserResponseModel>(userRequestModel, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	@DeleteMapping(path="/{userid}")
	public ResponseEntity<Void> deleteUser(@PathVariable String userid) {
		userService.deleteUser(userid);
		return ResponseEntity.noContent().build();
		
	}
	

}
