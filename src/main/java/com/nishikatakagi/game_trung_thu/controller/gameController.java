package com.nishikatakagi.game_trung_thu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class gameController {
    @GetMapping("")
    public String showIndex() {
        return "/index.html";
    }

    @GetMapping("/khobau")
    public String showGame1() {
        return "/part1.html";
    }
}
