function verificacionPersona() {

    var loginn = localStorage.getItem("phoneUser")
    var IdUser = localStorage.getItem("IdUserRegis")

    const verificacionPersona = {

        IdPerson: IdUser,
        IdProject: "7",
        CodeVerification: $("#codeRegister").val(),
        Login: loginn,
        IsRecoverPassword: "false"
       
    }
    verificacion(verificacionPersona)

}
