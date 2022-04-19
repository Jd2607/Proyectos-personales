/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tallerdediseño2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
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
        
        Scanner cursor = null;
            
        try {
            
            ArrayList<String> palabrasRepetidas = new ArrayList<>();
            ArrayList<String> palabras = new ArrayList<>();
            int contadorPalabra = 0;
            File archivo = new File("taller2.txt");
            cursor = new Scanner(archivo);
            
            
            while(cursor.hasNext()){
                
                String palabra = cursor.next();
                palabras.add(palabra);
                
                if (!palabrasRepetidas.contains(palabra)){
                    palabrasRepetidas.add(palabra);
                }
            }
            
            
            for (int i = 0; i < palabrasRepetidas.size(); i++) {
                for (int j = 0; j < palabras.size(); j++) {
                    if (palabrasRepetidas.get(i).equals(palabras.get(j))){
                        contadorPalabra++;
                    } 
                }
                System.out.println(palabrasRepetidas.get(i) + " aparece " + contadorPalabra + " veces");
                contadorPalabra = 0;
            }
            
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller2.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            cursor.close();
            
        }
        
        
    }
    
}
