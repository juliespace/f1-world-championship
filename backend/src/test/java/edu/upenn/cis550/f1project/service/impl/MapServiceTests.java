package edu.upenn.cis550.f1project.service.impl;

import org.geojson.FeatureCollection;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import edu.upenn.cis550.f1project.service.MapService;

@SpringBootTest(webEnvironment = WebEnvironment.NONE)
public class MapServiceTests {
	Logger logger = LoggerFactory.getLogger(MapServiceTests.class);

	@Autowired
	private MapService mapService;
	
	@Test
	public void testRoundsFeatures() {
		FeatureCollection fc = mapService.getRoundsFeatures();
		ObjectMapper mapper = new ObjectMapper();
		try {
			String str = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(fc);
			logger.info("fc: \n{}", str);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}
}
