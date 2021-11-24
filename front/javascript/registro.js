function registrarUsuario(){
    let myData = {
        name: $("#nombre").val(),
        email: $("#correo").val(),
        password: $("#contraseña1").val(),
    };

    let confirmarpass = $("#contraseña2").val();
    if (
        myData.email == "" ||
        myData.name == "" ||
        myData.password == "" ||
        confirmarpass == ""
    ) {
        let idalert = document.getElementById('alertvacia');
        let alertHTML = `
        <div class="alert alert-primary" role="alert">
            Debe llenar todos los campos.
        </div>
        `;
        idalert.innerHTML= alertHTML;
        return
    } else {
        let dataToSend = JSON.stringify(myData);

        if (myData.password == confirmarpass){
            consultarCorreo(dataToSend);
        } else {
            let idalert2 = document.getElementById('alertpass2');
            let idalert = document.getElementById('alertpass');
            let alertHTML = `
            <div class="alert alert-primary" role="alert">
                No coinciden las contraseñas.
            </div>
            `;
            idalert.innerHTML = alertHTML;
            idalert2.innerHTML = alertHTML;
            return
        }
    }
}

function consultarCorreo(dataToSend){
    let email = $("#correo").val();

    $.ajax({
        url: "http://localhost:81/api/user/" + email,
        type: "GET",
        dataType: "json",
        success: function (respuesta){
            if (respuesta){
                let idalert = document.getElementById('alertemail');
                let alertHTML = `
                <div class="alert alert-primary" role="alert">
                    Correo ya registrado o incorrecto.
                </div>
                `;
                idalert.innerHTML = alertHTML;
                return
            } else {
                crearUsuario(dataToSend);
            }
        },
        error: function(e){
            alert("error" + e)
        },
    });
}

function crearUsuario(dataToSend){
    $.ajax({
        url: "http://localhost:81/api/user/new",
        type: "POST",
        data: dataToSend,
        dataType: "json",
        contentType: "application/json",
        complete: function (respuesta){
            alert("Cuenta creada satisfactoriamente")
            window.location.href = "index.html";
        }
    });
}