package edu.upenn.cis550.f1project.service.impl;

import java.util.Set;

import lombok.Data;

@Data
public class RoundFilter {
	private final String property;
	private final String label;
	private final Set<String> values;
}
