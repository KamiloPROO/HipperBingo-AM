const btnVerifiacion = document.getElementById("buttonVerificarCodeRegistro"); 


btnVerifiacion.addEventListener('click', () => {

    const PasswordVerificacion = document.getElementById("codeRegister").value


    if (PasswordVerificacion === null || PasswordVerificacion === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tus Login',
        })

    }else {

        verificacionPersona();
    }
})

