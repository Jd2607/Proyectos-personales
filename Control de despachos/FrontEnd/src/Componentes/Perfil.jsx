import React,{useState, useEffect, useRef} from 'react'
import {autenticarRutas} from '../autenticacion/autenticarRutas'
import { Navigate } from 'react-router-dom';
import {Cabezera} from './Cabezera'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdBadge} from '@fortawesome/free-solid-svg-icons'

export function Perfil(){

    const id = autenticarRutas().id
    const token = localStorage.getItem("token")
    const [BD, setBD] = useState([])
    const [cambiar, setCambiar] = useState(false)
    const [error1, setError1] = useState(null)
    const [error2, setError2] = useState(null)
    const contrasenaRef = useRef()
    const antiguaRef = useRef()
    const [alerta, setAlerta] = useState(false)
    const [exito, setExito] = useState(false)
    const [msg, setMsg] = useState("")
    var vacio

    useEffect(() => {
        const solicitarUsuario = async () => {
            fetch(`http://localhost:8081/usuario/info/${id}`,{
                headers: {"authorization":`Bearer ${token}`}
            })
            .then(data => data.json())
            .then(data => {
                if (data.info){
                    setBD(data.info)
                } else {
                    alert(data.msg)
                }
            })
        }
    solicitarUsuario()},[])

  const antiguaChangeHandler = () => {
        //expresion regular para validar la contraseña. Mínimo ocho caracteres, maximo 15, al menos una letra y un número
        const formato = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/
        const contrasena = antiguaRef.current.value.trim()
        const valido = formato.test(contrasena)

        if ((contrasena.length < 8) || (contrasena.length > 15) || (!valido)) {
            if (contrasena.length < 8) {
                setError1("La contraseña debe ser de 8 o más caracteres.")
            } else if (contrasena.length > 15) {
                setError1("La contraseña debe tener maximo 15 caracteres.")
            } else if (!valido){
                setError1("Debe tener al menos una letra y un numero")
            }
        } else {
            setError1(null)
        }
  }

  const passwordChangeHandler = () => {
        //expresion regular para validar la contraseña. Mínimo ocho caracteres, maximo 15, al menos una letra y un número
        const formato = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/
        const contrasena = contrasenaRef.current.value.trim()
        const valido = formato.test(contrasena)

        if ((contrasena.length < 8) || (contrasena.length > 15) || (!valido)) {
            if (contrasena.length < 8) {
                setError2("La contraseña debe ser de 8 o más caracteres.")
            } else if (contrasena.length > 15) {
                setError2("La contraseña debe tener maximo 15 caracteres.")
            } else if (!valido){
                setError2("Debe tener al menos una letra y un numero")
            } 
        } else {
            setError2(null)
        }
  }


  const confirmarCambio = () => {
      
    const antigua = antiguaRef.current.value.trim()
    const nueva = contrasenaRef.current.value.trim()
  
    //setError3(null)
    //setError2(null)
    

    if ((antigua === "") || (nueva === "")){
        vacio = true
    } else {
        vacio = false
    }

    if ((error1) || (error2) || (vacio)){
        setAlerta(true)
        setTimeout(() => setAlerta(false), 3000)
    } else {
        fetch("http://localhost:8081/usuario/cambiar/contrasena",{
            headers: {
                "content-type":"application/json",
                "authorization":`Bearer ${token}`},
            method: "POST",
            body: JSON.stringify({id, antigua, nueva})
        })
        .then(data => data.json())
        .then(data => {
            setExito(true)
            setMsg(data.msg)
            if (data.estado === "valido"){
                setTimeout(()=>{window.location.reload()}, 3000)
            } else {
                setTimeout(()=>{setExito(false)}, 3000)
            }
        })

    }
  }


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
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3" style={{textAlign: "center"}}>
                                            <h6 className="text-white text-capitalize ps-3">MI PERFIL</h6>
                                        </div>
                                    </div>

                                    <div className="row gx-8" style={{paddingTop: "50px", paddingBottom: "30px", margin: "auto"}}>
                                        <div className="col" style={{fontSize: "300px", margin: 0}}><FontAwesomeIcon icon={faIdBadge} /></div>
                                        <div className="col" style={{fontSize: "28px", fontWeight: 'bold', paddingTop: "77px"}}>  
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <th className="table-active">Nombres</th>
                                                        <th> {BD.nombres} </th>
                                                    </tr>
                                                    <tr>
                                                        <th className="table-active">Apellidos</th>
                                                        <th> {BD.apellidos} </th>
                                                    </tr>

                                                    <tr>
                                                        <th className="table-active">Email</th>
                                                        <th> {BD.email} </th>
                                                    </tr>

                                                    <tr>
                                                        <th className="table-active">Usuario</th>
                                                        <th> {BD.usuario} </th>
                                                    </tr>
                                                    <tr>
                                                        <th className="table-active">Rol</th>
                                                        <th> {autenticarRutas().rol} </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col" style={{fontSize: "15px",padding: "55px 0 0", width: "250px"}}>
                                            <button className="btn bg-gradient-primary w-100 my-4 mb-2" onClick={()=>{setCambiar(!cambiar)}} >Cambiar contraseña</button>
                                            {cambiar &&

                                            <div>
                                                {Boolean(alerta) && 
                                                <div className="alert alert-warning my-0 mb-2" role="alert" style={{marginBottom:"0px", marginTop:"20px", textAlign:"center", fontSize: "13px"}}>
                                                Llene correctamente los campos
                                                </div>}

                                                {Boolean(exito) && 
                                                <div className="alert alert-warning my-2 mb-2" role="alert" style={{marginBottom:"0px", marginTop:"20px", textAlign:"center"}}>
                                                {msg}
                                                </div>}

                                                <div id="antigua">         
                                                    <div className="input-group input-group-outline my-0">
                                                        <input ref={antiguaRef} type="text" className="form-control form-control-lg" onChange={antiguaChangeHandler}
                                                        placeholder="Contraseña Antigua" title="Mínimo ocho caracteres, maximo 15, al menos una letra y un número" maxLength="15" name="antigua" />
                                                    </div>
                                                    <div>
                                                        <p className="error"> {error1} </p>
                                                    </div>
                                                </div>


                                                <div id="contrasena">         
                                                    <div className="input-group input-group-outline my-0">
                                                        <input ref={contrasenaRef} type="text" className="form-control form-control-lg" onChange={passwordChangeHandler} 
                                                        placeholder="Contraseña Nueva" title="Mínimo ocho caracteres, maximo 15, al menos una letra y un número" maxLength="15" name="contrasena" />
                                                    </div>
                                                    <div>
                                                        <p className="error"> {error2} </p>
                                                    </div>
                                                </div>


                                                <button onClick={confirmarCambio} className="btn bg-gradient-primary w-100 my-0 mb-0">Cambiar</button>
                                            </div>
                                            }
                                        </div>
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