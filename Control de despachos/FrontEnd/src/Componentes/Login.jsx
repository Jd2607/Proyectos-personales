import React,{useRef, useState} from 'react'
import '../css/material-dashboard.css'

export function Login(){

    const emailRef = useRef()
    const contrasenaRef = useRef()
    const [error1, setError1] = useState("")
    const [error2, setError2] = useState("")
    const [valido, setValido] = useState(true)
    const [autenticacion, setAutenticacion] = useState(false)


    const emailChangeHandler = () => {
        // eslint-disable-next-line no-useless-escape
        const formato = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        const email = emailRef.current.value
        const valido = formato.test(email) 
        

        if ((email.length < 8) || (email.length > 40) || (!valido))  {
            if (email.length < 8) {
                setError1("La longitud minima es de 8 caracteres.")
            } else if (email.length > 40) {
                setError1("La longitud maxima es de 40 caracteres.")
            } else if (!valido){
                setError1("Esta direccion de correo no es valida.")
            } 
        } else {
            setError1(null)
        }
    }

    const passwordChangeHandler = () => {
        //expresion regular para validar la contraseña. Mínimo ocho caracteres, maximo 15, al menos una letra y un número
        const formato = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/
        const contrasena = contrasenaRef.current.value
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

    const submitHandler = () => {
        const email = emailRef.current.value
        const contrasena = contrasenaRef.current.value

        


        if ((email === "") || (contrasena === "") || (error1) || (error2)){
            setValido(false)
            setTimeout(()=>setValido(true), 4000)
        } else {
            fetch('http://localhost:8081/usuario/iniciar',{
            headers: {"content-type":"application/json"},
            method:"POST",
            body:JSON.stringify({email,contrasena})})
            .then(data => data.json())
            .then(data => {
                if (data.estado === "valido"){
                    localStorage.setItem("token", data.token)
                    // eslint-disable-next-line no-lone-blocks
                    {window.location.href = "/bienvenido"}
                } else {
                    setAutenticacion(true)
                }
            })
        }

        setTimeout(() => {setAutenticacion(false)}, 6000)

    }

    return (
        <>
        <main className="main-content  mt-0">
            <div className="page-header align-items-start min-vh-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"}}>
                <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                            <h3 className="text-white font-weight-bolder text-center mt-2 mb-0">Iniciar Sesion</h3>
                                        </div>

                                        <div className="card-body">
                                            <form className="text-start">
                                                {!valido && 
                                                <div className="alert bg-gradient-primary" role="alert">
                                                    <span className="mensajeInfo">Ingrese los datos correctamente.</span> 
                                                </div>}

                                                {autenticacion && 
                                                <div className="alert bg-gradient-primary" role="alert">
                                                    <span className="mensajeInfo">Usuario o contraseña incorrecta.</span> 
                                                </div>}

                                                <div className="input-group input-group-outline my-0">
                                                    <input ref={emailRef} type="email" className="form-control form-control-lg" placeholder="Email" 
                                                    onChange={emailChangeHandler} maxLength="40" name="email" />  
                                                </div>

                                                <div>
                                                    <p className="error"> {error1} </p>
                                                </div>
                                                
                                                <div className="input-group input-group-outline mb-3">
                                                    <input ref={contrasenaRef} type="password" className="form-control form-control-lg" onChange={passwordChangeHandler}
                                                    placeholder="Password" title="Mínimo ocho caracteres, maximo 15, al menos una letra y un número" maxLength="15" name="contrasena" />
                                                </div>

                                                <div>
                                                    <p className="error"> {error2} </p>
                                                </div>

                                                <div className="text-center">
                                                    <input type="button" onClick={submitHandler} className="btn bg-gradient-primary w-100 my-4 mb-2" value="Ingresar" />
                                                </div>
                                                <p className="mt-4 text-sm text-center">
                                                    No tienes una cuenta?
                                                    <a href="/usuario/registrarse" className="text-primary text-gradient font-weight-bold"> Registrarse</a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
        </>
    )
}