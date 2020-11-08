package edu.upenn.cis550.f1project.service;

import edu.upenn.cis550.f1project.entity.City;
import org.springframework.stereotype.Service;

@Service
public interface F1Service {
    City getCityByName(String name);
}
