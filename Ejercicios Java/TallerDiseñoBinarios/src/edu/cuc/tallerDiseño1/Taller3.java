/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.tallerDiseño1;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Taller3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       
        FileInputStream salida = null;
        int contadorLineas = 0;
        
        try {
            
            File archivoTexto = new File("archivoTexto.txt");
            
            salida = new FileInputStream(archivoTexto);
            
            while(salida.available() != 0){
                int caracterCodigo = salida.read();
                
                if (caracterCodigo == 10){
                    contadorLineas += 1;
                }
            }
            
            System.out.println("El texto procesado tiene " + contadorLineas + " lineas.");
            
        } catch (IOException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(Taller3.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            try {
                salida.close();
            } catch (IOException ex) {
                Logger.getLogger(Taller3.class.getName()).log(Level.SEVERE, null, ex);
            }
            
        }
    }
    
}
