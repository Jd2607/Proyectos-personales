/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller3;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class PruebaCirculo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Circulo circulo1 = new Circulo(6);
        System.out.println("*************Circulo 1*************");
        System.out.println(circulo1.toString());
        System.out.println("El perimetro del circulo es: " + circulo1.perimetro());
        System.out.println("El area del circulo es: " + circulo1.area());
        System.out.println("La longitud de la circunferencia del circulo es: " + circulo1.longitudCircunferencia());
        
        
        Circulo circulo2 = new Circulo(5);
        System.out.println("\n*************Circulo 2*************");
        System.out.println(circulo2.toString());
        System.out.println("El perimetro del circulo es: " + circulo2.perimetro());
        System.out.println("El area del circulo es: " + circulo2.area());
        System.out.println("La longitud de la circunferencia del circulo es: " + circulo2.longitudCircunferencia());
        System.out.println(circulo1.compararCirculos(circulo2));
        
        //Si la medida ingresada del radio es negativo se coloca como 1. 
        //Ya que la medida del radio siempre debe ser mayor a cero
        Circulo circulo3 = new Circulo(-2);
        System.out.println("\n*************Circulo 3*************");
        System.out.println(circulo3.toString());
        System.out.println("El perimetro del circulo es: " + circulo3.perimetro());
        System.out.println("El area del circulo es: " + circulo3.area());
        System.out.println("La longitud de la circunferencia del circulo es: " + circulo3.longitudCircunferencia());
        System.out.println(circulo2.compararCirculos(circulo3));
        
        
        System.out.println("\nEquals circulo 1 y 2: " + circulo1.equals(circulo2));
        System.out.println("Equals circulo 2 y 3: " + circulo2.equals(circulo3));
        
    }
    
}
