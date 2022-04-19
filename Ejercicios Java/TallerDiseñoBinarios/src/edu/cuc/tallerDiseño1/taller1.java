/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.tallerDiseño1;

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
public class taller1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        FileInputStream entrada = null;
        
        try {
            
            File archivo = new File("example.BMP");
            entrada = new FileInputStream(archivo);
            char byte1, byte2;
            
            if (entrada.available() != -1){
                byte1 = (char) entrada.read();
                byte2 = (char) entrada.read();
                
                System.out.println(byte1);
                System.out.println(byte2);
                
                if (byte1 == 'B' && byte2 == 'M'){
                    System.out.println("El archivo es de tipo BMP");
                } else {
                    System.out.println("El archivo no es de tipo BMP");
                }
            }
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller1.class.getName()).log(Level.SEVERE, null, ex);
            
        } catch (IOException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller1.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            try {
                entrada.close();
            } catch (IOException ex) {
                Logger.getLogger(taller1.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
        
    }
    
}
