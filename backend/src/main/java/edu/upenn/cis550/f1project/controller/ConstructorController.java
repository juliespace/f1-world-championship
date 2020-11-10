package edu.upenn.cis550.f1project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.upenn.cis550.f1project.entity.ConstructorWithLapTime;
import edu.upenn.cis550.f1project.service.ConstructorService;

@RestController
@RequestMapping("/constructor")
public class ConstructorController {

	@Autowired
	private ConstructorService constructorService;

	@GetMapping("/laptime")
	public List<ConstructorWithLapTime> getConstructorsWithLapTime(@RequestParam("number") int number,
			@RequestParam("startYear") int startYear, @RequestParam("endYear") int endYear) {
		return constructorService.getConstructorsWithLeastLapTime(number, startYear, endYear);
	}
}
