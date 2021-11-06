package com.sms.photoapp.api.users.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AlbumResponseModel {

	private String albumId;
	private String userId;
	private String name;
	private String description;
}
