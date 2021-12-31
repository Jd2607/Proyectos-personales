import React from 'react'
import '../css/material-dashboard.css'
import jwtDecode from "jwt-decode"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';


export function Cabezera(props){

    let payload

    if (localStorage.getItem("token")){
        const token = localStorage.getItem("token")
        payload = jwtDecode(token)
    }

    return(
        <>
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <h6 className="font-weight-bolder mb-0">{props.titulo}</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div style={{marginLeft: "auto"}}>
                        <ul className="navbar-nav  justify-content-end">
                            <li className="nav-item d-flex align-items-center">
                                <div id="perfil">
                                    <div>
                                        <FontAwesomeIcon icon={faCircleUser} style={{fontSize:"25px", paddingRight: "5px"}} /> 
                                        <span style={{fontSize:"20px"}}>{`${payload.nombres} ${payload.apellidos}`}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}