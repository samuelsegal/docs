package com.sms.app.ws.service;

import com.sms.app.ws.ui.model.request.UserDetailsRequestModel;
import com.sms.app.ws.ui.model.response.UserRest;

public interface UserService {

	public UserRest createUser(UserDetailsRequestModel user);
}
