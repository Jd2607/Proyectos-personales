/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tallerdediseño2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class taller3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner cursor = null;
            
        try {
            
            File archivo = new File("taller3.txt");
            cursor = new Scanner(archivo);
            int sumatoria = 0;
            
            while(cursor.hasNext()){
                String palabra = cursor.next();
                boolean isNumeric =  palabra.matches("[+-]?\\d*(\\.\\d+)?");
                
                if (isNumeric){
                    sumatoria = sumatoria + Integer.parseInt(palabra);
                }
            }
            
            System.out.println("La sumatoria total es de " + sumatoria);
            
        } catch (FileNotFoundException ex) {
            
            Logger.getLogger(taller3.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            cursor.close();
            
        }
        
    }
    
}
