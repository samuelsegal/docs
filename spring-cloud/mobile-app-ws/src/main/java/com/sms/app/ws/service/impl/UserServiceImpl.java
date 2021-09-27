package com.sms.app.ws.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.sms.app.ws.service.UserService;
import com.sms.app.ws.ui.model.request.UserDetailsRequestModel;
import com.sms.app.ws.ui.model.response.UserRest;

@Service
public class UserServiceImpl implements UserService {

	Map<String, UserRest> users = new HashMap<>();
	
	@Override
	public UserRest createUser(UserDetailsRequestModel user) {
		UserRest ur = UserRest.builder()
				.email(user.getEmail())
				.firstName(user.getFirstName())
				.lastName(user.getLastName())
				.build();
		ur.setUserid(UUID.randomUUID().toString());
		users.put(ur.getUserid(), ur);
		return ur;
	}

}
