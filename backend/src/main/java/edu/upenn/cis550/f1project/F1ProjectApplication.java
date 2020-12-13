package edu.upenn.cis550.f1project;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@MapperScan("edu.upenn.cis550.f1project.mapper")
@SpringBootApplication
public class F1ProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(F1ProjectApplication.class, args);
    }
}
