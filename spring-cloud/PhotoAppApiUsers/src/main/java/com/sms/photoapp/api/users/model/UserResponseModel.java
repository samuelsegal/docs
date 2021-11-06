package com.sms.photoapp.api.users.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseModel {

	private String firstName;
	private String lastName;
	private String email;
	private String userid;
	private List<AlbumResponseModel> albums;
	
}
