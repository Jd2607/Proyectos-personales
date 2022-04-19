/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller5;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Prueba {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        //añadir libro
        Coleccion prueba1 = new Coleccion("Prueba1");
        prueba1.añadirLibro("Don quijote", "Cervantes saavedra", 5000.0, "Librería de Garnier Hermanos", 3500);
        prueba1.añadirLibro("Juan salvador gaviota", "Richard Bach", 7000.0, "Macmillan Publishers", 1500);
        prueba1.añadirLibro("Cuentos de Oscar Wilde", "Oscar Wilde", 10000.0, "Atenea LTDA", 2500);
        prueba1.añadirLibro("Moby Dick", "Herman Melville", 15000.0, "Editorial Andres Bello", 5000);
        prueba1.añadirLibro("El amor, las mujeres y la muerte", "Arthur Schopenhauer", 15000.0, "Random House", 1000);
        prueba1.añadirLibro("Lo que no tiene nombre", "Piedad Bonnett", 15000.0, "Random House", 5000);
        prueba1.añadirLibro("El club de los psicópatas", "John Katzenbach", 7000.0, "Random House", 1000);
        prueba1.añadirLibro("El psicoanalista", "John Katzenbach", 15000.0, "Random House", 5000);
        prueba1.añadirLibro("Don quijote", "Cervantes saavedra", 25000.0, "Herder Editorial", 3500);
        System.out.println(prueba1.verMatriz());
        
        //pruebas de busqueda
        
        //busqueda simple
        System.out.println("Busqueda 1: " + prueba1.buscarLibro("Juan salvador gaviota", "Richard Bach","Macmillan Publishers"));
        System.out.println("Busqueda 2: " + prueba1.buscarLibro("Don quijote", "Cervantes saavedra","Librería de Garnier Hermanos"));
        
        //busqueda por editorial y autor
        System.out.println("\nBusqueda por editorial y autor");
        System.out.println(prueba1.busquedaEditorialAutor("John Katzenbach", "Random House"));
        System.out.println(prueba1.busquedaEditorialAutor("Oscar Wilde", "Atenea LTDA"));
        
        //busqueda por precio
        System.out.println("\nBusqueda por precio");
        System.out.println(prueba1.busquedaPrecio(15000.0));
        System.out.println(prueba1.busquedaPrecio(7000.0));
        
        //busqueda por titulo
        System.out.println("\nBusqueda por titulo");
        System.out.println(prueba1.busquedaTitulo("Don quijote"));
        
    }
    
}
