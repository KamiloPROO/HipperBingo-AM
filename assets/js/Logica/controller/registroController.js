function CrearPersona() {

    const melo = document.getElementById("selectTipDocument").value

    if (melo == "Tarjeta de Identidad"){

        const tarjeta = 1

        const registrarPersona = {

            FirstName: $("#nameRegister").val(),
            SecondName: "",
            FirstSurname:  $("#Apellido").val(),
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: tarjeta,
            Document: $("#identificationRegister").val(),
            MaritalStatus: "",
            Phone: $("#phoneRegister").val(),
            CellPhone: $("#phoneRegister").val(),
            Direction: "",
            Email: $("#emailRegister").val(),
            IdProject: "7",
            Passworrd: "",
            IdRole: "1",
            
        }
    
        registro(registrarPersona)
        
    }else if (melo == "Cedula de Ciudadania"){

        const cedula = 2;

        const registrarPersona = {

            FirstName: $("#nameRegister").val(),
            SecondName: "",
            FirstSurname:  $("#Apellido").val(),
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: cedula,
            Document: $("#identificationRegister").val(),
            MaritalStatus: "",
            Phone: $("#phoneRegister").val(),
            CellPhone: $("#phoneRegister").val(),
            Direction: "",
            Email: $("#emailRegister").val(),
            IdProject: "7",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(registrarPersona)

    }else if ( melo == "Pasaporte"){

        const pasaporte = 3;

        const registrarPersona = {

            FirstName: $("#nameRegister").val(),
            SecondName: "",
            FirstSurname:  $("#Apellido").val(),
            SecondSurname: "",
            Sex: "",
            DateOfBirth: "",
            DocumentType: pasaporte,
            Document: $("#identificationRegister").val(),
            MaritalStatus: "",
            Phone: $("#phoneRegister").val(),
            CellPhone: $("#phoneRegister").val(),
            Direction: "",
            Email: $("#emailRegister").val(),
            IdProject: "7",
            Passworrd: "",
            IdRole: "1",
    
        }
    
        registro(registrarPersona)

    }

    

}
