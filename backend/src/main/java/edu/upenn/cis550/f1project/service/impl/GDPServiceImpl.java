package edu.upenn.cis550.f1project.service.impl;

import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import edu.upenn.cis550.f1project.entity.vo.TopPlayerInTopCountry;
import edu.upenn.cis550.f1project.mapper.CountryMapper;
import edu.upenn.cis550.f1project.mapper.DriverMapper;
import edu.upenn.cis550.f1project.mapper.GDPMapper;
import edu.upenn.cis550.f1project.service.GDPService;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class GDPServiceImpl implements GDPService {
    @Autowired
    GDPMapper gdpMapper;

    @Autowired
    CountryMapper countryMapper;

    @Autowired
    DriverMapper driverMapper;

    @Override
    public List<CountryWithGDP> selectCountriesThatHoldF1WithGDP(int year) {
        return gdpMapper.selectCountriesThatHoldF1WithGDP(year);
    }

    @Override
    public Map<String, String> findDriverHomelandGDPTrend(int driverId, int years) {
        List<CountryWithGDP> list = gdpMapper.findDriverHomelandGDPTrend(driverId, years);

        double value1 = list.get(0).getGdp().doubleValue();
        double value2 = list.get(1).getGdp().doubleValue();

        NumberFormat format = NumberFormat.getPercentInstance();
        String percentage = format.format((value2 - value1) / value2);

        Map<String, String> map = new HashMap<>();

        map.put("first-year", list.get(0).getYear().toString());
        map.put("last-year", list.get(1).getYear().toString());
        map.put("gdp-trend", percentage);

        return map;
    }

    @Override
    public List<TopPlayerInTopCountry> getTopPlayerAndTopCountry(int mPercentage, int nPercentage) {

        int nTotal = driverMapper.numberOfDrivers();
        int mTotal = countryMapper.numberOfCountries();

        return gdpMapper.bestDriverXBestCountry(mPercentage * nTotal / 100, nPercentage * mTotal / 100);
    }
}
