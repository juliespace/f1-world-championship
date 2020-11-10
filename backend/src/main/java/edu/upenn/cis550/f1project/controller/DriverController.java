package edu.upenn.cis550.f1project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.upenn.cis550.f1project.entity.DriverWithLapTime;
import edu.upenn.cis550.f1project.entity.DriverWithPoints;
import edu.upenn.cis550.f1project.service.DriverService;

@RestController
@RequestMapping("/driver")
public class DriverController {

	@Autowired
	private DriverService driverService; 
	
	@GetMapping("/laptime")
	public List<DriverWithLapTime> getDriversWithLapTime(@RequestParam("number") int number,
			@RequestParam("season") int season) {
		return driverService.getDriversWithLapTime(number, season); 
	}
	
	@GetMapping("/points") 
	public List<DriverWithPoints> getDriverWithPoints(@RequestParam("number") int number,
			@RequestParam("startYear") int startYear, @RequestParam("endYear") int endYear) {
		return driverService.getDriverWithMostPoints(number, startYear, endYear); 
	}
}
