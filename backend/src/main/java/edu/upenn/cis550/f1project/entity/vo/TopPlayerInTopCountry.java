package edu.upenn.cis550.f1project.entity.vo;

import lombok.Data;

@Data
public class TopPlayerInTopCountry {
    Integer id;
    String forename;
    String surname;
    Integer totalPoints;
    String countryName;
}
