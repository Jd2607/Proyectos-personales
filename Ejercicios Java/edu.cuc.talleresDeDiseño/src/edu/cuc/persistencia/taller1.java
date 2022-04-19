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
public class taller1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner cursor = null;
            
        try {
            
            File archivo1 = new File("taller1.txt");
            cursor = new Scanner(archivo1);
            int lineas = 0;
            
            while(cursor.hasNextLine()){
                cursor.nextLine();
                lineas++;
            }
            
            System.out.println("El archivo leido tiene " + lineas + " lineas");
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller1.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            cursor.close();
        }
    }
    
}
