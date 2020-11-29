package edu.upenn.cis550.f1project.service.impl;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.geojson.FeatureCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import edu.upenn.cis550.f1project.entity.Round;
import edu.upenn.cis550.f1project.entity.RoundWiki;
import edu.upenn.cis550.f1project.entity.Year;
import edu.upenn.cis550.f1project.mapper.MapMapper;
import edu.upenn.cis550.f1project.service.MapService;

@Service
public class MapServiceImpl implements MapService {
	Logger logger = LoggerFactory.getLogger(MapServiceImpl.class);
	
	@Autowired
	private MapMapper mapMapper;

	@Override
	public List<Year> getYears() {
		return mapMapper.getAllYears();
	}

	@Override
	public List<Round> getRoundsInfo(int year) {
		return mapMapper.getRoundsInfo(year);
	}

	@Override
	public FeatureCollection getRoundsFeatures(int year) {
		ObjectMapper mapper = new ObjectMapper();
		InputStream is = getClass().getResourceAsStream("rounds_wiki.json");
		try {
			FeatureCollection features = new FeatureCollection();
			List<RoundWiki> rounds = mapper.readValue(is, new TypeReference<List<RoundWiki>>(){});
			for (RoundWiki round : rounds) {
				logger.info("round: {}", round);
			}
			return features;
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

	}
}
