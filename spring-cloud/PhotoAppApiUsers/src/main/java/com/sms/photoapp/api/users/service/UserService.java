package com.sms.photoapp.api.users.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.sms.photoapp.api.users.model.UserRequestModel;
import com.sms.photoapp.api.users.model.UserResponseModel;

public interface UserService extends UserDetailsService {

	UserResponseModel createUser(UserRequestModel user);
	UserResponseModel getUser(String userid);
	List<UserResponseModel> getUsers();
	UserResponseModel updateUser(String userid, UserRequestModel user);
	Void deleteUser(String userid);
	UserResponseModel getUserDetailsByEmail(String email);
	UserResponseModel getUserByUserId(String userid);
}
