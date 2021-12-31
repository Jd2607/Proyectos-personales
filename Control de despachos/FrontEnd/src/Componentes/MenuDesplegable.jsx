import React from 'react'
import '../css/material-dashboard.css'
import {Dropdown} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWrench,faTruckRampBox,faListCheck,faRightFromBracket,faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {autenticarRutas} from '../autenticacion/autenticarRutas'


export function MenuDesplegable(props){

    function cerrarSesion(){
        localStorage.removeItem("token")
        window.location.href = "/usuario/iniciar-sesion"
    }

    return(
        <> 
            {autenticarRutas().valido ?
                <div>
                    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                        <div className="sidenav-header">
                            <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                            <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                                <span className="ms-1 font-weight-bold text-white" style={{fontSize: "19px"}} >Control de despachos</span>
                            </a>
                        </div>

                        <hr className="horizontal light mt-0 mb-2" />

                        <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                            <ul className="navbar-nav">
                                <div className="row" id="seleccionar1">
                                    <li className="nav-item"> 
                                        <Dropdown>
                                            <Dropdown.Toggle variant="none" id="dropdown-button-drop-down" style={{lineHeight: "30px", marginBottom: "0", width: "100%"}} >
                                            <FontAwesomeIcon icon={faTruckRampBox} style={{fontSize:"20px"}} /> Ordenes de despacho
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/orden/generar">Generar Orden</Dropdown.Item>
                                                <Dropdown.Item href="/orden/historial">Historial de Ordenes</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </div>

                                {((autenticarRutas().rol === "administrador") || (autenticarRutas().rol === "interno")) &&
                                <>
                                    <div className="row" id="seleccionar2">
                                        <li className="nav-item"> 
                                            <Dropdown>
                                                <Dropdown.Toggle variant="none" id="dropdown-button" style={{lineHeight: "30px", marginBottom: "0", width: "100%"}} >
                                                    <FontAwesomeIcon icon={faListCheck} style={{fontSize:"20px"}} /> Control de ordenes
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="/orden/pendientes">Ordenes pendiente</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </div>

                                    {autenticarRutas().rol === "administrador" &&
                                    <div className="row" id="seleccionar3">
                                        <li className="nav-item"> 
                                            <Dropdown>
                                                <Dropdown.Toggle variant="none" id="dropdown-basic" style={{lineHeight: "30px", marginBottom: "0", width: "100%"}} >
                                                    <FontAwesomeIcon icon={faWrench} style={{fontSize:"20px"}} /> Administrador
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="/usuario/crear">Crear usuario(s)</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </div>
                                    }
                                </>
                                }
                            </ul>
                        </div>

                        <hr className="horizontal light mt-0 mb-2" />

                        <div className="sidenav-footer">
                            <div className="row" id="seleccionar4" style={{marginTop: "auto"}}> 
                                <button type="button" variant="none" id="cerrar-sesion" onClick={() => {window.location.href = "/usuario/mi-perfil"}}>
                                    <FontAwesomeIcon icon={faCircleUser} style={{fontSize:"20px"}} /> Mi Perfil
                                </button>
                            </div>

                            <div className="row" id="seleccionar5" style={{marginTop: "auto"}}> 
                                <button type="button" variant="none" id="cerrar-sesion" onClick={cerrarSesion}>
                                    <FontAwesomeIcon icon={faRightFromBracket} style={{fontSize:"20px"}} /> Cerrar sesion
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            : <div></div>
            }
        </>
    )
}