package com.cognizant.countryweb.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.countryweb.model.Country;

@RestController
public class countryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(countryController.class);
    @RequestMapping("/country")
public Country getCountryIndia() {
    LOGGER.info("START - getCountryIndia");
    Country country;
    try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
        country = (Country) context.getBean("country");
    }
    LOGGER.info("END - getCountryIndia");
    return country;
}

}
