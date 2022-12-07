function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
                
                 console.log(data);

                 const response = data.Data;


                if (data.CodeResponse == 200 ){

                    const PhoneRecover = response.Phone;

                    localStorage.setItem("phoneUserRecover", PhoneRecover);

                    // window.location.href = URL_API_BASE;
                    location.replace("recoveryVerification.html");
                    location.href ="recoveryVerification.html";

                }else if (data.CodeResponse == 409) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'NO te encuentras registrado en nuestro sistema',
                    })

                }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}