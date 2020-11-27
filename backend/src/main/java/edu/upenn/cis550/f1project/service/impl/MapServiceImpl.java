package edu.upenn.cis550.f1project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.upenn.cis550.f1project.entity.Round;
import edu.upenn.cis550.f1project.entity.Year;
import edu.upenn.cis550.f1project.mapper.MapMapper;
import edu.upenn.cis550.f1project.service.MapService;

@Service
public class MapServiceImpl implements MapService{

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

}
