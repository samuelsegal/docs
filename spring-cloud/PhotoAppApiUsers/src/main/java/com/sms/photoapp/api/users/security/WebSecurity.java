package com.sms.photoapp.api.users.security;

import javax.servlet.Filter;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.sms.photoapp.api.users.service.UserService;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurity extends WebSecurityConfigurerAdapter {

	private final Environment env;
	private final UserService userService;
	private final BCryptPasswordEncoder bcruyptBCryptPasswordEncoder;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.authorizeRequests()
			.antMatchers("/**")
			.hasIpAddress(env.getProperty("gateway.ip"))
			.and()
			.addFilter(getAuthenticationFilter());
		
		//so we can view h2-console - disable frameOptions
		http.headers().frameOptions().disable();
	}
	

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService).passwordEncoder(bcruyptBCryptPasswordEncoder);
	}
	
	private Filter getAuthenticationFilter() throws Exception {
		AuthenticationFilter authFilter = new AuthenticationFilter(
												userService, env, 
												authenticationManager());
		authFilter.setFilterProcessesUrl(env.getProperty(("login.url.path")));
		return authFilter;
	}




	
}
