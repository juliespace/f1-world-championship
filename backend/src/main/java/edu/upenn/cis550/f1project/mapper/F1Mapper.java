package edu.upenn.cis550.f1project.mapper;

import edu.upenn.cis550.f1project.entity.City;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface F1Mapper {
    City getCityByName(@Param("name") String name);

    void saveCity(@Param("city") City city);
}
