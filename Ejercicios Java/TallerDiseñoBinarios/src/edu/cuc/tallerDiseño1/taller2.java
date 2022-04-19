/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.tallerDiseño1;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
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
        
        FileOutputStream salida = null;
        Scanner leer = null;
        
        try {
            
            String textoRecibido;
            char[] caracteres;
            
            leer = new Scanner(System.in);
            File archivoFinal = new File("archivoFinal.txt");
            salida = new FileOutputStream(archivoFinal, true);
            
            textoRecibido = leer.nextLine();
            
            caracteres = textoRecibido.toCharArray();
            
            for (int i = 0; i < caracteres.length; i++) {
                salida.write(caracteres[i]);
            }
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller2.class.getName()).log(Level.SEVERE, null, ex);
            
        } catch (IOException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller2.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            try {
                salida.close();
            } catch (IOException ex) {
                Logger.getLogger(taller2.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
            
        
    }
    
}
