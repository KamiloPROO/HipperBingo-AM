function LoginPersona() {

    const loginPersona = {

        UserName: $("#loginUser").val(),
        Password: $("#passwordUser").val(),
        IdProject: "7"
    
    }

    login(loginPersona)

}