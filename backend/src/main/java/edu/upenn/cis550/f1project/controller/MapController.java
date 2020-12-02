package edu.upenn.cis550.f1project.controller;

import java.util.ArrayList;
import java.util.List;

import org.geojson.FeatureCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.upenn.cis550.f1project.entity.Round;
import edu.upenn.cis550.f1project.entity.Year;
import edu.upenn.cis550.f1project.service.MapService;

@RestController
@RequestMapping("/map")
public class MapController {
	
	@Autowired
	private MapService mapService; 
	
	@GetMapping("/years")
	public List<Integer> getAllYears() {
		List<Year> years = mapService.getYears(); 
		List<Integer> result = new ArrayList<>(); 
		
		for (Year year: years) {
			result.add(year.getYear()); 
		}
				
		return result; 
	}
	
	@GetMapping("/rounds/info")
	public List<Round> getRoundsInfo(@RequestParam("year") int year) {
		return mapService.getRoundsInfo(year);
	}

	@GetMapping("/rounds/features")
	public FeatureCollection getRoundsFeatures() {
		return mapService.getRoundsFeatures();
	}
}
