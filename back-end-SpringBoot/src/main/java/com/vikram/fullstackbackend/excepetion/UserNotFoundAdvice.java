package com.vikram.fullstackbackend.excepetion;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(UserNotFountExcepetion.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> excepetionHandler(UserNotFountExcepetion excepetion){
        Map<String,String> errorMap=new HashMap<>();
        errorMap.put("errorMessage",excepetion.getMessage());
        return errorMap;
    }

}
