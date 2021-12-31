import jwtDecode from "jwt-decode"

export function autenticarRutas(){

    let valido = false
    let rol = ""
    let id

    try {
        if (localStorage.getItem("token")){
            const token = localStorage.getItem("token")
            const payload = jwtDecode(token)
            if (payload.usuario){
                valido = true
                id = payload.id
            }

            switch (payload.permisos) {
                case 1:
                    rol = "externo"
                break

                case 2:
                    rol = "interno"
                break

                case 3:
                    rol = "administrador"
                break

                default:
                break
            }
        }
    } catch (error) {
        console.log("error en la autenticacion: ",error)
    }
    return {valido,rol,id}
}