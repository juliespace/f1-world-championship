package edu.upenn.cis550.f1project.controller;

import java.util.List;

import edu.upenn.cis550.f1project.common.R;
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
	public R getDriversWithLapTime(@RequestParam("number") int number,
								   @RequestParam("season") int season) {
		List<DriverWithLapTime> result = driverService.getDriversWithLapTime(number, season);

		return R.ok().put("data", result);
	}
	
	@GetMapping("/points") 
	public R getDriverWithPoints(@RequestParam("number") int number,
			@RequestParam("start_year") int startYear, @RequestParam("end_year") int endYear) {
		List<DriverWithPoints> result = driverService.getDriverWithMostPoints(number, startYear, endYear);

		return R.ok().put("data", result);
	}
}
