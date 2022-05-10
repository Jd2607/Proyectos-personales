package edu.cuc.pruebas;

import edu.cuc.listas.ListaSimple;

/**
 *
 * @author adelahoz6
 */
public class PruebaLista01 {
    public static void main(String[] args) {
        ListaSimple<Integer> listaEnteros = new ListaSimple<>();
        System.out.println(listaEnteros);        
        listaEnteros.adicionarAlInicio(-250);
        listaEnteros.adicionarAlInicio(19);
        listaEnteros.adicionarAlInicio(0);
        System.out.println(listaEnteros);        
        
    }
}
