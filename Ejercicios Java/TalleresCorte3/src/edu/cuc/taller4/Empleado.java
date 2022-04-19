/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller4;

import java.util.Objects;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Empleado {
    
    private int codigo;
    private String nombre;
    private int telefono;
    private double salario;
    private String nacimiento;

    //constructor
    public Empleado(int codigo, String nombre, int telefono, double salario, String nacimiento) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.telefono = telefono;
        this.salario = salario;
        this.nacimiento = nacimiento;
    }

    public Empleado(int codigo){
        
    }

    //getters and setters
    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        if (codigo > 0) {
            this.codigo = codigo;
        } else {
            this.codigo = 0;
        }
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }
    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public double getSalario() {
        return salario;
    }
    public void setSalario(double salario) {
        this.salario = salario;
    }

    public String getNacimiento() {
        return nacimiento;
    }
    public void setNacimiento(String nacimiento) {
        this.nacimiento = nacimiento;
    }
    
    
    //metodos generales
    @Override
    public String toString(){
        return this.nombre + " - Codigo: " + this.codigo;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 67 * hash + this.codigo;
        hash = 67 * hash + Objects.hashCode(this.nombre);
        hash = 67 * hash + this.telefono;
        hash = 67 * hash + (int) (Double.doubleToLongBits(this.salario) ^ (Double.doubleToLongBits(this.salario) >>> 32));
        hash = 67 * hash + Objects.hashCode(this.nacimiento);
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
        final Empleado other = (Empleado) obj;
        if (this.codigo != other.codigo) {
            return false;
        }
        return true;
    }
    
    
    //metodos especificos
    public double salarioAnual(){
        return this.salario*12;
    }
    
    public String mayorSalario(Empleado empleado){
        if (this.salario > empleado.salario) {
            return "El primer empleado posee mayor salario";
        } else if (this.salario > empleado.salario ){
            return "El segundo empleado posee mayor salario";
        } else {
            return "Los salarios de los empleados son iguales";
        }
    }
    
    public int edad(){
        String[] aux = this.nacimiento.split("/");
        int edad = 2021 - Integer.parseInt(aux[2]);
        return edad;
    }
    
    public int semestreCumpleaños(){
        String[] aux = this.nacimiento.split("/");
        int semestre;
        if (Integer.parseInt(aux[1]) <= 6) {
            semestre = 1;
        } else {
            semestre = 2;
        }
        return semestre;
    }
}
