package edu.upenn.cis550.f1project.controller;

import edu.upenn.cis550.f1project.common.R;
import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import edu.upenn.cis550.f1project.service.GDPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/gdp")
public class GDPController {
    @Autowired
    GDPService gdpService;

    @GetMapping("/country_host_f1")
    public R getCountryWithGDP(@RequestParam("year") int year) {
        List<CountryWithGDP> countryWithGDPS = gdpService.selectCountriesThatHoldF1WithGDP(year);

        return R.ok().put("cities", countryWithGDPS);
    }
}
