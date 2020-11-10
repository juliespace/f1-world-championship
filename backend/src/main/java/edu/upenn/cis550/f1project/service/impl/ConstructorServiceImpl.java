package edu.upenn.cis550.f1project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.upenn.cis550.f1project.entity.ConstructorWithLapTime;
import edu.upenn.cis550.f1project.entity.ConstructorWithPoints;
import edu.upenn.cis550.f1project.mapper.F1Mapper;
import edu.upenn.cis550.f1project.service.ConstructorService;

@Service
public class ConstructorServiceImpl implements ConstructorService {
    @Autowired
    F1Mapper f1Mapper;

	@Override
	public List<ConstructorWithLapTime> getConstructorsWithLeastLapTime(int number, int startYear, int endYear) {
		return f1Mapper.getConstructorsWithLeastLapTime(number, startYear, endYear);
	}

	@Override
	public List<ConstructorWithPoints> getConstructorsWithMostPonts(int number, int startYear, int endYear) {
		return f1Mapper.getConstructorsWithMostPoints(number, startYear, endYear);
	}

}
