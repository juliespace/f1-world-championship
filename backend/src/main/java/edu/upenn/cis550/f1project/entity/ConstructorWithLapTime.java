package edu.upenn.cis550.f1project.entity;

import lombok.Data;

@Data
public class ConstructorWithLapTime {
	private String constructorName;
	private int averageLapTime;

	public String getConstructorName() {
		return constructorName;
	}

	public void setConstructorName(String constructorName) {
		this.constructorName = constructorName;
	}

	public int getAverageLapTime() {
		return averageLapTime;
	}

	public void setAverageLapTime(int averageLapTime) {
		this.averageLapTime = averageLapTime;
	}

	@Override
	public String toString() {
		return "ConstructorWithLapTime [constructorName=" + constructorName + ", averageLapTime=" + averageLapTime
				+ "]";
	}

}
