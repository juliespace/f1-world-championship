package edu.upenn.cis550.f1project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.upenn.cis550.f1project.entity.DriverWithLapTime;
import edu.upenn.cis550.f1project.entity.DriverWithPoints;

public interface DriverService {

	List<DriverWithLapTime> getDriversWithLapTime(int number, int season);

	List<DriverWithPoints> getDriverWithMostPoints(int number, int startYear, int endYear);

}
