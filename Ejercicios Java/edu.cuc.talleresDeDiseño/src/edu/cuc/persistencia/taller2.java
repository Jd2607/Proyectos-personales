/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.persistencia;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class taller2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        FileWriter escritor1 = null;
        Scanner leer = null;
            
        try {
            
            File archivo1 = new File("taller2.txt");
            escritor1 = new FileWriter(archivo1);
            
            leer = new Scanner(System.in);
            int longitud;
            
            System.out.println("Indique la longitud del vector");
            longitud = leer.nextInt();
            
            int[] vector = new int[longitud];
            
            for (int i = 0; i < vector.length; i++) {
                System.out.println("Posicion #" + (i+1) + " del vector: ");
                vector[i] = leer.nextInt();
            }
            
            for (int i = 0; i < vector.length; i++) {
                escritor1.write(vector[i] + ",");
            }
            
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
            Logger.getLogger(taller2.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                escritor1.close();
                leer.close();
            } catch (IOException ex) {
                Logger.getLogger(taller2.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        
        
    }
    
}

/*

*/
