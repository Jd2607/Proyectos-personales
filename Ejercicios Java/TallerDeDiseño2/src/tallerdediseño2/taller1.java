/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tallerdediseño2;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
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
        
        Scanner cursor1 = null;
        Scanner cursor2 = null;
        FileWriter escritor = null;
                    
        try {
            
            File archivo1 = new File("taller1Texto1.txt");
            File archivo2 = new File("taller1Texto2.txt");
            File archivo3 = new File("taller1.txt");
            String lineaTexto1, lineaTexto2;
            
            cursor1 = new Scanner(archivo1);
            cursor2 = new Scanner(archivo2);
            
            while (cursor1.hasNextLine() || cursor2.hasNextLine()){
                lineaTexto1 = cursor1.nextLine();
                lineaTexto2 = cursor2.nextLine();
                
                try {
                    if (lineaTexto1.equals(lineaTexto2)){
                        escritor = new FileWriter(archivo3, true);
                        escritor.write(lineaTexto1 + "\n");
                    }
                } catch (IOException ex) {
                    System.out.println(ex.getMessage());
                    Logger.getLogger(taller1.class.getName()).log(Level.SEVERE, null, ex);
                } finally {
                    try {
                        escritor.close();
                    } catch (IOException ex) {
                        Logger.getLogger(taller1.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            }
            
        } catch (FileNotFoundException ex) {
            
            System.out.println(ex.getMessage());
            Logger.getLogger(taller1.class.getName()).log(Level.SEVERE, null, ex);
            
        } finally {
            
            cursor1.close();
            cursor2.close();
            
        }
    }
    
}
