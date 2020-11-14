package edu.upenn.cis550.f1project.controller;

import edu.upenn.cis550.f1project.common.R;
import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import edu.upenn.cis550.f1project.entity.vo.TopPlayerInTopCountry;
import edu.upenn.cis550.f1project.service.GDPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/gdp")
public class GDPController {
    @Autowired
    GDPService gdpService;

    @GetMapping("/country_host_f1")
    public R getCountryWithGDP(@RequestParam("year") int year) {
        List<CountryWithGDP> result = gdpService.selectCountriesThatHoldF1WithGDP(year);

        return R.ok().put("data", result);
    }

    @GetMapping("/driver/{id}/homeland_gdp_trend")
    public R getHomelandGDPTrend(@PathVariable("id") int id) {
        Map<String, String> result = gdpService.findDriverHomelandGDPTrend(id);

        return R.ok().put("data", result);
    }

    @GetMapping("/drivers/{mPercentage}/countries/{nPercentage}")
    public R getTopPlayerAndTopCountry(@PathVariable("mPercentage") int mPercentage, @PathVariable("nPercentage") int nPercentage) {
        List<TopPlayerInTopCountry> result = gdpService.getTopPlayerAndTopCountry(mPercentage, nPercentage);

        return R.ok().put("data", result);
    }
}
