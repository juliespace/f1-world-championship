package edu.upenn.cis550.f1project.service;

import java.util.List;

import org.geojson.FeatureCollection;

import edu.upenn.cis550.f1project.entity.Round;
import edu.upenn.cis550.f1project.entity.Year;

public interface MapService {
	List<Year> getYears();

	List<Round> getRoundsInfo(int year); 

	FeatureCollection getRoundsFeatures(); 
}
