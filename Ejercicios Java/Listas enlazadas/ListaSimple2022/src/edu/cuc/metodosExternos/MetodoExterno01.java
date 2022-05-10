
package edu.cuc.metodosexternos;

import edu.cuc.listas.ListaSimple;

/**
 *
 * @author adelahoz6
 */
public class MetodoExterno01 {
    //Mayor de una lista de enteros
    public static int mayorLista(ListaSimple<Integer> lista) {
        int mayor = lista.buscarPorPosicion(0);
        for (int i = 0; i < lista.longitud(); i++) {
            int actual = lista.buscarPorPosicion(i);
            if (actual > mayor) {
                mayor = actual;
            }
        }
        return mayor;
    }
}
