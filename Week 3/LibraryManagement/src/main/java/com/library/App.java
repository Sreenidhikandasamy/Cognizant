package com.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class App {
    public static void main(String[] args) {
        // Use try-with-resources to auto-close the context
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            BookService service = (BookService) context.getBean("bookService");
            service.displayBook();
        }
    }
}
