/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.persistencia;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class taller4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner cursor = null;
        FileWriter writerA = null;
        FileWriter writerB = null;
        FileWriter writerC = null;
        
        try {
            
            File archivo = new File("taller4.txt");
            File salidaA = new File("letrasA.txt");
            File salidaB = new File("letrasB.txt");
            File salidaC = new File("letrasC.txt");
            cursor = new Scanner(archivo);
            String palabra;            
            
            while(cursor.hasNext()) {
                String[] letras;
                
                palabra = cursor.next();
                letras = palabra.split("");
                
                try {
                    writerA = new FileWriter(salidaA,true);
                    writerB = new FileWriter(salidaB,true);
                    writerC = new FileWriter(salidaC,true);

                    if (letras[0].equals("a") || letras[0].equals("A")) {
                        System.out.println(palabra);
                        writerA.write(palabra + " ");
                    } else if(letras[0].equals("b") || letras[0].equals("B")) {
                        System.out.println(palabra);
                        writerB.write(palabra + " ");
                    } else if(letras[0].equals("c") || letras[0].equals("C")) {
                        System.out.println(palabra);
                        writerC.write(palabra + " ");
                    }
                } catch (IOException ex) {
                    System.out.println(ex.getMessage());
                    Logger.getLogger(taller4.class.getName()).log(Level.SEVERE, null, ex);
                } finally {
                    try {
                        writerA.close();
                        writerB.close();
                        writerC.close();
                    } catch (IOException ex) {
                        Logger.getLogger(taller4.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            } 
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller4.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            cursor.close();
            
        }
    }
    
}
