package com.cognizant.helloworld.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class hellocontroller {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(hellocontroller.class);

    @GetMapping("/hello")
    public String sayHello() {
        LOGGER.info("START sayHello()");
        String message = "Hello World!!";
        LOGGER.info("END sayHello()");
        return message;
    }
}
