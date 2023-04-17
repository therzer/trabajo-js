function validacion(){
    var contenido = document.getElementById('contenido').value;
    var correo = document.getElementById('correo').value;

    var RegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!RegularCorreo.test(correo)  || correo ==""){
        var correo1 = document.getElementById("correo");
        correo1.style.backgroundColor = '#ff110069';
        return false;
    }
    if(contenido === ""){
        var contenido1 = document.getElementById("contenido");
        contenido1.style.backgroundColor = '#ff110069';
        return false;
    }

    var form = document.frmEnv;
    form.submit();
}