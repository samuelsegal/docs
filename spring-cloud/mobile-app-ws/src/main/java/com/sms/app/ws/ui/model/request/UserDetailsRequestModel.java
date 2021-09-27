package com.sms.app.ws.ui.model.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailsRequestModel {

	@NotNull(message = "First Name required")
	private String firstName;
	@NotNull(message = "Last Name required")
	private String lastName;
	@Email
	@NotNull(message = "email required")
	private String email;
	@NotNull(message = "password required")
	@Size(max = 20, min = 8)
	private String password;
	
	
}
