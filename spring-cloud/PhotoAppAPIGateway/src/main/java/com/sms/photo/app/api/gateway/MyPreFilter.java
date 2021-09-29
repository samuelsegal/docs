package com.sms.photo.app.api.gateway;

import java.util.Set;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Component
@Slf4j
public class MyPreFilter implements GlobalFilter, Ordered {

	@Override
	public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
		String requestpath = exchange.getRequest().getPath().toString();
		log.debug("Prefilter executed : exchange request path : %s", requestpath);
		
		HttpHeaders headers = exchange.getRequest().getHeaders();
		
		Set<String> headerNames = headers.keySet();
		
		headerNames.forEach((headerName) -> {
			String headerValue = headers.getFirst(headerName);
			log.debug(String.format("Header : %s : %s",headerName, headerValue));
		});
		
		return chain.filter(exchange);
	}

	@Override
	public int getOrder() {
		return 0;
	}

}
