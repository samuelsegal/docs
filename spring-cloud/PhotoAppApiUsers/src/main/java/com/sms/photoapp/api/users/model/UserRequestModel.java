package com.sms.photoapp.api.users.model;

import java.io.Serializable;

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
public class UserRequestModel implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1985450244081844968L;
	@NotNull(message = "first name required")
	private String firstName;
	@NotNull(message = "last name required")
	private String lastName;
	@NotNull(message = "email required")
	@Email
	private String email;
	private String userid;
	@NotNull(message = "password required")
	@Size(max = 20, min = 8)
	private String password;
	private String encryptedPassword;
	
}
