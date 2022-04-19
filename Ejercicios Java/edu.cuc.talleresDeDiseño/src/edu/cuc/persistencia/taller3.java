/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.persistencia;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class taller3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner cursor = null;
        
        try {
            int contadorPalabras = 0;
            File miArchivo = new File("taller3.txt");
            cursor = new Scanner(miArchivo);
            
            while(cursor.hasNext()){
                System.out.println(cursor.next());
                contadorPalabras++;
            }
            
            System.out.println("El archivo leido tiene " + contadorPalabras + " palabras.");
        } catch (FileNotFoundException ex) {
            System.out.println(ex.getMessage());
            Logger.getLogger(taller3.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            cursor.close();
        }
    
    }
    
}
