
package edu.cuc.listas;

/**
 * Interfaz Lista
 * @author adelahoz6
 */
public interface Lista<E> {
    void adicionarAlInicio(E dato);
    E eliminarAlInicio();
    boolean buscar(E dato);
    boolean estaVacia();
    void limpiar();
    int longitud();
    E buscarPorPosicion(int posicion);
    boolean eliminar(E dato);
}
