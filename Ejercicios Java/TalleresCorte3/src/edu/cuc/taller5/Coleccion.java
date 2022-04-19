/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller5;

import edu.cuc.taller4.Empleado;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Coleccion {
    
    private String nombre;
    private Libro[][] coleccion = new Libro[3][3];

    //constructor
    public Coleccion(String nombre) {
        this.nombre = nombre;
    }

    
    //getters and setters
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
    //metodos especificos
    public String verMatriz(){
        String resultado = "";
        
        for (int i = 0; i < coleccion.length; i++) {
            for (int j = 0; j < coleccion[0].length; j++) {
                resultado += coleccion[i][j];
                resultado += "\t\t";
            }
            resultado += "\n";
            resultado += "\n";
        }
        
        return resultado;
    }
    
    public void añadirLibro(String titulo, String autor, Double precio, String editorial, int cantidadBodega){
        
        Libro nuevoLibro = new Libro(titulo, autor, precio, editorial, cantidadBodega);
        
        for (int i = 0; i < coleccion.length; i++) {
            for (int j = 0; j < coleccion[0].length; j++) {
                if (coleccion[i][j] == null){
                    coleccion[i][j] = nuevoLibro;
                    return;
                }
            }
        }
    }
    
    public boolean buscarLibro(String titulo, String autor, String editorial){
        //Se colocó de esta forma para acercarlo mas a la realidad
        //ya que normalmente se realizan busqueda solo con estas caracteristicas, las demás no son tan necesarias
        
        for (int i = 0; i < coleccion.length; i++) {
            for (int j = 0; j < coleccion[0].length; j++) {
                if (coleccion[i][j] != null){
                    if ((coleccion[i][j].getTitulo().equals(titulo)) && (coleccion[i][j].getEditorial().equals(editorial))
                        && (coleccion[i][j].getAutor().equals(autor))){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public ArrayList<Object> busquedaEditorialAutor(String autor, String editorial){
        
        ArrayList<Object> lista = new ArrayList<> ();
        
        for (int i = 0; i < coleccion.length; i++) {
            for (int j = 0; j < coleccion[0].length; j++) {
                if (coleccion[i][j] != null){
                    if ((coleccion[i][j].getAutor().equals(autor)) && (coleccion[i][j].getEditorial().equals(editorial))){
                        lista.add("\t" + coleccion[i][j]);
                    }
                }
            }
        }
        return lista;
    }

    public ArrayList<Object> busquedaPrecio(Double precio){
        
        ArrayList<Object> lista = new ArrayList<> ();
        
        for (int i = 0; i < coleccion.length; i++) {
            for (int j = 0; j < coleccion[0].length; j++) {
                if (coleccion[i][j] != null){
                    if (coleccion[i][j].getPrecio().equals(precio)){
                        lista.add("\t" + coleccion[i][j]);
                    }
                }
            }
        }
        
        return lista;
    } 

    public ArrayList<Object> busquedaTitulo(String titulo){
        
        ArrayList<Object> lista = new ArrayList<> ();
        
        for (int i = 0; i < coleccion.length; i++) {
            for (int j = 0; j < coleccion[0].length; j++) {
                if (coleccion[i][j] != null){
                    if (coleccion[i][j].getTitulo().equals(titulo)){
                        lista.add("\t" + coleccion[i][j] + " Editorial:   " + coleccion[i][j].getEditorial());
                    }
                }
            }
        }
        
        return lista;
    }

    
    
    //metodos generales
    @Override
    public String toString(){
        return "Libros: \n" + verMatriz();
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 31 * hash + Objects.hashCode(this.nombre);
        hash = 31 * hash + Arrays.deepHashCode(this.coleccion);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Coleccion other = (Coleccion) obj;
        if (!Objects.equals(this.nombre, other.nombre)) {
            return false;
        }
        if (!Arrays.deepEquals(this.coleccion, other.coleccion)) {
            return false;
        }
        return true;
    }
    
    
}
