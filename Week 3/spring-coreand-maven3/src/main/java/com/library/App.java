package com.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class App {
    public static void main(String[] args) {
        try (ClassPathXmlApplicationContext context = 
                new ClassPathXmlApplicationContext("applicationContext.xml")) {

            BookService service = (BookService) context.getBean("bookService");
            service.displayBook();
        }
    }
}
