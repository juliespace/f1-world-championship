package edu.upenn.cis550.f1project.service.impl;

import edu.upenn.cis550.f1project.entity.City;
import edu.upenn.cis550.f1project.mapper.F1Mapper;
import edu.upenn.cis550.f1project.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityServiceImpl implements CityService {
    @Autowired
    F1Mapper f1Mapper;

    @Override
    public City getCityByName(String name) {
        return f1Mapper.getCityByName(name);
    }
}
