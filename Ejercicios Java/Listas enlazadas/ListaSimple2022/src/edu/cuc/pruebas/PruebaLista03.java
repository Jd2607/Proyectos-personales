package edu.cuc.pruebas;

import edu.cuc.listas.ListaSimple;

/**
 *
 * @author adelahoz6
 */
public class PruebaLista03 {
    public static void main(String[] args) {
        ListaSimple<Double> listaReales = new ListaSimple<>();
        listaReales.adicionarAlInicio(3.5);
        listaReales.adicionarAlInicio(6.0);
        listaReales.adicionarAlInicio(4.0);
        listaReales.adicionarAlInicio(-19.56);
        listaReales.adicionarAlInicio(56.9);
        System.out.println(listaReales);
        //Eliminar
        System.out.println("Eliminar: "+listaReales.eliminarAlInicio());
        System.out.println(listaReales);
        System.out.println("Eliminar: "+listaReales.eliminarAlInicio());
        System.out.println(listaReales);
    }
}
