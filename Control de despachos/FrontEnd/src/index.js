import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { MenuDesplegable } from './Componentes/MenuDesplegable';

const contenido = document.getElementById('contenido')
const menu = document.getElementById('menu')

ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, contenido);

if (contenido.innerText.includes("Iniciar Sesion") || contenido.innerText.includes("Registro") || contenido.innerText.includes("Home")){
    ReactDOM.render(<React.StrictMode> <MenuDesplegable /> </React.StrictMode>, menu);
    menu.style.display = 'none'
} else {
    ReactDOM.render(<React.StrictMode> <MenuDesplegable /> </React.StrictMode>, menu);
}