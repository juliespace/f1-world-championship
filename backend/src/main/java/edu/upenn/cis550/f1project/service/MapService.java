package edu.upenn.cis550.f1project.service;

import java.util.Collection;
import java.util.List;

import org.geojson.FeatureCollection;

import edu.upenn.cis550.f1project.entity.Round;
import edu.upenn.cis550.f1project.entity.Year;
import edu.upenn.cis550.f1project.service.impl.RoundFilter;

public interface MapService {
	List<Year> getYears();

	List<Round> getRoundsInfo(int year); 

	Collection<RoundFilter> getRoundFilters();
	
	FeatureCollection getRoundsFeatures(); 
}
