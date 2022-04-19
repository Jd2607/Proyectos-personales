/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.persistencia;

import java.io.File;
import java.io.FileWriter;
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
        
        FileWriter escritor1 = null;
        
        try {
            
            File archivo1 = new File("miArchivo1.txt");
            escritor1 = new FileWriter(archivo1);
            
            escritor1.write("Primera linea escrita\n");
            escritor1.write("Segunda linea escrita\n");
            escritor1.write("Tercera linea escrita\n");
            
            
            
        } catch (IOException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(Escritura.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            try {
                escritor1.close();
            } catch (IOException ex) {
                System.out.println(ex.getMessage());
                Logger.getLogger(Escritura.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
        
    }
    
}
