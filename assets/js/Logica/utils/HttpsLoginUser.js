function CallEndPointPost(url, jsonArgs) {

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                //  const dataData = data.Data;

                console.log(data);

                //  const idper = dataData.IdPerson;

                if (data.CodeResponse == 200 ){

                    // localStorage.setItem("idPersonaQlub",idper);
                    // window.location.href = URL_API_BASE;
                    location.replace("interfasdejuego.html");
                    location.href ="interfasdejuego.html";

                }else if (data.CodeResponse == 402 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Credenciales Incorrectas',
                      })

                }else if (data.CodeResponse == 401 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No has verificado tu cuenta',
                      })

                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No pudimos Hacer Nada',
                      })
                }
                
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}