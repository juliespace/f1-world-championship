package edu.upenn.cis550.f1project.entity.geo;

import java.util.Map;

import lombok.Data;

@Data
public class GeoFeature {
	private String type;
	private Map<String, Object> properties;
	private Geometry geometry;
}
