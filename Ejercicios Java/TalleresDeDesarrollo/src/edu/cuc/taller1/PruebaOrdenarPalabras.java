/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller1;

import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Jalarcon4
 */
public class PruebaOrdenarPalabras {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        try {
            
            File archivo1 = new File("taller1Palabras.txt");
            OrdenarPalabras orden1 = new OrdenarPalabras(archivo1);
            
            orden1.ordenarPalabras();
            
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
            Logger.getLogger(PruebaOrdenarPalabras.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
