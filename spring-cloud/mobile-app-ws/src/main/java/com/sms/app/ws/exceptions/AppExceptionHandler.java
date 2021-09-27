package com.sms.app.ws.exceptions;

import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.sms.app.ws.ui.model.response.ErrorMessage;

@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = {Exception.class})
	public ResponseEntity<Object> handleAnyException(Exception ex, WebRequest request){
		
		String message = ex.getLocalizedMessage() != null 
				? ex.getLocalizedMessage() : ex.toString();
		
		ErrorMessage msg = ErrorMessage.builder()
										.message(message)
										.timeStamp(new Date())
										.build();
		 return new ResponseEntity<>(
				 msg, new HttpHeaders(), 
				 HttpStatus.INTERNAL_SERVER_ERROR);

	}
	
	@ExceptionHandler(value = {NullPointerException.class, UserServiceException.class})
	public ResponseEntity<Object> handleUserServiceAndNullPointerException(Exception ex, WebRequest request){
		
		String message = ex.getLocalizedMessage() != null 
				? ex.getLocalizedMessage() : ex.toString();
		
		ErrorMessage msg = ErrorMessage.builder()
										.message(message)
										.timeStamp(new Date())
										.build();
		 return new ResponseEntity<>(
				 msg, new HttpHeaders(), 
				 HttpStatus.INTERNAL_SERVER_ERROR);

	}
	
}
