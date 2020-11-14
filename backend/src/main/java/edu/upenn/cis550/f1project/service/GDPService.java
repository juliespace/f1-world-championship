package edu.upenn.cis550.f1project.service;

import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import edu.upenn.cis550.f1project.entity.vo.TopPlayerInTopCountry;

import java.util.List;
import java.util.Map;

public interface GDPService {
    List<CountryWithGDP> selectCountriesThatHoldF1WithGDP(int year);

    Map<String, String> findDriverHomelandGDPTrend(int driverId, int years);

    List<TopPlayerInTopCountry> getTopPlayerAndTopCountry(int mPercentage, int nPercentage);
}
