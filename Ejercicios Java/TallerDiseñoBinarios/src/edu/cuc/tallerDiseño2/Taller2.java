/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.tallerDiseño2;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Taller2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        FileInputStream entrada = null;
        
        try {
            
            File archivo = new File("archivoTaller2.txt");
            ArrayList<Character> listaCaracteres = new ArrayList<>();
            
            if (!archivo.exists()) {
                archivo.createNewFile();
            }   
            
            entrada = new FileInputStream(archivo);
            
            while (entrada.available() != 0){
                listaCaracteres.add((char) entrada.read());
            }
            
            System.out.println("Lista original: " + listaCaracteres);
            Collections.reverse(listaCaracteres);
            System.out.println("Lista revertida: " + listaCaracteres);
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(Taller2.class.getName()).log(Level.SEVERE, null, ex);
            
        } catch (IOException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(Taller2.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            try {
                entrada.close();
            } catch (IOException ex) {
                Logger.getLogger(Taller2.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
    }
    
}
