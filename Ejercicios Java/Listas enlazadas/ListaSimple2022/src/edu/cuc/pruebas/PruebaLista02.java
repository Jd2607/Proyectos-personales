package edu.cuc.pruebas;

import edu.cuc.listas.ListaSimple;

/**
 *
 * @author adelahoz6
 */
public class PruebaLista02 {
    public static void main(String[] args) {
        ListaSimple<String> listaCadenas = new ListaSimple<>();
        System.out.println("Lista:"+listaCadenas);
        //Adicionar
        listaCadenas.adicionarAlInicio("hola");
        listaCadenas.adicionarAlInicio("teclado");
        listaCadenas.adicionarAlInicio("universidad");
        listaCadenas.adicionarAlInicio("sistemas");
        System.out.println("Lista:"+listaCadenas);
        //Buscar
        System.out.println("Busqueda 1:"
                +listaCadenas.buscar("universidad"));
    }
}
