package com.example.backend.service;

import com.example.backend.model.Financeiro;
import org.springframework.stereotype.Service;

public class FinanceiroService {
    public FinanceiroService calcularJuro(Financeiro financeiro){
        Double resultado = financeiro.getValorInicial() * Math.pow((1 +  financeiro.getTaxaJuro() / 100), financeiro.getPrazo());
        financeiro.setValorFinal(resultado);

        return financeiro;
    }
}
