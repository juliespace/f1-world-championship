package edu.upenn.cis550.f1project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import edu.upenn.cis550.f1project.entity.City;
import edu.upenn.cis550.f1project.entity.ConstructorWithLapTime;
import edu.upenn.cis550.f1project.entity.ConstructorWithPoints;

@Repository
public interface F1Mapper {
	City getCityByName(@Param("name") String name);

	void saveCity(@Param("city") City city);

	List<ConstructorWithLapTime> getConstructorsWithLeastLapTime(@Param("number") int number,
			@Param("startYear") int startYear, @Param("endYear") int endYear);
	
	List<ConstructorWithPoints> getConstructorsWithMostPoints(@Param("number") int number,
			@Param("startYear") int startYear, @Param("endYear") int endYear);
}
