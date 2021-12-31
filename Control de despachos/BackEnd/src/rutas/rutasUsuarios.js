const { compare } = require("bcryptjs")
const {Router} = require("express")
const rutasUsuarios = Router()
const {usuarioModel} = require("../modelos/modeloUsuarios")
const {sign} = require("jsonwebtoken")
const {genSalt, hash} = require("bcryptjs")
const {autenticarUsuario} = require("../autenticacion/autenticarUsuario")


//terminada
rutasUsuarios.get("/registrar", async function(req, res){
    try {
        const usuarios = await usuarioModel.find({},{usuario:1,_id:0}) 
        res.send(usuarios)
    } catch(error){
        res.send({estado:"invalido", msg:"Error en la aplicacion. Consulte soporte tecnico"})
        console.log("error en registrar(get)")
    }
})


//terminada
rutasUsuarios.post("/registrar", function(req, res){
    try {
        const usuario  = req.body
        const nuevoUsuario = new usuarioModel(usuario)

        nuevoUsuario.save(function(error){
            if (error){
                console.log(error)
                return res.status(500).send({msg:"Usuario no guardado"})
            }
    
            return res.status(200).send({msg:"Guardado con exito"})
        })
    }
    catch (error) {
        res.send({estado:"invalido", msg:"Error en la aplicacion. Consulte soporte tecnico"})
        console.log("error en registrar(post): ",error)
    }
})


//terminada
rutasUsuarios.post("/iniciar", async function(req,res){
    try {
        const {email,contrasena}  = req.body
        const encontrado = await usuarioModel.findOne({email})

        if (!encontrado){
            return res.send({estado:"invalido", msg:"Correo o contraseña incorrectos"})
        }

        //comprobar contraseña
        const validarContra = await compare(contrasena, encontrado.contrasena)
        if (validarContra) {
            const token = sign(
                {
                    nombres: encontrado.nombres,
                    apellidos: encontrado.apellidos,
                    usuario: encontrado.usuario,
                    permisos: encontrado.permisos,
                    id: encontrado._id
                },
                process.env.JWT_SECRET_KEY
            )
            return res.status(200).send({estado:"valido", token})
        } else {
            return res.status(401).send({estado:"invalido", msg:"Correo o contraseña incorrectos"})
        }

    } catch (error) {
        res.send({estado:"invalido", msg:"Error en la aplicacion. Consulte soporte tecnico"})
        console.log("error en iniciar(post): ",error)
    }
})


//terminada
rutasUsuarios.get("/info/:id",autenticarUsuario, async function(req,res){
    try{
        const usuario = req.params.id
        const encontrado = await usuarioModel.findOne({_id:usuario},{contrasena:0})

        if (!encontrado){
            return res.send({estado:"invalido", msg:"Error en la aplicacion. Consulte soporte tecnico"})
        } else {
            return res.send({info:encontrado})
        }

    } catch (error) {
        res.send({estado:"invalido", msg:"Error en la aplicacion. Consulte soporte tecnico"})
        console.log("error al mostrar la informacion del usuario: ",error)
    }
})


//terminada
rutasUsuarios.post("/cambiar/contrasena",autenticarUsuario, async function(req,res){
    try {
        const usuario = req.body
        const encontrado = await usuarioModel.findOne({_id:usuario.id})

        if (!encontrado){
            return res.send({estado:"invalido", msg:"Error en la aplicacion. Consulte soporte tecnico"})
        } 

        const validarContra = await compare(usuario.antigua, encontrado.contrasena)
        if (validarContra) {

            const salt = await genSalt(10)
            nuevaHash = await hash(usuario.nueva, salt)
            
            const actualizar = await usuarioModel.updateOne({_id:usuario.id},{contrasena:nuevaHash})

            if (actualizar.modifiedCount == 1){
                res.send({estado:"valido",msg:"Contraseña cambiada con exito"})
            } else {
                res.send({estado:"invalido",msg:"La contraseña no se ha podido cambiar"})
            }
        } else {
            return res.send({estado:"invalido", msg:"Contraseña anterior incorrecta"})
        }   
    } catch (error) {
        console.log("Error en cambiar contraseña: ",error)
        return res.send({estado:"invalido", msg:"Error en la aplicacion. Consulte soporte tecnico"})
    }
})

exports.rutasUsuarios = rutasUsuarios