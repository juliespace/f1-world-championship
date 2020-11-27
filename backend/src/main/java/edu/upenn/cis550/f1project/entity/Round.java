package edu.upenn.cis550.f1project.entity;

import lombok.Data;

@Data
public class Round {
	private int round; 
	private String name; 
	private String date; 
	private String firstname; 
	private String lastname; 
	private int points; 
	private String constructor; 
	private String location; 
	private String country; 
}
