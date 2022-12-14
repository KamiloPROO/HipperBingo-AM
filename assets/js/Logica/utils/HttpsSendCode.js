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
                    const IdUserRecover = response.IdPerson;

                    localStorage.setItem("phoneUserRecover", PhoneRecover);
                    localStorage.setItem("IdUserRecovery", IdUserRecover);

                    location.replace("recoveryVerification.html");
                    location.href ="recoveryVerification.html";

                }else if (data.CodeResponse == 409) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.MessageResponse,
                    })

                }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}