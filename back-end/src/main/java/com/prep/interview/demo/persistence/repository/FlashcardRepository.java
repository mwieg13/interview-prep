package com.prep.interview.demo.persistence.repository;

import org.springframework.data.repository.CrudRepository;

import com.prep.interview.demo.persistence.entity.Flashcard;

public interface FlashcardRepository extends CrudRepository<Flashcard, Integer>{

}
