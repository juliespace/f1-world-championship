package edu.upenn.cis550.f1project.controller;

import edu.upenn.cis550.f1project.common.R;
import edu.upenn.cis550.f1project.entity.vo.CountryWithGDP;
import edu.upenn.cis550.f1project.entity.vo.CountryWithTotalGDP;
import edu.upenn.cis550.f1project.entity.vo.TopDriverInTopCountry;
import edu.upenn.cis550.f1project.entity.vo.TrendInfo;
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

        if (result.size() == 0) {
            return R.error(-1, "found zero record");
        }

        return R.ok().put("data", result);
    }

    @PostMapping("/homeland_gdp_trend")
    public R getHomelandGDPTrend(@RequestBody TrendInfo info) {
        Map<String, String> result = gdpService.findDriverHomelandGDPTrend(info);

        if (result.size() == 0) {
            return R.error(-1, "found zero record");
        }

        return R.ok().put("data", result);
    }

    @GetMapping("/top_drivers_in_top_countries")
    public R getTopDriverAndTopCountry(@RequestParam("m") int mPercentage, @RequestParam("n") int nPercentage) {
        List<TopDriverInTopCountry> result = gdpService.getTopDriverAndTopCountry(mPercentage, nPercentage);

        if (result.size() == 0) {
            return R.error(-1, "found zero record");
        }

        return R.ok().put("data", result);
    }

    @GetMapping("/top_driver_homeland_gdp")
    public R getTopDriverHomelandGDP(@RequestParam("n") int nPercentage) {
        List<CountryWithTotalGDP> result = gdpService.getTopDriverHomeLandGDP(nPercentage);

        if (result.size() == 0) {
            return R.error(-1, "found zero record");
        }

        return R.ok().put("data", result);
    }
}
