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
public class Taller1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        ListaSimple<Integer> lista = new ListaSimple<>();
        //adicion al final
        System.out.println("***** ADICIONANDO AL FINAL *****");
        lista.adicionarAlInicio(1);
        lista.adicionarAlInicio(8);
        lista.adicionarAlInicio(86);
        lista.adicionarAlInicio(86);
        System.out.println("Adicionando al inicio: " + lista);
        lista.adicionarAlFinal(123);
        lista.adicionarAlFinal(8);
        lista.adicionarAlFinal(8);
        lista.adicionarAlFinal(912);
        System.out.println("Adicionando al final: " + lista);
        System.out.println("\n");
        
        
        
//        eliminar al final
//        System.out.println("***** ELIMINANDO AL FINAL *****");
//        System.out.println("Lista: " + lista);
//        System.out.println("Elemento eliminado: " + lista.eliminarAlFinal());
//        System.out.println("Lista: " + lista);
//        System.out.println("Elemento eliminado: " + lista.eliminarAlFinal());
//        System.out.println("Lista: " + lista);
//        System.out.println("Elemento eliminado: " + lista.eliminarAlFinal());
//        System.out.println("Lista: " + lista);
//        System.out.println("\n");
        


//        Indicar el número de apariciones de un dato en la lista.
//        System.out.println("***** NUMERO DE APARICIONES *****");
//        System.out.println("Lista: " + lista);
//        System.out.println("El numero 8 aparece " + lista.numeroDeApariciones(8) + " veces");
//        System.out.println("El numero 86 aparece " + lista.numeroDeApariciones(86) + " veces");
//        System.out.println("El numero 123 aparece " + lista.numeroDeApariciones(123) + " veces");
//        System.out.println("\n");
        

        
//        Indicar las posiciones en las que aparece un dato en la lista.
//        System.out.println("***** POSICIONES DONDE APARECE *****");
//        System.out.println("Posiciones donde aparece el 8: " + lista.posicionesDondeAparece(8));
//        System.out.println("Posiciones donde aparece el 88: " + lista.posicionesDondeAparece(86));
//        System.out.println("Posiciones donde aparece el 912: " + lista.posicionesDondeAparece(912));
        


//        Ultimo elemento de la lista.
        System.out.println("***** ULTIMO ELEMENTO *****");
        System.out.println("Lista: " + lista);
        System.out.println("El ultimo elemento de la lista es: " + lista.ultimoElemento());
        System.out.println("Elemento elimiado: " + lista.eliminarAlFinal());
        System.out.println("El ultimo elemento de la lista es: " + lista.ultimoElemento());  
    }
    
}
