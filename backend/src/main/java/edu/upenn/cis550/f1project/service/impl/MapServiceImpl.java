package edu.upenn.cis550.f1project.service.impl;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.geojson.Feature;
import org.geojson.FeatureCollection;
import org.geojson.LngLatAlt;
import org.geojson.Point;
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
	public Collection<RoundFilter> getRoundFilters() {
		List<RoundWiki> rounds = loadRounds();
		RoundFilters filters = new RoundFilters();
		for (RoundWiki round : rounds) {
			filters.addFilter("time", "Race Year", round.getTime().substring(0, 4));
			filters.addFilter("winnerName", "Winner Name", round.getWinnerName());
			filters.addFilter("winnerCitizenship", "Winner Citizenship", round.getWinnerCitizenship());
		}
		return filters.getFilters().values();
	}
	
	public List<RoundWiki> loadRounds() {
		ObjectMapper mapper = new ObjectMapper();
		InputStream is = getClass().getResourceAsStream("rounds_wiki.json");
		try {
			return mapper.readValue(is, new TypeReference<List<RoundWiki>>() {});
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public FeatureCollection getRoundsFeatures() {
		ObjectMapper mapper = new ObjectMapper();
		InputStream is = getClass().getResourceAsStream("rounds_wiki.json");
		try {
			FeatureCollection features = new FeatureCollection();
			List<RoundWiki> rounds = mapper.readValue(is, new TypeReference<List<RoundWiki>>() {});

			for (RoundWiki round : rounds) {
				Feature feature = new Feature();

				feature.setGeometry(retrievePoint(round));
				feature.setProperties(retrieveProperties(round));

				features.add(feature);
			}

			return features;

		} catch (IOException e) {
			throw new RuntimeException(e);
		}

	}

	/* return coordinates wrapped in Point */
	private Point retrievePoint(RoundWiki round) {
		String coordinateRaw = round.getCoordinate();
		String[] coordinateNums = coordinateRaw.substring(6, coordinateRaw.length() - 1).split(" ");

		double longitude = Double.parseDouble(coordinateNums[0]);
		double latitude = Double.parseDouble(coordinateNums[1]);

		LngLatAlt coordinates = new LngLatAlt(longitude, latitude);

		return new Point(coordinates);
	}

	/* return properties as a map */
	private Map<String, Object> retrieveProperties(RoundWiki round) {
		Map<String, Object> properties = new HashMap<>();
		
		properties.put("country", round.getCountry());
		properties.put("time", round.getTime());
		properties.put("circuit", round.getCircuit());
		properties.put("planImage", round.getPlanImage());
		properties.put("winnerName", round.getWinnerName());
		properties.put("winnerCitizenship", round.getWinnerCitizenship());
		properties.put("winnerDob", round.getWinnerDob());
		properties.put("winnerHeight", round.getWinnerHeight());
		properties.put("winnerImage", round.getWinnerImage());

		return properties;
	}
}
