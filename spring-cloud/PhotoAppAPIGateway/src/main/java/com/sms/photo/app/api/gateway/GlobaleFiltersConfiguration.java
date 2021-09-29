package com.sms.photo.app.api.gateway;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Configuration 
@Slf4j
public class GlobaleFiltersConfiguration {

	//lower the order index higher the priority
	@Order(1)
	@Bean
	public GlobalFilter secondPreFilter() {
		return (exchange, chain) -> {
			log.debug("Second global prefilter executed ...");
			return chain.filter(exchange).then(Mono.fromRunnable(()->{
				log.debug("Third global post filer executed ..");
			}));
		};
	}
	
	@Order(2)
	@Bean
	public GlobalFilter thirdPreFilter() {
		return (exchange, chain) -> {
			log.debug("Third global prefilter executed ...");
			return chain.filter(exchange).then(Mono.fromRunnable(()->{
				log.debug("Second global post filer executed ..");
			}));
		};
	}
	
	@Order(3)
	@Bean
	public GlobalFilter fourthPreFilter() {
		return (exchange, chain) -> {
			log.debug("Fourth global prefilter executed ...");
			return chain.filter(exchange).then(Mono.fromRunnable(()->{
				log.debug("First global post filer executed ..");
			}));
		};
	}
}
