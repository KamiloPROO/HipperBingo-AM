
document.addEventListener('DOMContentLoaded', e => {

    const contenedorQR = document.getElementById('contenedorQR');
    const adresss = document.getElementById('subimosAdress');


    $.ajax({
        type: "GET",
        url: "https://excelsiortrader.app/api/CuentaTron/GetAddressRandom",
        data: "",
        success: function (data) {


            if (data === null) {
                location.reload()
            } else if (data.address === null) {
                location.reload()
            } else {

                const addressPasar = data.address;
                localStorage.setItem('codigoAddress', addressPasar)

                const QR = new QRCode(contenedorQR);

                QR.makeCode(data.address);
                setInterval("location.reload()", 100000);

                adresss.textContent = `${data.address}`
            }



        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
})