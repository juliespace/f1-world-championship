package edu.upenn.cis550.f1project.controller;

import edu.upenn.cis550.f1project.common.R;
import edu.upenn.cis550.f1project.entity.City;
import edu.upenn.cis550.f1project.service.F1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("f1")
public class F1Controller {

    @Autowired
    private F1Service f1Service;

    @GetMapping("/city")
    public R getCity(@RequestParam("name") String name) {

        City city = f1Service.getCityByName(name);
        return R.ok().put("city", city);
    }
}
