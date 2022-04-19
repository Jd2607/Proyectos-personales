/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.lectura;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Lectura {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        FileInputStream entrada = null;
        
        try {
            
            File archivo1 = new File("lectura1.txt");
            entrada = new FileInputStream(archivo1);
            int longitud = entrada.available();
             
            for (int i = 0; i < longitud; i++) {
                char caracter = (char)entrada.read();
                
                entrada.skip(1);
                System.out.println(caracter);
                
                
            }
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(Lectura.class.getName()).log(Level.SEVERE, null, ex);
            
        } catch (IOException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(Lectura.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            try {
                entrada.close();
            } catch (IOException ex) {
                System.out.println(ex.getMessage());
                Logger.getLogger(Lectura.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
        
    }
    
}
