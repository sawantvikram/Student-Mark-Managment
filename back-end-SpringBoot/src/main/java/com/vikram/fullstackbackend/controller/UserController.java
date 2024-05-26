package com.vikram.fullstackbackend.controller;

import com.vikram.fullstackbackend.excepetion.UserNotFountExcepetion;
import com.vikram.fullstackbackend.model.User;
import com.vikram.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired   //used for injecting
    private UserRepository userRepository;

    @PostMapping("/user")  // for posting the data
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFountExcepetion(id));
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setUsername((newUser.getUsername()));
                    user.setEmail(newUser.getEmail());
                    user.setSem1(newUser.getSem1());
                    user.setSem2(newUser.getSem2());
                    user.setSem3(newUser.getSem3());
                    return userRepository.save(user);
                }) .orElseThrow(()->new UserNotFountExcepetion(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFountExcepetion(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted sucessfully.";
    }

}
