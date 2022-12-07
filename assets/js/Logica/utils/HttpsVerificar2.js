function recuperarContrasenia() {

    const correo = localStorage.getItem("correoRecovery");
    const numUser = localStorage.getItem("phoneUserRecover");

    const recoverPass = {

        IdProject: "7",
        Phone: numUser,
        Email: correo,
        Password: ""
        
    
    }

    recoveryyPassword(recoverPass)

}



function CallEndPointPostVeri(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);


            if (data.CodeResponse == 405) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.MessageResponse,
                })

            } else if (data.CodeResponse == 200) {

                // window.location.href = URL_API_BASE;
                // location.replace("indexLogin.html");
                // location.href = "indexLogin.html";

                // console.log("melo");

                recuperarContrasenia();

                

            }else{

                Swal.fire({
                    icon: 'error',
                    title: 'No pudimos modificar tu contraseña'
                    
                })

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}