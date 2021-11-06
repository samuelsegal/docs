package com.sms.photoapp.api.users.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sms.photoapp.api.users.db.UserEntity;
import com.sms.photoapp.api.users.db.UserRepository;
import com.sms.photoapp.api.users.model.AlbumResponseModel;
import com.sms.photoapp.api.users.model.UserRequestModel;
import com.sms.photoapp.api.users.model.UserResponseModel;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final BCryptPasswordEncoder bcryprtPasswordEncoder;
	private final RestTemplate restTemplate;
	private final Environment env;
	
	@Override
	public UserResponseModel createUser(UserRequestModel user) {
		user.setUserid(UUID.randomUUID().toString());
		user.setEncryptedPassword(bcryprtPasswordEncoder.encode(user.getPassword()));
		//String encryptedPw = bcryprtPasswordEncoder.encode(user.getPassword());

		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		UserEntity userEntity =  modelMapper.map(user, UserEntity.class);
		userEntity.setEncryptedPassword(user.getEncryptedPassword());
		UserEntity ue = userRepository.save(userEntity);
		return modelMapper.map(ue, UserResponseModel.class);
	}

	@Override
	public UserResponseModel getUser(String userid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UserResponseModel> getUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserResponseModel updateUser(String userid, UserRequestModel user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Void deleteUser(String userid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity ue = userRepository.findByEmail(username);
		if(ue == null) {
			throw  new UsernameNotFoundException(username);
		}
		return new User(ue.getEmail(), 
						ue.getEncryptedPassword(), 
						true, 
						true, 
						true, 
						true, 
						new ArrayList<>());
	}

	@Override
	public UserResponseModel getUserDetailsByEmail(String email) {
		UserEntity ue = userRepository.findByEmail(email);
		if(ue == null) {
			throw  new UsernameNotFoundException(email);
		}
		ModelMapper mm = new ModelMapper();
		
		return mm.map(ue, UserResponseModel.class);
	}

	@Override
	public UserResponseModel getUserByUserId(String userid) {
		UserEntity ue = userRepository.findByUserid(userid);
		
		String url = String.format(env.getProperty("albums.url"), userid);
		
		ResponseEntity<List<AlbumResponseModel>> albumsListResponse = 
				restTemplate.exchange(
						url, HttpMethod.GET, null, 
						new ParameterizedTypeReference<List<AlbumResponseModel>>() {
		});
		
		UserResponseModel urm = new ModelMapper().map(ue, UserResponseModel.class);
		urm.setAlbums(albumsListResponse.getBody());
		log.debug("User: " + urm.toString());
		return urm;
	}

}
