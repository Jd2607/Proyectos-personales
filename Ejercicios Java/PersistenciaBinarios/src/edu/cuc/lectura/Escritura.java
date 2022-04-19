/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.lectura;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Escritura {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        FileOutputStream salida = null;
        
        try {
            
            File archivo = new File("escritrua1.txt");
            salida = new FileOutputStream(archivo, true);
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(Escritura.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            try {
                salida.close();
            } catch (IOException ex) {
                Logger.getLogger(Escritura.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
    }
    
}
