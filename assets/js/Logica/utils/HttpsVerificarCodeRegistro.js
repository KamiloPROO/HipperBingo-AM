function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
                 console.log(data);


                if (data.CodeResponse == 405 ){

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Codigo de verificacion incorrecto',
                      })

                }else if (data.CodeResponse == 200){

                    // window.location.href = URL_API_BASE;
                    location.replace("login.html");
                    location.href ="login.html";

                }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}