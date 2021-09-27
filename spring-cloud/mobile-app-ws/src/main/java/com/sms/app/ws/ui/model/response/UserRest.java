package com.sms.app.ws.ui.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRest {

	private String firstName;
	private String lastName;
	private String email;
	private String userid;
	
	
}
