package edu.upenn.cis550.f1project.entity;

public class DriverWithLapTime {
	private String forename;
	private String surname;
	private int milliseconds;

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

	public int getMilliseconds() {
		return milliseconds;
	}

	public void setMilliseconds(int milliseconds) {
		this.milliseconds = milliseconds;
	}

	@Override
	public String toString() {
		return "DriverWithLapTime [forename=" + forename + ", surname=" + surname + ", milliseconds=" + milliseconds
				+ "]";
	}

}
