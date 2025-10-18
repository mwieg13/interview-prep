package com.prep.interview.demo.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "flashcards")
public class Flashcard {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer _id;
	
	private String deck_name;
	
	private String question;
	
	private String answer;
	
	// Hibernate needs this, but I will probably never need to use it
	private Flashcard() {}
	
	public Flashcard(String deck_name, String question, String answer) {
		this.deck_name = deck_name;
		this.question = question;
		this.answer = answer;
	}
	
	public Integer getId() {
		return this._id;
	}
	
	public String getQuestion() {
		return this.question;
	}
	
	public String getAnswer() {
		return this.answer;
	}
	
	public String getDeckName() {
		return this.deck_name;
	}
	
	
	
}
