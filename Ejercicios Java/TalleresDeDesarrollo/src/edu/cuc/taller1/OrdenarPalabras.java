/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller1;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author Jalarcon4
 */
public class OrdenarPalabras {
    
    private File miArchivo;

    public OrdenarPalabras(File miArchivo) {
        this.miArchivo = miArchivo;
    }
    
    public void ordenarPalabras() throws FileNotFoundException, IOException{
        
        Scanner leer = new Scanner(this.miArchivo);
        int longitudMaxima = 0;
        ArrayList<String> listaPalabras = new ArrayList<>();
        File archivoOrdenado = new File("taller1Solucion.txt");
        FileWriter writer = new FileWriter(archivoOrdenado, true);
        
        while(leer.hasNext()){
            String palabra = leer.next();
            listaPalabras.add(palabra);
            if (palabra.length() > longitudMaxima){
                longitudMaxima = palabra.length();
            }
        }
        
        if (!archivoOrdenado.exists()){
            archivoOrdenado.createNewFile();
        }
        
        for (int i = 1; i <= longitudMaxima; i++) {
            for (int j = 0; j < listaPalabras.size(); j++) {
                if (listaPalabras.get(j).length() == i){
                    writer.write(listaPalabras.get(j) + " ");
                }
            }
        }
        
        writer.close();
    }
}
