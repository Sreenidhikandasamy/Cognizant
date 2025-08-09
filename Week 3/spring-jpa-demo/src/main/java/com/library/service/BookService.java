package com.library.service;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostConstruct
    public void init() {
        bookRepository.save(new Book("Spring Boot Basics", "Sree"));
        bookRepository.findAll().forEach(book ->
            System.out.println("📘 Found: " + book.getTitle() + " by " + book.getAuthor())
        );
    }
}
