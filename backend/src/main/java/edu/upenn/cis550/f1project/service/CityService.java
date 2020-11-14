package edu.upenn.cis550.f1project.service;

import edu.upenn.cis550.f1project.entity.City;
import org.springframework.stereotype.Service;

public interface CityService {
    City getCityByName(String name);
}
