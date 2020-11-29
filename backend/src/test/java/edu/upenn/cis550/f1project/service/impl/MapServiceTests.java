package edu.upenn.cis550.f1project.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import edu.upenn.cis550.f1project.service.MapService;
import org.junit.jupiter.api.Test;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class MapServiceTests {

	@Autowired
	private MapService mapService;
	
	@Test
	public void testRoundsFeatures() {
		mapService.getRoundsFeatures(2010);
	}
}
