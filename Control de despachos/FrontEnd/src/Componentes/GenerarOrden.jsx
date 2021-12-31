import React,{useRef, useState} from 'react'
import '../css/material-dashboard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import {Cabezera} from './Cabezera'
import {autenticarRutas} from '../autenticacion/autenticarRutas'
import { Navigate } from 'react-router-dom';


export function GenerarOrden(){

  const nombreClienteRef = useRef()
  const productoRef = useRef()
  const pesoRef = useRef() 
  const vehiculosRef = useRef()
  const origenRef = useRef() 
  const destinoRef = useRef()
  const [descripcion, setDescripcion] = useState("")
  const [error1, setError1] = useState("")
  const [error2, setError2] = useState("")
  const [error3, setError3] = useState("")
  const [error4, setError4] = useState("")
  const [error6, setError6] = useState("")
  const [error7, setError7] = useState("")
  const [error8, setError8] = useState("")
  const [alerta, setAlerta] = useState(false)
  const [mensaje, setMensaje] = useState(false)
  const [msg, setMsg] = useState("")
  var vacio
  

  const nombreClienteChangeHandler = () => {
    
    const formato = /^[a-zA-Z0-9 _-]{3,100}$/
    const nombreCliente = nombreClienteRef.current.value.trim()
    const valido = formato.test(nombreCliente)

    if ((nombreCliente.length < 3) || (nombreCliente.length > 40) || (!valido))  {
      if (nombreCliente.length < 3) {
          setError1("La longitud minima es de 3 caracteres.")
      } else if (nombreCliente.length > 20) {
          setError1("La longitud maxima es de 20 caracteres.")
      } else if (!valido){
          setError1("No use caracteres especiales.")
      } 
    } else {
        setError1(null)
    }
  }

  const productoChangeHandler = () => {
    
    const formato = /^[a-zA-Z0-9 _-]{3,100}$/
    const producto = productoRef.current.value.trim()
    const valido = formato.test(producto)

    if ((producto.length < 3) || (producto.length > 40) || (!valido))  {
      if (producto.length < 3) {
          setError2("La longitud minima es de 3 caracteres.")
      } else if (producto.length > 20) {
          setError2("La longitud maxima es de 20 caracteres.")
      } else if (!valido){
          setError2("No use caracteres especiales.")
      } 
    } else {
        setError2(null)
    }
  }

  const pesoChangeHandler = () => { 

    const peso = pesoRef.current.value
    const formato = /^[0-9]+$/
    const valido = formato.test(peso)


    if ((peso.length > 5) || (!valido) ) {
      if (peso.length > 5) {
        setError3("La longitud maxima es de 5 caracteres.")
      } else if (!valido){
        setError3("Use unicamente numeros")
      } 
    } else {
        setError3(null)
    }
  }

  const descripcionChangeHandler = (event) => {
  
      setDescripcion(event.target.value)
      const formato = /^[a-zA-Z0-9 _-]{3,100}$/
      const valido = formato.test(descripcion) 
        

      if ((descripcion.length < 8) || (descripcion.length > 100) || (!valido))  {
        if (descripcion.length < 8) {
            setError4("La longitud minima es de 8 caracteres.")
        } else if (descripcion.length > 100) {
            setError4("La longitud maxima es de 100 caracteres.")
        } else if (!valido){
            setError4("No use caracteres especiales")
        } 
      } else {
        setError4(null)
      }
  }

  const vehiculosChangeHandler = () => { 

    const vehiculos = vehiculosRef.current.value
    const formato = /^[0-9]+$/
    const valido = formato.test(vehiculos)

    if ((vehiculos.length > 2) || (!valido) ) {
      if (vehiculos.length > 2) {
        setError6("No se permiten mas vehiculos.")
      } else if (!valido){
        setError6("Use unicamente numeros")
      } 
    } else {
        setError6(null)
    }
  }

  const origenChangeHandler = () => {

    const formato = /^[a-zA-Z0-9 #_-]{3,30}$/
    const origen = origenRef.current.value
    const valido = formato.test(origen)

    if ((origen.length < 3) || (origen.length > 30) || (!valido))  {
      if (origen.length < 3) {
          setError7("La longitud minima es de 3 caracteres.")
      } else if (origen.length > 30) {
          setError7("La longitud maxima es de 20 caracteres.")
      } else if (!valido){
          setError7("caracteres aceptados: guion(-), guion bajo(_) , #")
      } 
    } else {
        setError7(null)
    }
  }

  const destinoChangeHandler = () => {

    const formato = /^[a-zA-Z0-9 #_-]{3,30}$/
    const destino = destinoRef.current.value
    const valido = formato.test(destino)

    if ((destino.length < 3) || (destino.length > 30) || (!valido))  {
      if (destino.length < 3) {
          setError8("La longitud minima es de 3 caracteres.")
      } else if (destino.length > 30) {
          setError8("La longitud maxima es de 20 caracteres.")
      } else if (!valido){
          setError8("caracteres aceptados: guion(-), guion bajo(_) , #")
      } 
    } else {
        setError8(null)
    }
  }


  function submitHandler(){
    //estos campos son para pruebas, se deben conseguir mediante el mapa
    const id = "2"
    const valor = 10500
    const distancia = 257
    //estos campos son para pruebas, se deben conseguir mediante el mapa

    const cliente = nombreClienteRef.current.value.trim()
    const usuario = autenticarRutas().id
    const producto = productoRef.current.value.trim()
    const peso = parseInt(pesoRef.current.value)
    const vehiculos = parseInt(vehiculosRef.current.value)
    const origen = origenRef.current.value.trim()
    const destino = destinoRef.current.value.trim()
    const body = {id,cliente,usuario,producto,peso,descripcion,vehiculos,origen,destino,valor,distancia}

    if ((cliente === "") || (producto === "") || (peso === "") ||  (origen === "") || (destino === "") 
    || (vehiculos === "") || (descripcion === "")){
      vacio = true
    } else {
      vacio = false
    }

    if ((error1) || (error2) || (error3) || (error4) || (error6) || (error7) || (error8) || (vacio)){
      setAlerta(true)
      setTimeout(() => setAlerta(false), 3000)
    } else {
      fetch("http://localhost:8081/orden/nueva-orden",{
        headers: {"content-type":"application/json"},
        method:"POST",
        body: JSON.stringify({id,cliente,usuario,producto,peso,descripcion,vehiculos,origen,destino,valor,distancia})
      })
      .then(data => data.json())
      .then(data => {setMsg(data.msg)})

      console.log(body)
      setMensaje(true)
      setTimeout(() => setMensaje(false), 6000)
    }
  }


    return (
        <>
        {autenticarRutas().valido ?
        <div>
          <div style={{marginLeft:"15%"}}>
          <Cabezera titulo={"Ordenes de despacho"} />
          </div>
        
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style={{marginLeft:"17%"}}>
          <div className="container-fluid py-4" >
            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">Generar orden</h6>
                    </div>
                  </div>

                  <div className="row"  style={{paddingTop: "50px", paddingBottom: "30px"}}>
                    <div className="col-lg-6 col-md-8 col-12 mx-auto" id="formulario">
                      <div className="card z-index-0 fadeIn3 fadeInBottom">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                          <div className="bg-gradient-success shadow-primary border-radius-lg py-3 pe-1" style={{color:"black", textAlign:"center", fontSize:"50px"}}>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} />
                          </div>

                          {Boolean(alerta) && 
                          <div className="alert alert-warning" role="alert" style={{marginBottom:"0px", marginTop:"20px", textAlign:"center"}}>
                            Llene correctamente todos los campos
                          </div>}

                          {Boolean(mensaje) && 
                          <div className="alert alert-warning" role="alert" style={{marginBottom:"0px", marginTop:"20px", textAlign:"center"}}>
                            {msg}
                          </div>}

                          <div className="card-body">
                            <form className="text-start">
                                <div className="row justify-content-end">
                                    <div className="col">
                                        <div id="nombreCliente" style={{marginBottom: "20px"}} >
                                            <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center" style={{marginRight:"25px"}} ><label>Nombre cliente: </label></div>
                                            <div className="col-9">
                                            <input ref={nombreClienteRef} type="text" className="form-control form-control-lg" 
                                            onChange={nombreClienteChangeHandler} maxLength="20" name="nombreCliente" /> 
                                            </div> 
                                            </div>
                                            <div>
                                            <p className="error"> {error1} </p>
                                            </div>
                                        </div>

                                        <div id="producto" style={{marginBottom: "30px"}} >
                                            <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center" style={{marginRight:"25px"}} ><label>Producto: </label></div>
                                            <div className="col-9">
                                            <input ref={productoRef} type="text" className="form-control form-control-lg" 
                                            onChange={productoChangeHandler} maxLength="20" name="producto" />  
                                            </div>
                                            </div>
                                            <div>
                                            <p className="error"> {error2} </p>
                                            </div>
                                        </div>

                                        <div id="peso" style={{marginBottom: "30px"}} >
                                            <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center" style={{marginRight:"25px"}} ><label>Peso(Kg): </label></div>
                                            <div className="col-9">
                                            <input ref={pesoRef} type="number" className="form-control form-control-lg" 
                                            onChange={pesoChangeHandler} maxLength="3" name="peso" />  
                                            </div>
                                            </div>
                                            <div>
                                            <p className="error"> {error3} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div id="vehiculos" style={{marginBottom:"20px"}}>
                                            <div className="input-group input-group-outline my-0">
                                              <div className="col-2 align-self-center" style={{marginRight:"10px"}} ><label>Cantidad Vehiculos: </label></div>
                                              <div className="col-9">
                                              <input ref={vehiculosRef} type="number" className="form-control form-control-lg" 
                                              onChange={vehiculosChangeHandler} name="vehiculos" />  
                                              </div>
                                            </div>
                                            <div>
                                            <p className="error"> {error6} </p>
                                            </div>
                                        </div>

                                        <div id="direccionOrigen" style={{marginBottom:"20px"}}>
                                            <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center" style={{marginRight:"10px"}} ><label>Direccion Origen: </label></div>
                                            <div className="col-9">
                                            <input ref={origenRef} type="text" className="form-control form-control-lg" 
                                            onChange={origenChangeHandler} maxLength="30" name="direccionOrigen" />  
                                            </div>
                                            </div>
                                            <div>
                                            <p className="error"> {error7} </p>
                                            </div>
                                        </div>

                                        <div id="direccionDestino">
                                            <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center" style={{marginRight:"10px"}} ><label>Direccion Destino: </label></div>
                                            <div className="col-9">
                                            <input ref={destinoRef} type="text" className="form-control form-control-lg" 
                                            onChange={destinoChangeHandler} maxLength="30" name="direccionDestino" />  
                                            </div>
                                            </div>
                                            <div>
                                            <p className="error"> {error8} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="descripcion">
                                    <div className="input-group input-group-outline my-0">
                                    <div className="col-2 align-self-center" style={{marginRight:"25px"}} ><label>Descripcion: </label></div>
                                    <div className="col-9">
                                    <textarea name="descripcion" className="form-control" maxLength="200" rows="7" 
                                    onChange={descripcionChangeHandler} style={{width:"500px"}}/>
                                    </div>
                                    </div>
                                    <div>
                                    <p className="error"> {error4} </p>
                                    </div>
                                </div>


                                <div className="text-center">
                                <button type="button" className="btn bg-gradient-success w-100 my-4 mb-2" onClick={submitHandler} > Generar orden </button>
                                </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* mapa */}
                      <div id="map">

                      </div>
                    </div>
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
