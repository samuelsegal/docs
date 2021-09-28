package com.sms.photoapp.api.users.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.sms.photoapp.api.users.db.UserEntity;
import com.sms.photoapp.api.users.db.UserRepository;
import com.sms.photoapp.api.users.model.UserRequestModel;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final BCryptPasswordEncoder bcryprtPasswordEncoder;
	
	@Override
	public UserRequestModel createUser(UserRequestModel user) {
		user.setUserid(UUID.randomUUID().toString());
		user.setEncryptedPassword(bcryprtPasswordEncoder.encode(user.getPassword()));
		//String encryptedPw = bcryprtPasswordEncoder.encode(user.getPassword());

		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		UserEntity userEntity =  modelMapper.map(user, UserEntity.class);
		userEntity.setEncryptedPassword(user.getEncryptedPassword());
		UserEntity ue = userRepository.save(userEntity);
		return modelMapper.map(ue, UserRequestModel.class);
	}

	@Override
	public UserRequestModel getUser(String userid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UserRequestModel> getUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserRequestModel updateUser(String userid, UserRequestModel user) {
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
	public UserRequestModel getUserDetailsByEmail(String email) {
		UserEntity ue = userRepository.findByEmail(email);
		if(ue == null) {
			throw  new UsernameNotFoundException(email);
		}
		ModelMapper mm = new ModelMapper();
		
		return mm.map(ue, UserRequestModel.class);
	}

}
