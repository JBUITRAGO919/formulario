function validar(){
    var correo = document.getElementById("correoAcceso").value;
    var contraseña = document.getElementById("passwordAcceso").value;

    if (correo =="jbuitrago919@misena.edu.co" && contraseña == 1234) {
        console.log("Bienvenido")
        
        function bienve(){window.location.href = ("https://professor-falken.com/programacion/javascript/como-redirigir-o-redireccionar-a-otra-pagina-web-en-javascript/") }
        bienve();
        
        
    } else {
        
        alert("password incorrecto")
        
    }



};