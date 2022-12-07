const btnRegistro = document.getElementById("buttonRegistrarse"); 

btnRegistro.addEventListener('click', () => {

    const nombresRegistro = document.getElementById("nameRegister").value
    const apellidosRegistro = document.getElementById("identificationRegister").value
    const celularRegistro = document.getElementById("phoneRegister").value
    const correoRegistro = document.getElementById("emailRegister").value
    const melo = document.getElementById("selectTipDocument").value

    localStorage.setItem("numCell", celularRegistro)

    if (nombresRegistro === null || nombresRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Nombres',

        })


    } else if (apellidosRegistro === null || apellidosRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Numero de Identificacion',

        })


    } else if (celularRegistro === null || celularRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Celular',
        })

    } else if (correoRegistro === null || celularRegistro === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',
        })

    }else if (melo === "Seleccione Un tipo de documento...") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seleccione un tipo de documento',
        })

    }else {

        CrearPersona();

    }

})