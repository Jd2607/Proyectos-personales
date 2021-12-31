const {Router} = require("express")
const rutasOrdenes = Router()
const {ordenModel} = require("../modelos/modeloOrdenes")
const {autenticarUsuario} = require("../autenticacion/autenticarUsuario")
const {autenticarInterno} = require("../autenticacion/autenticarInterno")

//colocar la cabezera de autorizacion en el front end
rutasOrdenes.get("/pendientes",autenticarInterno, async function(req,res){
    try {
        //.find es para realizar una busqueda, le enviamos de parametro un json que corresponde a la condicion de la busqueda
        const ordenes = await ordenModel.find({estado:"en espera"})
        
        if (ordenes){
            res.send(ordenes)
        } 
    } 
    catch (error) {
        console.log("Error en ordenes pendientes: " , error)
    }
    
})


//colocar la cabezera de autorizacion en el front end
rutasOrdenes.get("/historial/:user",autenticarUsuario, async function(req,res){
    try {
        const usuario = req.params.user

        const ordenes = await ordenModel.find({usuario : usuario})
        res.send(ordenes)
    } 
    catch (error) {
        console.log("Error en historial de ordenes: " , error)
    }
})


//posiblemente terminada
rutasOrdenes.post("/nueva-orden",autenticarUsuario, async function(req,res){
    try {
        const orden = req.body
        const nuevaOrden = new ordenModel(orden)

        nuevaOrden.save(function(error){
            if (error){
                console.log(error)
                return res.status(500).send({estado:"ok",msg:"No se ha podido guardar la orden"})
            }
    
            return res.status(200).send({estado:"error",msg:"Orden guardada con exito"})
        })

    } 
    catch (error) {
        console.log("Error en historial de ordenes: " , error)
    }
})


//posiblemente terminada
rutasOrdenes.post("/cambiar-estado",autenticarInterno, async function(req,res){
    const {id,estado} = req.body

    const actualizar = await ordenModel.updateOne({id},{estado})

    if (actualizar.modifiedCount == 1){
        res.send({estado:"valido",msg:"Orden actualizada con exito"})
    } else {
        res.send({estado:"invalido",msg:"La orden no se ha podido actualizar"})
    }
})


exports.rutasOrdenes = rutasOrdenes