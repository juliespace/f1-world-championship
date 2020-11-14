package edu.upenn.cis550.f1project.mapper;

import org.springframework.stereotype.Repository;

@Repository
public interface CountryMapper {
    int numberOfCountries();
}
