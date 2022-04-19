/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.persistencia;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Archivos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner leer = new Scanner(System.in);
        String opcion;
        
        File miArchivo1 = new File("miArchivo1.txt");
        System.out.println("Existe el archivo?:" + miArchivo1.exists());
        if (!miArchivo1.exists()) {
            
            System.out.println("¿Desea crear el archivo?");
            opcion = leer.nextLine();
            
            if (opcion.equals("si")){
                try {
                    miArchivo1.createNewFile();
                    System.out.println("Archivo creado con exito: " + miArchivo1.getName());
                } catch (IOException ex) {
                    System.out.println(ex.getMessage());
                    Logger.getLogger(Archivos.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
        
        
        if (miArchivo1.exists()){
           
            System.out.println("¿Desea eliminar el archivo?");
            opcion = leer.nextLine();
        
            if (opcion.equals("si")){
                miArchivo1.delete();
                System.out.println("Archivo eliminado con exito");
            }
            
        }
        
    }
    
}
