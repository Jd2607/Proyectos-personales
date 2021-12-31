import React,{useRef, useState, useEffect} from 'react'
import '../css/material-dashboard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {recibir} from '../peticionRecibir'
import {Cabezera} from './Cabezera'
import {autenticarRutas} from '../autenticacion/autenticarRutas'
import { Navigate } from 'react-router-dom';

export function CrearUsuario(){

  const nombresRef = useRef()
  const apellidoRef = useRef()
  const usuarioRef = useRef()
  const emailRef = useRef()
  const contrasenaRef = useRef()
  const [error1, setError1] = useState("")
  const [error2, setError2] = useState("")
  const [error3, setError3] = useState("")
  const [error4, setError4] = useState("")
  const [error5, setError5] = useState("")
  
  var vacio
  const [alerta, setAlerta] = useState(false)
  const [exito, setExito] = useState(false)
  const [BD, setBD] = useState()

  useEffect(() => {
    const solicitarUsuarios = async () => {
      //recibir es una funcion declarada en el archivo peticionRecibir que recibe de parametro la url a la caul hará la peticion
      const BD = await recibir('http://localhost:8081/usuario/registrar')
      setBD(BD)
    }
  solicitarUsuarios()},[])

  const nombresChangeHandler = () => {
    
    const MIN = 2;
    const MAX = 50;
    const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
    const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);

    const nombres = nombresRef.current.value.trim()
    const valido = VALIDATION.test(nombres)

    if ((nombres.length < 3) || (nombres.length > 40) || (!valido))  {
      if (nombres.length < 3) {
          setError1("La longitud minima es de 3 caracteres.")
      } else if (nombres.length > 20) {
          setError1("La longitud maxima es de 20 caracteres.")
      } else if (!valido){
          setError1("El Formato no es valido. Use solo caracteres.")
      } 
    } else {
        setError1(null)
    }
  }

  const apellidosChangeHandler = () => {
    
    const MIN = 2;
    const MAX = 50;
    const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
    const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);

    const apellidos = apellidoRef.current.value.trim()
    const valido = VALIDATION.test(apellidos)

    if ((apellidos.length < 3) || (apellidos.length > 40) || (!valido))  {
      if (apellidos.length < 3) {
          setError2("La longitud minima es de 3 caracteres.")
      } else if (apellidos.length > 20) {
          setError2("La longitud maxima es de 20 caracteres.")
      } else if (!valido){
          setError2("El Formato no es valido. Use solo caracteres.")
      } 
    } else {
        setError2(null)
    }
  }

  const usuarioChangeHandler = () => { 

    const usuario = usuarioRef.current.value.trim()
    const formato = /^[a-zA-Z0-9_-]{3,20}$/
    const valido = formato.test(usuario)
    const usuarioExistente = BD.find(existente => existente.usuario === usuario)


    if ((usuario.length < 3) || (usuario.length > 40) || (!valido) || (usuarioExistente)) {
      if (usuario.length < 3) {
        setError3("La longitud minima es de 3 caracteres.")
      } else if (usuario.length > 20) {
        setError3("La longitud maxima es de 20 caracteres.")
      } else if (!valido){
        setError3("Caracteres permitidos: letras, números, guiones bajos o guiones")
      } else if (usuarioExistente){
        setError3("Este usuario ya existe.")
      }
    } else {
        setError3(null)
    }
  }

  const emailChangeHandler = () => {
        // eslint-disable-next-line no-useless-escape
        const formato = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        const email = emailRef.current.value.trim()
        const valido = formato.test(email) 
        

        if ((email.length < 8) || (email.length > 40) || (!valido))  {
            if (email.length < 8) {
                setError4("La longitud minima es de 8 caracteres.")
            } else if (email.length > 40) {
                setError4("La longitud maxima es de 40 caracteres.")
            } else if (!valido){
                setError4("Esta direccion de correo no es valida.")
            } 
        } else {
            setError4(null)
        }
  }

  const passwordChangeHandler = () => {
        //expresion regular para validar la contraseña. Mínimo ocho caracteres, maximo 15, al menos una letra y un número
        const formato = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/
        const contrasena = contrasenaRef.current.value.trim()
        const valido = formato.test(contrasena)

        if ((contrasena.length < 8) || (contrasena.length > 15) || (!valido)) {
            if (contrasena.length < 8) {
                setError5("La contraseña debe ser de 8 o más caracteres.")
            } else if (contrasena.length > 15) {
                setError5("La contraseña debe tener maximo 15 caracteres.")
            } else if (!valido){
                setError5("Debe tener al menos una letra y un numero")
            } 
        } else {
            setError5(null)
        }
  }

  //esta funcion se asegura de que todos los datos hallan sido bien ingresados y luego hace la peticion 
  //en la peticion envia la informacion de las cajas de texto
  function submitHandler(){
    const nombres = nombresRef.current.value.trim()
    const apellidos = apellidoRef.current.value.trim()
    const usuario = usuarioRef.current.value.trim()
    const email = emailRef.current.value.trim()
    const contrasena = contrasenaRef.current.value.trim()
    const radios = document.getElementsByName("permisos")
    var permisos

    for (var i = 0; i<radios.length; i++){
      if (radios[i].checked === true){
        permisos = radios[i].value
        break
      }
    }


    if ((nombres === "") || (apellidos === "") || (usuario === "") || (email === "") || (contrasena === "")){
      vacio = true
    } else {
      vacio = false
    }

    if ((error1) || (error2) || (error3) || (error4) || (error5) || (vacio)){
      setAlerta(true)
      setTimeout(() => setAlerta(false), 3000)
    } else {
      fetch("http://localhost:8081/usuario/registrar",{
        headers: {"content-type":"application/json"},
        method:"POST",
        body: JSON.stringify({nombres,apellidos,email,usuario,contrasena,permisos})
      })
      .then(res => res.json())
      .then(res => {setExito(true)})

      
      setTimeout(() => setExito(false), 3000)

      setTimeout(() => {window.location.reload()}, 5000)
    }
  

  }

    return (
        <>
          {autenticarRutas().valido ? 
            <>
              {autenticarRutas().rol === "administrador" ?
                <>
                  <div style={{marginLeft:"15%"}}>
                    <Cabezera titulo={"Administrador"} />
                  </div>

                  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style={{marginLeft:"17%"}}>
                    <div className="container-fluid py-4" >
                      <div className="row">
                        <div className="col-12">
                          <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Crear nuevo usuario</h6>
                              </div>
                            </div>

                            <div className="row"  style={{paddingTop: "50px", paddingBottom: "30px"}}>
                              <div className="col-lg-6 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="bg-gradient-success shadow-primary border-radius-lg py-3 pe-1" style={{color:"black", textAlign:"center", fontSize:"50px"}}>
                                      <FontAwesomeIcon icon={faUser} />
                                    </div>

                                    {Boolean(alerta) && 
                                    <div className="alert alert-warning" role="alert" style={{marginBottom:"0px", marginTop:"20px", textAlign:"center"}}>
                                      Llene correctamente todos los campos
                                    </div>}

                                    {Boolean(exito) && 
                                    <div className="alert alert-warning" role="alert" style={{marginBottom:"0px", marginTop:"20px", textAlign:"center"}}>
                                      Nuevo usuario creado con exito
                                    </div>}

                                    <div className="card-body">
                                      <form className="text-start" action="">
                                        <div id="nombres">
                                          <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center"><label>Nombre: </label></div>
                                            <input ref={nombresRef} type="text" className="form-control form-control-lg" 
                                            onChange={nombresChangeHandler} maxLength="20" name="nombres" />  
                                          </div>
                                          <div>
                                            <p className="error"> {error1} </p>
                                          </div>
                                        </div>

                                        <div id="apellidos">
                                          <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center"><label>Apellidos: </label></div>
                                            <input ref={apellidoRef} type="text" className="form-control form-control-lg" 
                                            onChange={apellidosChangeHandler} maxLength="20" name="apellidos" />  
                                          </div>
                                          <div>
                                            <p className="error"> {error2} </p>
                                          </div>
                                        </div>

                                        <div id="usuario">
                                          <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center"><label>Usuario: </label></div>
                                            <input ref={usuarioRef} type="text" className="form-control form-control-lg" 
                                            onChange={usuarioChangeHandler} maxLength="15" name="usuario" />  
                                          </div>
                                          <div>
                                            <p className="error"> {error3} </p>
                                          </div>
                                        </div>

                                        <div id="email">
                                          <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center"><label>Email: </label></div>
                                            <input ref={emailRef} type="email" className="form-control form-control-lg" 
                                            onChange={emailChangeHandler} maxLength="40" name="email" />  
                                          </div>
                                          <div>
                                            <p className="error"> {error4} </p>
                                          </div>
                                        </div>

                                        <div id="contrasena">
                                          <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center"><label>Contraseña: </label></div>
                                            <input ref={contrasenaRef} type="password" className="form-control form-control-lg" onChange={passwordChangeHandler}
                                            title="Mínimo ocho caracteres, maximo 15, al menos una letra y un número" maxLength="15" name="contrasena" />
                                          </div>
                                          <div>
                                            <p className="error"> {error5} </p>
                                          </div>
                                        </div>

                                        <div id="permisos">
                                          <div className="input-group input-group-outline my-0">
                                            <div className="col-2 align-self-center"><label>Permisos(nivel): </label></div>
                                            <div style={{marginLeft:"10%"}} >
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="permisos" value="1" defaultChecked/> Nivel 1
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="permisos" value="2" /> Nivel 2
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="radio" name="permisos" value="3" /> Nivel 3
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="text-center">
                                          <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2" onClick={submitHandler}>Crear nuevo usuario</button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </>
              : <Navigate to='/denegado' />}
            </>
          : <Navigate to='/usuario/iniciar-sesion' /> }
        </>
    )
}