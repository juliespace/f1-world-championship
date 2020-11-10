package edu.upenn.cis550.f1project.entity;

import lombok.Data;

@Data
public class City {
	Integer id;
	String cityName;
	String stateName;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	@Override
	public String toString() {
		return "City [id=" + id + ", cityName=" + cityName + ", stateName=" + stateName + "]";
	}

}
