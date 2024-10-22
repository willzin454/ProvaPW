package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.backend.service.FinanceiroService;

public class FinanceiroController {
    @Autowired
    private FinanceiroService FinaceiroService;

    @PostMapping("/calcular")
    public Financeiro calcularJuro(@RequestBody Financeiro financeiro){
        return financeiroService
    }
}
