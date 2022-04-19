/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.cuc.taller3;

/**
 *
 * @author FAMILIA ALARCON MOZO
 */
public class Circulo {
    
    private double radio;

    //constructor
    public Circulo(double radio) {
        if (radio > 0) {
            this.radio = radio;
        } else {
            this.radio = 1;
        }
    }

    //getters and setters
    public double getRadio() {
        return radio;
    }
    
    public void setRadio(double radio) {
        if (radio > 0) {
            this.radio = radio;
        } else {
            this.radio = 1;
        }
    }
    
    
    //metodos especificos
    public double perimetro(){
        return 2*3.14*this.radio;
    }
    
    public double area(){
        return 3.14*Math.pow(radio, 2) ;
    }
    
    public double longitudCircunferencia(){
        return 3.14*(this.radio*2);
    }
    
    public String compararCirculos(Circulo circulo){
        if ((2*3.14*this.radio) > circulo.perimetro()){
            return "El circulo de radio " + this.radio + " posee mayor perimetro.";
        } else if ((2*3.14*this.radio) < circulo.perimetro()){
            return "El circulo de radio " + circulo.getRadio() + " posee mayor perimetro.";
        } else {
            return "Los circulos comparados poseen la misma medida del perimetro.";
        }
    }

    
    @Override
    public String toString(){
        return "Radio del circulo: " + this.radio;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + (int) (Double.doubleToLongBits(this.radio) ^ (Double.doubleToLongBits(this.radio) >>> 32));
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
        final Circulo other = (Circulo) obj;
        if (Double.doubleToLongBits(this.radio) != Double.doubleToLongBits(other.radio)) {
            return false;
        }
        return true;
    }
    
    
}
