package edu.upenn.cis550.f1project.service;

import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import org.springframework.stereotype.Service;

import java.util.List;

public interface GDPService {
    List<CountryWithGDP> selectCountriesThatHoldF1WithGDP(int year);
}
