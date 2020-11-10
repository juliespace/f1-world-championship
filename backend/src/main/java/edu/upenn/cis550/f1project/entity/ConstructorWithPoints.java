package edu.upenn.cis550.f1project.entity;

import lombok.Data;

@Data
public class ConstructorWithPoints {
	private String constructorName;
	private int points;

	public String getName() {
		return constructorName;
	}

	public void setName(String name) {
		this.constructorName = name;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	@Override
	public String toString() {
		return "ConstructorWithPoints [name=" + constructorName + ", points=" + points + "]";
	}

}
