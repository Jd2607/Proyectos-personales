import React from 'react'
import background from '../img/fondo1.jpg'
import logo from '../img/camion.png';

export function Home(){

    return(
        <>
        <main className="main-content  mt-0">
            <div className="page-header align-items-start min-vh-100" style={{backgroundImage: `url(${background})`, }}>
                <div class="container-fluid my-auto" id="home">
                    <div className="row" style={{width:"100%", backgroundColor: "#4282D9", margin:"0"}}>
                        <div className="col-12">
                            <div className="m-3" style={{width:"100%"}}>
                                <ul class="nav justify-content-center">
                                    <li class="nav-item" style={{marginRight: "70%"}}>
                                        <img src={logo} alt="" width={"50px"}/>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/usuario/iniciar-sesion"  style={{color:"white"}}>Iniciar Sesion</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/usuario/registrarse"  style={{color:"white"}}>Registrarse</a>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </div>

                    <div style={{marginLeft: "45%", marginTop: "10%"}}>
                        <h3><li>Envios rapidos y confiables</li></h3> <br/>
                        <h3><li>Gran cobertura a nivel nacional</li></h3> <br/>
                        <h3><li>Tus paquetes estarán seguros todo el tiempo</li></h3> <br/>
                        <h3><li>Respaldo y garantia para cada envio realizado</li></h3> <br/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}