/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller4;

import java.util.ArrayList;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Sistema {
    
    private String nombre;
    private ArrayList<Empleado> listaEmpleados = new ArrayList<>();

    public Sistema(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String verMatriz() {
        String resultado = "";
        for (int i = 0; i < listaEmpleados.size(); i++) { //Filas
            resultado += listaEmpleados.get(i) + "\t";
            resultado += "\n";
        }
        return resultado;
    }
    
    //ToString
    @Override
    public String toString() {
        return "Sistema{ " + nombre + " Empleados: \n" + verMatriz() + "}";
    }
    
    public void añadirEmpleado(int codigo, String nombre, int telefono, double salario, String nacimiento){
        Empleado empleadoNuevo = new Empleado(codigo, nombre, telefono, salario, nacimiento);
        listaEmpleados.add(empleadoNuevo);
    }
    
    public boolean buscarEmpleadoCodigo(int codigo){
        
        Empleado empleado = new Empleado(codigo);
        
        for (int i = 0; i < listaEmpleados.size(); i++) {
            if (empleado.equals(listaEmpleados.get(i))){
                return true;
            }
        }
        
        return false;
    }
    
}
