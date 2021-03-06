package edu.upenn.cis550.f1project.service.impl;

import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import edu.upenn.cis550.f1project.entity.vo.CountryWithTotalGDP;
import edu.upenn.cis550.f1project.entity.vo.TopDriverInTopCountry;
import edu.upenn.cis550.f1project.entity.vo.TrendInfo;
import edu.upenn.cis550.f1project.mapper.CountryMapper;
import edu.upenn.cis550.f1project.mapper.DriverMapper;
import edu.upenn.cis550.f1project.mapper.GDPMapper;
import edu.upenn.cis550.f1project.service.GDPService;
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
    public Map<String, String> findDriverHomelandGDPTrend(TrendInfo info) {
        List<CountryWithGDP> list = gdpMapper.findDriverHomelandGDPTrend(info.getName(), info.getYear());

        double value1 = list.get(0).getGdp().doubleValue();
        double value2 = list.get(1).getGdp().doubleValue();

        NumberFormat format = NumberFormat.getPercentInstance();
        String percentage = format.format((value2 - value1) / value2);

        Map<String, String> map = new HashMap<>();

        map.put("first_year", list.get(0).getYear().toString());
        map.put("last_year", list.get(1).getYear().toString());
        map.put("gdp_trend", percentage);

        return map;
    }

    @Override
    public List<TopDriverInTopCountry> getTopDriverAndTopCountry(int mPercentage, int nPercentage) {

        int nTotal = driverMapper.numberOfDrivers();
        int mTotal = countryMapper.numberOfCountries();

        return gdpMapper.bestDriverXBestCountry(mPercentage * nTotal / 100, nPercentage * mTotal / 100);
    }

    @Override
    public List<CountryWithTotalGDP> getTopDriverHomeLandGDP(int nPercentage) {

        int nTotal = driverMapper.numberOfDrivers();

        return gdpMapper.topPlayersHomelandGDP(nPercentage * nTotal / 100);
    }
}
