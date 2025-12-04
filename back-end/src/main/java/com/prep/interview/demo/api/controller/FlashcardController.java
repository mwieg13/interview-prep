package com.prep.interview.demo.api.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping("/questions")
	public Flashcard findQuestion(@RequestParam String id) {
		Flashcard question = null;
		
		try {
			Integer intId = Integer.parseInt(id);
			Optional<Flashcard> flashcard = this.flashcardRepository.findById(intId);
			
			if (flashcard.isPresent())
				question = flashcard.get();
			
		} catch (NumberFormatException ex) {}
		
		return question;
	}
}
