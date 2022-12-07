function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
                 console.log(data);

                 const response = data.Data;


                if (data.CodeResponse == 200 ){

                    const PhoneRegis = response.Phone;
                    const NumIDRegis = response.IdPerson;

                    localStorage.setItem("phoneUser", PhoneRegis);
                    localStorage.setItem("IdUserRegis", NumIDRegis);
                    // window.location.href = URL_API_BASE;
                    location.replace("verification.html");
                    location.href ="verification.html";

                }else if (data.CodeResponse == 409) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ya te encuentras registrado en nuestro sistema',
                    })

                }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}