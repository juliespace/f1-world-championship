package edu.upenn.cis550.f1project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import edu.upenn.cis550.f1project.entity.Round;
import edu.upenn.cis550.f1project.entity.Year;

@Repository
public interface MapMapper {
	List<Year> getAllYears();

	List<Round> getRoundsInfo(@Param("year") int year); 
}
