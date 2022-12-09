function CallEndPointPost(url, jsonArgs) {

    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

                 

                console.log(data);

               

                if (data.CodeResponse == 200 ){

                    const dataData = data.Data;

                    const idper = dataData.IdPerson;
                    const numUser = dataData.Names;
                    const celUser = dataData.Phone;

                    localStorage.setItem("idPersonHipper",idper);
                    localStorage.setItem("nomUserHipper",numUser);
                    localStorage.setItem("celUserHipper",celUser);

                    location.replace("interfasdejuego.html");
                    location.href ="interfasdejuego.html";

                }else if (data.CodeResponse == 402 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.MessageResponse,
                      })

                }else if (data.CodeResponse == 401 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.MessageResponse,
                      })

                }else if (data.CodeResponse == 404 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.MessageResponse,
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