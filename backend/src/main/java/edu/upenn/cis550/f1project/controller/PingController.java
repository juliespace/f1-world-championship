package edu.upenn.cis550.f1project.controller;

import edu.upenn.cis550.f1project.common.R;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class PingController {

    @RequestMapping("/ping")
    public R ping() {
        return R.ok().put("msg", "pong");
    }
}
