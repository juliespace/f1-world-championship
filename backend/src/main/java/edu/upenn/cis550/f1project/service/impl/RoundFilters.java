package edu.upenn.cis550.f1project.service.impl;

import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

import lombok.Data;

@Data
public class RoundFilters {
	private final Map<String, RoundFilter> filters = new TreeMap<>();
	
	public void addFilter(String property, String label, String value) {
		RoundFilter filter = filters.get(property);
		if (filter == null) {
			Set<String> values = new TreeSet<String>();
			values.add("-");
			filter = new RoundFilter(property, label, values);
			filters.put(property, filter);
		}
		filter.getValues().add(value);
	}
}
