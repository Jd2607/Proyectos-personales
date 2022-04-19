/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller4;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Prueba {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //para la fecha colocar dia/mes/año
        Sistema sistema1 = new Sistema("Prueba 1");
        sistema1.añadirEmpleado(123, "Jose", 123456, 1000, "02/04/1999");
        sistema1.añadirEmpleado(456, "Mario", 654321, 3000, "08/12/1986");
        sistema1.añadirEmpleado(789, "Jose", 300334, 2000, "02/2/1980");
        sistema1.añadirEmpleado(238, "Fernando", 202100, 6000, "02/08/1990");
        System.out.println(sistema1);
    }
    
}
