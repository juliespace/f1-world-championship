package edu.upenn.cis550.f1project.entity.vo;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class TopDriverInTopCountry {
    Integer id;
    String forename;
    String surname;
    Integer totalPoints;
    String countryName;
    BigDecimal gdp;
}
