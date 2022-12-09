
let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 5000);
}

function mandarMensaje() {

    var idpersona = localStorage.getItem("idPersona");
    var codAddress = localStorage.getItem("codigoAddress");

   

    $.ajax({
        type: "POST",
        url: "https://excelsiortrader.app/api/CuentaTron/Getpaymentsaddress",
        data: {"IdUser":idpersona , "address": codAddress},
        success: function (data) {

            console.log(data);

        if(data.total === null) {
            location.reload()
        }else if(data.total != 0) {
            Swal.fire({
                icon: 'success',
                title: 'succesful transaction',
              }).then((result) => {
                if(result.isConfirmed){
                    window.location.href = URL_API_BASE;
                    location.replace("wallet.html");
                    location.href ="wallet.html";   
                }   
            })

        }
        

        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}

document.addEventListener('DOMContentLoaded', e => {

    var idpersona = localStorage.getItem("idPersona");
    var codAddress = localStorage.getItem("codigoAddress");

    $.ajax({
        type: "POST",
        url: "https://excelsiortrader.app/api/CuentaTron/Getpaymentsaddress",
        data: {"IdUser":idpersona , "address": codAddress},
        success: function (data) {

        if(data.total === null) {
            location.reload()
        } else if (data.total === 0) {

            repetirCadaSegundo()

        }else if (data.total != 0) {
            Swal.fire({
                icon: 'success',
                title: 'succesful transaction',
              }).then((result) => {
                if(result.isConfirmed){
                    window.location.href = URL_API_BASE;
                    location.replace("wallet.html");
                    location.href ="wallet.html";   
                }   
            })

            clearInterval(identificadorIntervaloDeTiempo);
        }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
})