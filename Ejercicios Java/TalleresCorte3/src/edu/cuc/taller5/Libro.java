/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller5;

import java.util.Objects;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Libro {
    
    private String titulo;
    private String autor;
    private Double precio;
    private String editorial;
    private int cantidadBodega;

    //constructor
    public Libro(String titulo, String autor, Double precio, String editorial, int cantidadBodega) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.editorial = editorial;
        this.cantidadBodega = cantidadBodega;
    }
    
    //getters y setters 
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }

    public Double getPrecio() {
        return precio;
    }
    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getEditorial() {
        return editorial;
    }
    public void setEditorial(String editorial) {
        this.editorial = editorial;
    }

    public int getCantidadBodega() {
        return cantidadBodega;
    }
    public void setCantidadBodega(int cantidadBodega) {
        this.cantidadBodega = cantidadBodega;
    }
    
    //toString
    @Override
    public String toString(){
        return this.titulo + "(" + this.autor + ")" + "  Precio: " + this.precio;
    }
    
    //equals

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 37 * hash + Objects.hashCode(this.titulo);
        hash = 37 * hash + Objects.hashCode(this.autor);
        hash = 37 * hash + Objects.hashCode(this.precio);
        hash = 37 * hash + Objects.hashCode(this.editorial);
        hash = 37 * hash + this.cantidadBodega;
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
        final Libro other = (Libro) obj;
        if (!Objects.equals(this.titulo, other.titulo)) {
            return false;
        }
        if (!Objects.equals(this.autor, other.autor)) {
            return false;
        }
        if (!Objects.equals(this.editorial, other.editorial)) {
            return false;
        }
        return true;
    }
    
}
