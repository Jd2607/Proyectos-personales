/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.talleres;

import edu.cuc.listas.ListaSimple;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Taller3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        ListaSimple<Integer> lista = new ListaSimple<>();
//        adicion al final
//        System.out.println("***** ADICIONANDO AL FINAL *****");
        lista.adicionarAlInicio(1);
        lista.adicionarAlInicio(8);
        lista.adicionarAlInicio(3);
        lista.adicionarAlInicio(86);
        lista.adicionarAlInicio(86);
        lista.adicionarAlFinal(8);
        lista.adicionarAlFinal(86);
        lista.adicionarAlFinal(86);
        lista.adicionarAlFinal(7);
        lista.adicionarAlFinal(8);
        lista.adicionarAlFinal(912);
        
        
        
        //Numero de veces consecutivas en las que aparecen un dato en una cadena
    }
    
}
