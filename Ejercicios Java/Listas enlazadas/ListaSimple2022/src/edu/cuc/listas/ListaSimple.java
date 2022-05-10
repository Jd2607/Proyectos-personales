package edu.cuc.listas;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Objects;

/**
 * Implementación Lista Simple
 *
 * @author adelahoz6
 * @modified JUAN DAVID ALARCON
 */
public class ListaSimple<E> implements Lista<E>, Serializable {

    protected NodoSimple<E> nodoInicial;

    /**
     * METODOS DE ADICION
     */
    /**
     * Adicionar dato al inicio
     *
     * @param elemento
     */
    @Override
    public void adicionarAlInicio(E elemento) {
        NodoSimple<E> nodoNuevo = new NodoSimple<>(elemento);
        if (estaVacia()) {
            //Caso Lista Vacia
            nodoInicial = nodoNuevo;
        } else {
            //Caso con al menos un elemento en la lista            
            nodoNuevo.siguiente = nodoInicial; //nodoNuevo -> nodoInicial
            nodoInicial = nodoNuevo;
        }
    }

    /**
     * Adicionar dato al final
     *
     * @param elemento
     */
    public void adicionarAlFinal(E elemento){
        NodoSimple<E> nodoNuevo = new NodoSimple<>(elemento);
        if (estaVacia()){
            //si la lista está vacia llamamos a adicionarAlInicio
            adicionarAlInicio(elemento);
        } else {
            //lista con elementos
            NodoSimple<E> actual = nodoInicial;
            while(actual.siguiente != null){
                actual = actual.siguiente;
            }
            actual.siguiente = nodoNuevo;
        }
    }
    
    
    
    /**
     * METODOS DE ELIMINACION
     */
    /**
     * Elimina el elemento inicial
     *
     * @return
     */
    @Override
    public E eliminarAlInicio() {
        if (estaVacia()) {
            //Caso Lista Vacia
            return null;
        } else {
            //Caso lista con elementos
            E dato = nodoInicial.dato;
            nodoInicial = nodoInicial.siguiente; //nodoInicial -> nodoInicial
            return dato;
        }
    }
    
    /**
     * Elimina el elemento final
     *
     * @return
     */
    public E eliminarAlFinal(){
        if (estaVacia()){
            //Caso lista vacia
            return null;
        } else {
            NodoSimple<E> previo = null;
            NodoSimple<E> actual = nodoInicial;
            while (actual.siguiente != null){
                previo = actual;
                actual = actual.siguiente;
            }
            
            if (nodoInicial.siguiente == null){
                return eliminarAlInicio();
            } else {
                previo.siguiente = null;
            }
            
            return actual.dato;
        }
    }
    
    /**
     * Elimina todas las apariciones de un elemento 
     *
     * @param datoAEliminar elemento a eliminar
     * @return
     */
    public int eliminarTodas(E datoAEliminar){
        if(estaVacia()){
            //lista vacia
            return -1;
        } else {
            NodoSimple<E> previo = null;
            NodoSimple<E> actual = nodoInicial;
            int apariciones = 0;
            
            while(actual != null){
                if (actual.dato.equals(datoAEliminar)){
                    if (nodoInicial.equals(actual)){
                        nodoInicial = nodoInicial.siguiente;
                        apariciones++;
                        actual = nodoInicial;
                    } else {
                        previo.siguiente = actual.siguiente;
                        actual = actual.siguiente;
                        apariciones++;
                    }
                } else {
                    previo = actual;
                    actual = actual.siguiente;
                }
            }
            
            return apariciones;
        }
    }
    
    /**
     * Elimina el elemento en la posicion indicada
     *
     * @param posicionEliminar
     * @return
     */
    public E eliminarPosicion(int posicionEliminar){
        if (estaVacia() || posicionEliminar < 0){
            throw new IndexOutOfBoundsException("Indice: " + posicionEliminar);
        } else {
            int posicion = 0;
            NodoSimple<E> previo = null;
            NodoSimple<E> actual = nodoInicial;
            while(actual != null && posicion != posicionEliminar){
                posicion++;
                previo = actual;
                actual = actual.siguiente;
            }
            
            if (actual == null){
            //caso no encontrado
                throw new IndexOutOfBoundsException("Indice: " + posicionEliminar + ", Tamaño: " + posicion);
            } else {
            //caso encontrado
                if (actual.equals(nodoInicial)){
                    //el elemento a eliminar es el primero
                    return eliminarAlInicio();
                } else if (actual.siguiente == null){
                    //el elemento a eliminar es el ultimo
                    previo.siguiente = null;
                    return actual.dato;
                } else {
                    previo.siguiente = actual.siguiente;
                    actual = actual.siguiente;
                    return actual.dato;
                }
            }
        }
    }
    
    /**
     * Método para eliminar un elemento por información
     *
     * @param dato el elemento a eliminar
     * @return
     */
    @Override
    public boolean eliminar(E dato) {
        //Lista Vacia
        if (estaVacia()) {
            return false;
        } else {
            //Nodo Inicial
            if (nodoInicial.dato.equals(dato)) {
                eliminarAlInicio();
                return true;
            } else {
                //Busqueda de información
                NodoSimple<E> previo = null;
                NodoSimple<E> actual = nodoInicial;
                while (actual != null && !actual.dato.equals(dato)) {
                    previo = actual;
                    actual = actual.siguiente;
                }
                //Caso Dato no encontrado
                if (actual == null) {
                    return false;
                } else {
                    //Caso Dato Encontrado
                    if (actual.siguiente == null) {
                        //Dato se encuentra en el ultimo nodo
                        previo.siguiente = null;
                        return true;
                    } else {
                        //Caso Nodo Intermedio
                        previo.siguiente = actual.siguiente;
                        return true;
                    }
                }
            }
        }
    }
    
    
    
    /**
     * METODOS DE BUSQUEDA
     */
    /**
     * Busca un elemento especifico
     *
     * @param datoABuscar
     * @return
     */
    @Override
    public boolean buscar(E datoABuscar) {
        //Caso Lista Vacia
        if (estaVacia()) {
            return false;
        } else {
            //Caso lista con elementos
            NodoSimple<E> actual = nodoInicial;
            while (actual != null) {
                if (actual.dato.equals(datoABuscar)) {
                    return true;
                }
                actual = actual.siguiente;
            }
            return false;
        }
    }
    
    /**
     * Indica cuantas veces aparece un dato en la lista
     *
     * @param datoABuscar
     * @return
     */
    public int numeroDeApariciones(E datoABuscar){
        if(estaVacia()){
            //Caso lista vacia
            return -1;
        } else {
            NodoSimple<E> actual = nodoInicial;
            int contadorApariciones = 0;
            while(actual != null){
                if (actual.dato.equals(datoABuscar)){
                    contadorApariciones++;
                }
                actual = actual.siguiente;
            }
            return contadorApariciones;
        }
    }
    
    /**
     * Retorna el penultimo elemento
     *
     * @return
     */
    public E penultimoElemento(){
        if (estaVacia()){
            //caso lista vacia
            return null;
        } else {
            NodoSimple<E> actual = nodoInicial;
            NodoSimple<E> previo = null;
            while(actual.siguiente != null){
                previo = actual;
                actual = actual.siguiente;
            }
            return previo.dato;
        }
    }
    
    /**
     * Retorna el ultimo elemento
     *
     * @return
     */
    public E ultimoElemento(){
        if (estaVacia()){
            //caso lista vacia
            return null;
        } else {
            NodoSimple<E> actual = nodoInicial;
            while(actual.siguiente != null){
                actual = actual.siguiente;
            }
            return actual.dato;
        }
    }
    
    
    
    /**
     * METODOS DE POSICIONES
     */
    /**
     * Indica las posiciones en las que aparece el elemento
     *
     * @param datoABuscar
     * @return
     */
    public ArrayList<Integer> posicionesDondeAparece(E datoABuscar){
        if (estaVacia()){
            //caso lista vacia
            return null;
        } else {
            int posicion = 0;
            ArrayList<Integer> posiciones = new ArrayList<>();
            NodoSimple<E> actual = nodoInicial;
            while(actual != null){
                posicion++;
                if (actual.dato.equals(datoABuscar)){
                    posiciones.add(posicion);
                }
                actual = actual.siguiente;
            }
            return posiciones;
        }
    }
    
    /**
     * Retorna todos los elementos entre las posiciones indicada
     * No retorna aquellos cuya posicion sea la inicial o la final 
     *
     * @param inicial
     * @param ultimo
     * @return
     */
    public ArrayList<E> elementosEntrePosiciones(int inicial, int ultimo){
        if (estaVacia()){
            //lista vacia
            return null;
        } else {
            if (inicial >= ultimo){
                return null;
            }
            //lista con elementos
            int posicion = 0;
            ArrayList<E> elementos = new ArrayList<>();
            NodoSimple<E> actual = nodoInicial;
            
            while(actual != null){
                posicion++;
                if(posicion > inicial && posicion < ultimo){
                    elementos.add(actual.dato);
                }
                actual = actual.siguiente;
            }
            
            return elementos;
        }
    }
    
    /**
     * Método para buscar un elemento por posición
     *
     * @param posicion la posición del elemento a buscar, si existe
     * @return
     */
    @Override
    public E buscarPorPosicion(int posicion) {
        if (estaVacia() || posicion < 0) {
            throw new IndexOutOfBoundsException("Indice: " + posicion);
        } else {
            NodoSimple<E> actual = nodoInicial;
            int contador = 0;
            while (actual != null && contador < posicion) {
                contador++;
                actual = actual.siguiente;
            }
            if (actual == null) {
                return null; //NO existe la posición 
            } else {
                return actual.dato;
            }
        }
    }
    
    /**
     * Método para mover un elemento desde la posición indicada hasta el final
     *
     * @param posicion la posición del elemento a buscar, si existe
     * @return
     */
    public boolean moverPosicionFinal(int posicionMover){
        if (estaVacia() || posicionMover < 0) {
            throw new IndexOutOfBoundsException("Indice: " + posicionMover);
        } else {
            int posicion = 0;
            NodoSimple<E> auxiliar = null;
            NodoSimple<E> previo = null;
            NodoSimple<E> actual = nodoInicial;
            
            while(actual.siguiente != null){
                if (posicion == posicionMover){
                    if (actual.equals(nodoInicial)){
                        auxiliar = new NodoSimple<>((E) actual);
                        nodoInicial = nodoInicial.siguiente;
                    } else {
                        auxiliar = new NodoSimple<>((E) actual);
                        previo.siguiente = actual.siguiente;
                        actual = actual.siguiente;
                    }
                } else {
                    previo = actual;
                    actual = actual.siguiente;
                }
                posicion++;
            } 
            
            if (auxiliar != null){
                actual.siguiente = auxiliar;
                return true;
            } else {
                return false;
            }
        }
    }
    
    
    
    /**
     * METODOS AUXILIARES (IMPRIMIR, LONGITUD, ELIMINAR, ETC)
     */
    /**
     * Indica si la lista está vacía
     *
     * @return
     */ 
    @Override
    public boolean estaVacia() {
        return nodoInicial == null;
    }
    
    /**
     * Elimina todos los elementos de la lista
     */
    @Override
    public void limpiar() {
        nodoInicial = null;
    }
    
    /**
     * Indica la cantidad de elementos en la lista
     *
     * @return
     */
    @Override
    public int longitud() {
        NodoSimple<E> actual = nodoInicial;
        int contador = 0;
        while (actual != null) {
            actual = actual.siguiente;
            contador++;
        }
        return contador;
    }
    
    @Override
    public String toString() {
        String info = "";
        NodoSimple<E> actual = nodoInicial;
        while (actual != null) {
            info += actual.dato + " ";
            actual = actual.siguiente;
        }
        return info;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + Objects.hashCode(this.nodoInicial);
        return hash;
    }

    
    
    /**
     * Clase Nodo Simple
     */
    protected class NodoSimple<E> implements Serializable {

        E dato;
        NodoSimple<E> siguiente;

        public NodoSimple(E dato) {
            this.dato = dato;
        }

        public E getDato() {
            return dato;
        }

        public void setDato(E dato) {
            this.dato = dato;
        }

        public NodoSimple<E> getSiguiente() {
            return siguiente;
        }

        public void setSiguiente(NodoSimple<E> siguiente) {
            this.siguiente = siguiente;
        }

        @Override
        public int hashCode() {
            int hash = 3;
            hash = 89 * hash + Objects.hashCode(this.dato);
            hash = 89 * hash + Objects.hashCode(this.siguiente);
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
            final NodoSimple<?> other = (NodoSimple<?>) obj;
            if (!Objects.equals(this.dato, other.dato)) {
                return false;
            }
            return true;
        }

        @Override
        public String toString() {
            return dato.toString();
        }

    }

    /**
     * Método para serializar la instancia actual de la lista
     *
     * @param nombreArchivo
     * @throws FileNotFoundException
     * @throws IOException
     */
    public void guardar(String nombreArchivo) throws FileNotFoundException, IOException {
        FileOutputStream fileOutput = new FileOutputStream(nombreArchivo);
        ObjectOutputStream objectOutput = new ObjectOutputStream(fileOutput);
        objectOutput.writeObject(this);
        objectOutput.close();
        fileOutput.close();
    }

    /**
     * Método para deserializar una lista
     *
     * @param nombreArchivo
     * @return
     * @throws FileNotFoundException
     * @throws IOException
     * @throws ClassNotFoundException
     */
    public static ListaSimple abrir(String nombreArchivo) throws
            FileNotFoundException, IOException, ClassNotFoundException {
        FileInputStream fileInput = new FileInputStream(nombreArchivo);
        ObjectInputStream objectInput = new ObjectInputStream(fileInput);
        ListaSimple listaLeida = (ListaSimple) objectInput.readObject();
        objectInput.close();
        fileInput.close();
        return listaLeida;
    }

}
