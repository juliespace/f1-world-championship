package edu.upenn.cis550.f1project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.upenn.cis550.f1project.entity.Year;
import edu.upenn.cis550.f1project.service.MapService;

@RestController
@RequestMapping("/map")
public class MapController {
	
	@Autowired
	private MapService mapService; 
	
	@GetMapping("/years")
	public List<Year> getAllYears() {
		List<Year> ys = mapService.getYears(); 
		
		System.out.println(ys);
		
		return mapService.getYears(); 
	}
}
