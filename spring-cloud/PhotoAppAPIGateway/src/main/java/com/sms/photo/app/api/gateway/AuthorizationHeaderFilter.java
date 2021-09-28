package com.sms.photo.app.api.gateway;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Component
@Slf4j
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {

	@Autowired
	private Environment env;
	
	
	public AuthorizationHeaderFilter() {
		super(Config.class);
	}

	public static class Config {
		
	}

	@Override
	public GatewayFilter apply(Config config) {
		
		return (exchange, chain) -> {
			ServerHttpRequest request = exchange.getRequest();
			
			if(!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
				return OnError(exchange, "No Authoization Header!", HttpStatus.UNAUTHORIZED);
			}
			
			String authorizationHeader = request.getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
			String jwt = authorizationHeader.replace("Bearer ", "");
			
			log.info("JWT:");
			log.info(jwt);
			
			if(!isJwtValid(jwt)) {
				return OnError(exchange, "Invalid JWT!", HttpStatus.UNAUTHORIZED);
			}
			return chain.filter(exchange);
		};
	}

	private Mono<Void> OnError(ServerWebExchange exchange, String string, HttpStatus unauthorized) {
		ServerHttpResponse response = exchange.getResponse();
		response.setStatusCode(unauthorized);
		return response.setComplete();
	}
	
	private boolean isJwtValid(String jwt) {
		boolean isValid = true;
		
		String subject = Jwts.parser()
			.setSigningKey(env.getProperty("token.secret"))
			.parseClaimsJws(jwt)
			.getBody()
			.getSubject();
		
		if(subject == null || subject.isEmpty()) {
			return false;
		}
		
		return isValid;
	}
}
