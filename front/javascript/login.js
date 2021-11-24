function ingresarUsuario() {
    let email= $("#email").val();
    let password=$("#password").val();
    if (email == "" || password == "") {
        let idalert = document.getElementById('alertvacia')
        let alertHTML = `
        <div class="alert alert-primary" role="alert">
            Debe llenar todos los campos.
        </div>
        `;
        idalert.innerHTML = alertHTML;
        return
    } else {
        $.ajax({
            url: "http://localhost:81/api/user/"+ email+ "/" + password,
            type: "GET",
            dataType: "json",
            success: function(respuesta){
                if(respuesta.id != null){
                    alert(`Bienvenido ${respuesta.name}`);
                } else {
                    let idalert = document.getElementById('alertvacia');
                    let alertHTML = `
                    <div class="alert alert-primary" role="alert">
                    El usuario o contraseña que ha ingresado no se encuentra registrado en el sistema.
                    </div>
                    `;
                    idalert.innerHTML = alertHTML;
                    return
                }
            }
        });
    }
}