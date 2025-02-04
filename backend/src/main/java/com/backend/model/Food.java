package com.backend.model;

import java.util.List;
import java.util.Locale.Category;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Food {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private Long price;
	
	private Category foodCategory;
	
	@Column(length = 1000)
	@ElementCollection
	private List<String> images;
	
	private boolean available;
	
	private

}
