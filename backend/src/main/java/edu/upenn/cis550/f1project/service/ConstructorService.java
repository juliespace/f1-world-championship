package edu.upenn.cis550.f1project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.upenn.cis550.f1project.entity.ConstructorWithLapTime;
import edu.upenn.cis550.f1project.entity.ConstructorWithPoints;

@Service
public interface ConstructorService {
	List<ConstructorWithLapTime> getConstructorsWithLeastLapTime(int number, int startYear, int endYear);

	List<ConstructorWithPoints> getConstructorsWithMostPonts(int number, int startYear, int endYear);
}
