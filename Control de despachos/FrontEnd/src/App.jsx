import { GenerarOrden } from "./Componentes/GenerarOrden";
import { Historial } from "./Componentes/Historial";
import { OrdenesPendientes } from "./Componentes/OrdenesPendientes";
import { CrearUsuario } from "./Componentes/CrearUsuario";
import { Registro } from "./Componentes/Registro";
import { Login } from './Componentes/Login';
import { Home } from './Componentes/Home';
import { Bienvenido } from './Componentes/Bienvenido';
import { Denegado } from './Componentes/Denegado';
import { Perfil } from "./Componentes/Perfil";

import './css/material-dashboard.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";



export function App(){

    return (

        <>
        {/* Rutas */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bienvenido" element={<Bienvenido />} />
                <Route path="/denegado" element={<Denegado />} />
                <Route path="/orden/generar" element={<GenerarOrden />} />
                <Route path="/orden/historial" element={<Historial />} />
                <Route path="/orden/pendientes" element={<OrdenesPendientes />} />
                <Route path="/usuario/crear" element={<CrearUsuario />} />
                <Route path="/usuario/registrarse" element={<Registro />} /> 
                <Route path="/usuario/iniciar-sesion" element={<Login />} />
                <Route path="/usuario/mi-perfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
        </>
    
    )
}