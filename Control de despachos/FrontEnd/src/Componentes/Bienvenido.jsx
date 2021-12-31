import React from 'react'
import imagen from '../img/robot.png'
import {autenticarRutas} from '../autenticacion/autenticarRutas'
import { Navigate } from 'react-router-dom';
import {Cabezera} from './Cabezera'

export function Bienvenido(){


    return(
        <>
            {autenticarRutas().valido ?
                <>
                    <div style={{marginLeft:"15%"}}>
                    <Cabezera titulo={""} />
                    </div>

                    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style={{marginLeft:"17%"}}>
                    <div className="container-fluid py-4" >
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">Bienvenido</h6>
                                        </div>
                                    </div>

                                    <div className="row" style={{paddingTop: "50px", paddingBottom: "30px", margin: "auto"}}>
                                        <div className="col" style={{fontSize: "130px", fontWeight: 'bold'}}>Bienvenido</div>
                                        <div className="col" ><img src={imagen} alt="" width={'200px'} height={'200px'} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </main>
                </>
            : <Navigate to='/usuario/iniciar-sesion' /> }
        </>)
}