package edu.upenn.cis550.f1project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.upenn.cis550.f1project.common.R;
import edu.upenn.cis550.f1project.entity.City;
import edu.upenn.cis550.f1project.service.CityService;

@RestController
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping("/city")
    public R getCity(@RequestParam("name") String name) {

        City city = cityService.getCityByName(name);
        return R.ok().put("city", city);
    }
}
