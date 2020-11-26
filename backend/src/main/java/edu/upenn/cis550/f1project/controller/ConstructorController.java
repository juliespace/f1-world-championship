package edu.upenn.cis550.f1project.controller;

import java.util.List;

import edu.upenn.cis550.f1project.common.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.upenn.cis550.f1project.entity.ConstructorWithLapTime;
import edu.upenn.cis550.f1project.entity.ConstructorWithPoints;
import edu.upenn.cis550.f1project.service.ConstructorService;

@RestController
@RequestMapping("/constructor")
public class ConstructorController {

	@Autowired
	private ConstructorService constructorService;

	@GetMapping("/laptime")
	public R getConstructorsWithLapTime(@RequestParam("number") int number,
			@RequestParam("start_year") int startYear, @RequestParam("end_year") int endYear) {
		List<ConstructorWithLapTime> result = constructorService.getConstructorsWithLeastLapTime(number, startYear, endYear);

		return R.ok().put("data", result);
	}
	
	@GetMapping("/points")
	public R getConstructorsWithPoints(@RequestParam("number") int number,
			@RequestParam("start_year") int startYear, @RequestParam("end_year") int endYear) {
		List<ConstructorWithPoints> result = constructorService.getConstructorsWithMostPonts(number, startYear, endYear);

		return R.ok().put("data", result);
	}
}
