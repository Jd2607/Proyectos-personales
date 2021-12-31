/* eslint-disable no-restricted-globals */
import React,{useState, useRef, useEffect} from 'react'
import '../css/material-dashboard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark, faCheck, faHashtag, faUser, faPeopleCarryBox, faMapLocationDot} from '@fortawesome/free-solid-svg-icons'
import {DetallesOrden} from './DetallesOrden'
import {recibir} from '../peticionRecibir'
import {Cabezera} from './Cabezera'
import {autenticarRutas} from '../autenticacion/autenticarRutas'
import { Navigate } from 'react-router-dom';

export function OrdenesPendientes(){

    //la informacion que recibiremos será los registros cuyo estado sea en espera 
    const [BD, setBD] = useState([])
    const idRef = useRef()
    const [historial, setHistorial] = useState(BD)

    useEffect(() => {
        const solicitarOrdenes = async () => {
          //recibir es una funcion declarada en el archivo peticionRecibir que recibe de parametro la url a la caul hará la peticion
          const BD = await recibir('http://localhost:8081/orden/pendientes')
          if (BD.length === 0) {
            alert("Ha ocurrido un error en la aplicacion, consulte con soporte tecnico")
          }
          setBD(BD)
          setHistorial(BD)
        }
    solicitarOrdenes()},[])

    const idChangeHandler = () => {
        //usamos .toString() para volverlo una cadena de caracteres
        const id = idRef.current.value.toString()

        //lo pasamos a string para poder usar el .includes para mejorar la busqueda ya que no siempre se sabe el id
        //de esta forma es mas facil encontrar una orden
        if (id.length !== 0){
            setHistorial(BD.filter(orden => orden.id.includes(id)))
        } else {
            setHistorial(BD)
        }
    }

    function detalleOrden(id){
        return historial.find(orden => orden.id === id)
    }

    function cambiarEstado(id, cambiar){

        let estado
        var confirmar

        if (cambiar === "aceptar"){
            confirmar = confirm("¿Está seguro de aceptar la orden?")
            estado = "aceptada"
        } else if (cambiar === "rechazar"){
            confirmar = confirm("¿Está seguro de rechazar la orden?")
            estado = "denegada"
        }
        
        if (confirmar){
            fetch('http://localhost:8081/orden/cambiar-estado',{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify({id,estado})
            })
            .then(data => data.json())
            .then(data => {
                alert(data.msg)
                window.location.reload()})
        }
    }


    return(
        <>
            {autenticarRutas().valido ?
                <>
                    {((autenticarRutas().rol === "administrador") || (autenticarRutas().rol === "interno")) ? 
                        <>
                            <div style={{marginLeft:"15%"}}>
                            <Cabezera titulo={"Control de ordenes"} />
                            </div>


                            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style={{marginLeft:"17%"}}>
                            <div className="container-fluid py-4" >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card my-4">
                                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                                    <h6 className="text-white text-capitalize ps-3">Ordenes Pendientes</h6>
                                                </div>
                                            </div>

                                            <div style={{paddingTop: "50px", paddingBottom: "30px"}}>
                                                <div className="row">
                                            <div className="col-4">
                                                <div className="input-group input-group-outline m-3">
                                                    <input type="text" className="form-control form-control-lg" ref={idRef} maxLength="20" 
                                                    placeholder="Buscar id" onChange={idChangeHandler} />  
                                                </div>
                                            </div>
                                                </div>

                                                <table className="table">
                                                    <thead>
                                                        <tr className="table-active">
                                                            <th> <FontAwesomeIcon icon={faHashtag} /> ID orden</th>
                                                            <th> <FontAwesomeIcon icon={faUser} /> Cliente</th>
                                                            <th> <FontAwesomeIcon icon={faPeopleCarryBox}  /> Producto</th>
                                                            <th> # de vehiculos</th>
                                                            <th> <FontAwesomeIcon icon={faMapLocationDot}  /> Origen</th>
                                                            <th> <FontAwesomeIcon icon={faMapLocationDot}  /> Destino</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    
                                                    <tbody>  
                                                        {historial.map(item => 
                                                            <tr  key={item.id}>
                                                            <td className="celda">{item.id}</td>
                                                            <td className="celda">{item.cliente}</td>
                                                            <td className="celda">{item.producto}</td>
                                                            <td className="celda">{item.vehiculos}</td>
                                                            <td className="celda">{item.origen}</td>
                                                            <td className="celda">{item.destino}</td>
                                                            <td className="celda">
                                                                <DetallesOrden id={item.id} content={detalleOrden(item.id)} />
                                                                <button className="btn btn-info" style={{marginRight:"5px", padding:"10px"}} onClick={()=>{cambiarEstado(item.id, "rechazar")}}>
                                                                    Rechazar  <FontAwesomeIcon icon={faXmark} style={{fontSize:"13px", marginLeft:"5px"}} />
                                                                </button>
                                                                <button className="btn btn-info" style={{padding:"10px"}} onClick={()=>{cambiarEstado(item.id, "aceptar")}}>
                                                                    Aceptar  <FontAwesomeIcon icon={faCheck} style={{fontSize:"13px", marginLeft:"5px"}} />
                                                                </button> 
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
                        </>
                    : <Navigate to='/denegado' />}
                </>
            : <Navigate to='/usuario/iniciar-sesion' />}
        </>)
}