package edu.upenn.cis550.f1project.service.impl;

import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import edu.upenn.cis550.f1project.mapper.GDPMapper;
import edu.upenn.cis550.f1project.service.GDPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GDPServiceImpl implements GDPService {
    @Autowired
    GDPMapper gdpMapper;

    @Override
    public List<CountryWithGDP> selectCountriesThatHoldF1WithGDP(int year) {
        return gdpMapper.selectCountriesThatHoldF1WithGDP(year);
    }
}
