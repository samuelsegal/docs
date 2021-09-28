package com.sms.photoapp.api.users.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.sms.photoapp.api.users.model.UserRequestModel;

public interface UserService extends UserDetailsService {

	UserRequestModel createUser(UserRequestModel user);
	UserRequestModel getUser(String userid);
	List<UserRequestModel> getUsers();
	UserRequestModel updateUser(String userid, UserRequestModel user);
	Void deleteUser(String userid);
	UserRequestModel getUserDetailsByEmail(String email);
}
