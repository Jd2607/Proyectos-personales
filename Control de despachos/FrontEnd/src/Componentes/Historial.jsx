import React,{useState, useRef, useEffect} from 'react'
import '../css/material-dashboard.css'
import {Dropdown} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import {DetallesOrden} from './DetallesOrden'
import {recibir} from '../peticionRecibir'
import {Cabezera} from './Cabezera'
import {autenticarRutas} from '../autenticacion/autenticarRutas'
import { Navigate } from 'react-router-dom';

export function Historial(){

    const [BD, setBD] = useState([])
    const idRef = useRef()
    const [historial, setHistorial] = useState(BD) 
    const usuario = autenticarRutas().id 
    

    useEffect(() => {
        const solicitarOrdenes = async () => {
          //recibir es una funcion declarada en el archivo peticionRecibir que recibe de parametro la url a la caul hará la peticion
          const BD = await recibir(`http://localhost:8081/orden/historial/${usuario}`)
          setBD(BD)
          setHistorial(BD)
        }
    solicitarOrdenes()},[])


    function detalleOrden(id){
        return BD.find(orden => orden.id === id)
    }

    const idChangeHandler = () => {
        //usamos .toString() para volverlo una cadena de caracteres
        const id = idRef.current.value.toString()

        //lo pasamos a string para poder usar el .includes para mejorar la busqueda ya que no siempre se sabe el id
        //de esta forma es mas facil encontrar una orden
        if (id.length !== 0){
            setHistorial(BD.filter(orden => 
                // eslint-disable-next-line eqeqeq
                orden.id.includes(id)))
        } else {
            setHistorial(BD)
        }
    }

    function filtrarResultados(estado){

        if (estado === "aceptada"){
            setHistorial(BD.filter(orden => 
                orden.estado.toLowerCase() === "aceptada"))
        } else if (estado === "en espera"){
            setHistorial(BD.filter(orden => 
                orden.estado.toLowerCase() === "en espera"))
        } else if (estado === "denegada"){
            setHistorial(BD.filter(orden => 
                orden.estado.toLowerCase() === "denegada"))
        } else {
            setHistorial(BD)
        }
    }

    return(
        <>
        {autenticarRutas().valido ?
        <div>
            <div style={{marginLeft:"15%"}}>
            <Cabezera titulo={"Ordenes de despacho"} />
            </div>

            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style={{marginLeft:"17%"}}>
            <div className="container-fluid py-4" style={{paddingTop: "0 !important"}}>
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Historial de ordenes</h6>
                                </div>
                            </div>

                            <div style={{marginTop: "35px", marginBottom: "20px"}}>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="input-group input-group-outline m-3">
                                            <input type="text" className="form-control form-control-lg" ref={idRef} maxLength="20" 
                                            placeholder="Buscar id" onChange={idChangeHandler} />  
                                        </div>
                                    </div>
                                    <div className="col m-3"> 
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" id="dropdown" >
                                                Filtrar por estado <FontAwesomeIcon icon={faFilter} style={{fontSize:"20px"}} />
                                            </Dropdown.Toggle>


                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => filtrarResultados("aceptada")} >Aceptado</Dropdown.Item>
                                                <Dropdown.Item onClick={() => filtrarResultados("en espera")} >En espera</Dropdown.Item>
                                                <Dropdown.Item onClick={() => filtrarResultados("denegada")} >Denegado</Dropdown.Item>
                                                <Dropdown.Item onClick={() => filtrarResultados("")} >Sin filtro</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr className="table-active">
                                            <th>ID</th>
                                            <th>Producto</th>
                                            <th>Numero de vehiculos</th>
                                            <th>Origen</th>
                                            <th>Destino</th>
                                            <th>Estado</th>
                                            <th>Detalles</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {historial.map(item => 
                                            <tr>
                                                <td className="celda">{item.id}</td>
                                                <td className="celda">{item.producto}</td>
                                                <td className="celda">{item.vehiculos}</td>
                                                <td className="celda">{item.origen}</td>
                                                <td className="celda">{item.destino}</td>
                                                <td className="celda">{item.estado}</td>
                                                {/* De esta forma podemos enviar parametros a travez de manejadores de eventos como onClick */}
                                                <td className="celda">
                                                    <DetallesOrden id={item.id} content={detalleOrden(item.id)} />
                                                </td>
                                            </tr>
                                        )}
                                        
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </div>
        : <Navigate to='/usuario/iniciar-sesion' />
        }
        </>
    )
}