const {verify} = require("jsonwebtoken")

const autenticarUsuario = (req,res,next) => {
    const authorization = req.headers.authorization

    if (!authorization){
        //next(JSON.stringify({estado:"error",msg:"No autorizado"}))
        return res.status(403).json({estado:"error",msg:"No autorizado"})
    }

    try{
        const token = authorization.split(' ')[1]

        const payload = verify(token, process.env.JWT_SECRET_KEY)

        if (!payload.rol) 
            return res.status(403).json({estado:"error",msg:"No autorizado"})
    } catch (err){
        console.log("error en la funcion de autenticacion: " ,err)
    }
    return next()
}

exports.autenticarUsuario = autenticarUsuario