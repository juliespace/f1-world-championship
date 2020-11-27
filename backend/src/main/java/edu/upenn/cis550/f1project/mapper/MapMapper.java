package edu.upenn.cis550.f1project.mapper;

import java.util.List;
import org.springframework.stereotype.Repository;
import edu.upenn.cis550.f1project.entity.Year;

@Repository
public interface MapMapper {
	List<Year> getAllYears(); 
}
