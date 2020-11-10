package edu.upenn.cis550.f1project.entity;

import lombok.Data;

@Data
public class DriverWithPoints {
	private String forename;
	private String surname;
	private int points;

	public String getForename() {
		return forename;
	}

	public void setForename(String forename) {
		this.forename = forename;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	@Override
	public String toString() {
		return "DriverWithPoints [forename=" + forename + ", surname=" + surname + ", points=" + points + "]";
	}

}
