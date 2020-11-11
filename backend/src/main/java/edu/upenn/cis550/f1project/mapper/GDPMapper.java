package edu.upenn.cis550.f1project.mapper;

import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GDPMapper {
    List<CountryWithGDP> selectCountriesThatHoldF1WithGDP(@Param("year") int year);
}
