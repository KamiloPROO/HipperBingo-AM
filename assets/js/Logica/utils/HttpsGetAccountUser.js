function crearCuentaWallet() {

    var idpersona = localStorage.getItem("idPersonHipper");
    var nomUser = localStorage.getItem("nomUserHipper");
    var celUser = localStorage.getItem("celUserHipper");

    const CuentaTron = {
        
        Referencia: "",
        NombrePersona: nomUser,
        Telefono:celUser,
        IdUsuario: idpersona,
        EstadoActivo:"true",
        FechaCreacion:"",
        FechaActualizacion:"",
        SaldoVirtual:""

    }
    
    crear(CuentaTron);  


}






document.addEventListener('DOMContentLoaded', e => {

    var idpersona = localStorage.getItem("idPersonHipper");
    var nomWallet = localStorage.getItem("nomUserHipper");

    $.ajax({
        type: "POST",
        url: "https://excelsiortrader.app/api/Cuenta/GetAccountUser",
        data: { "IdPersona": idpersona },
        success: function (data) {

            console.log(data);
             
            if (data == null){
 

          crearCuentaWallet();


            } else if (data != null){

                const respu = document.getElementById('nombreUser');
                const respu2 = document.getElementById('saldoUsdtWallet')
                const respu4 = document.getElementById('fechaCreada')
                const respu5 = document.getElementById('fechaActua')

                respu.textContent = nomWallet
                respu2.textContent = `${data.SaldoVirtual}`
                respu4.textContent = `${data.FechaCreacion}`
                respu5.textContent = `${data.FechaActualizacion}`
            }

        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });

})