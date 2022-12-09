function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

              if (data.Codigo === 200 ){
                
                // window.location.href = URL_API_BASE;
                location.replace("wallet.html");
                location.href ="wallet.html";
                

              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'No pudimos crear tu cuenta',
                })
              };
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")            
        }
    });
}