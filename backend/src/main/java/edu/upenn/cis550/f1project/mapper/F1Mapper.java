package edu.upenn.cis550.f1project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import edu.upenn.cis550.f1project.entity.ConstructorWithLapTime;
import edu.upenn.cis550.f1project.entity.ConstructorWithPoints;
import edu.upenn.cis550.f1project.entity.DriverWithLapTime;
import edu.upenn.cis550.f1project.entity.DriverWithPoints;

@Repository
public interface F1Mapper {
	List<ConstructorWithLapTime> getConstructorsWithLeastLapTime(@Param("number") int number,
			@Param("startYear") int startYear, @Param("endYear") int endYear);

	List<ConstructorWithPoints> getConstructorsWithMostPoints(@Param("number") int number,
			@Param("startYear") int startYear, @Param("endYear") int endYear);

	List<DriverWithLapTime> getDriversWithLeastLapTime(@Param("number") int number, @Param("year") int season);
	
	List<DriverWithPoints> getDriverWithMostPoints(@Param("number") int number,
			@Param("startYear") int startYear, @Param("endYear") int endYear);
}
