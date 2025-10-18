package com.prep.interview.demo.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prep.interview.demo.persistence.entity.Flashcard;
import com.prep.interview.demo.persistence.repository.FlashcardRepository;

@RestController
public class FlashcardController {

	private final FlashcardRepository flashcardRepository;
	
	public FlashcardController(FlashcardRepository flashcardRepository) {
		this.flashcardRepository = flashcardRepository;
	}
	
	
	@GetMapping("/flashcards")
	public Iterable<Flashcard> findAllFlashcards() {
		return this.flashcardRepository.findAll();
	}
}
