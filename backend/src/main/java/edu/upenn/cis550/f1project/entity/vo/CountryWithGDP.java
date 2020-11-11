package edu.upenn.cis550.f1project.entity.vo;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CountryWithGDP {
    Integer year;
    BigDecimal gdp;
    String countryName;
}
