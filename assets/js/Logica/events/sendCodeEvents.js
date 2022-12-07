const btnLogin = document.getElementById("buttonRecovery");


btnLogin.addEventListener('click', () => {

    const loginLogin = document.getElementById("loginUserRecovery").value
    const recoPas = document.getElementById("emaildUserRecovery").value

    localStorage.setItem("correoRecovery",recoPas);

    if (loginLogin === null || loginLogin === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Usuario',

        })


    } else if (recoPas === null || recoPas === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Tu Correo',

        })

    }else {

        SecondCode();

    }

})