package com.example.userRestaurantService.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Restaurant Already Exist !!!!")
public class RestaurantAlreadyExistsException extends Exception{
}
