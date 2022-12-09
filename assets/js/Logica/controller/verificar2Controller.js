function verificacionPersonaSend() {

    var loginn = localStorage.getItem("phoneUserRecover")
    var IdUser = localStorage.getItem("IdUserRecovery")

    const verificacionPersona = {

        IdPerson: IdUser,
        IdProject: "7",
        CodeVerification: $("#codigoUserVeri").val(),
        Login: loginn,
        IsRecoverPassword: "true"
       
    }
    verificacion(verificacionPersona)

}