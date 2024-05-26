package com.vikram.fullstackbackend.excepetion;

public class UserNotFountExcepetion extends RuntimeException {
   public UserNotFountExcepetion(Long id){
       super("Could not found the user with id "+ id);
   }
}
