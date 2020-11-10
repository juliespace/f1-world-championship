package edu.upenn.cis550.f1project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.upenn.cis550.f1project.entity.DriverWithLapTime;
import edu.upenn.cis550.f1project.entity.DriverWithPoints;
import edu.upenn.cis550.f1project.mapper.F1Mapper;
import edu.upenn.cis550.f1project.service.DriverService;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    F1Mapper f1Mapper;
    
	@Override
	public List<DriverWithLapTime> getDriversWithLapTime(int number, int season) {
		return f1Mapper.getDriversWithLeastLapTime(number, season);
	}

	@Override
	public List<DriverWithPoints> getDriverWithMostPoints(int number, int startYear, int endYear) {
		return f1Mapper.getDriverWithMostPoints(number, startYear, endYear);
	}

}
