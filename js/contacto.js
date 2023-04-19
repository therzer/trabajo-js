function validacion(){
    var contenido = document.getElementById('mensaje').value;
    var correo = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telef').value;
    var asunto = document.getElementById('asunto').value;

    var RegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regularNombre = /^[A-Za-z]+$/;
    var numerotelefono = /^[0-9]{10}$/;

    if(nombre === "" || !regularNombre.test(nombre)){
        var nom = document.getElementById("nombre");
        nom.style.backgroundColor = '#ff110069';
        return false;
    }

    if(!RegularCorreo.test(correo)  || correo ==""){
        var correo1 = document.getElementById("email");
        correo1.style.backgroundColor = '#ff110069';
        return false;
    }

    if(!numerotelefono.test(telefono) || telefono ==""){
        var tele = document.getElementById("telef");
        tele.style.backgroundColor = '#ff110069';
        return false;
    }
    if(!regularNombre.test(asunto) || asunto ==""){
        var asun = document.getElementById("asunto");
        asun.style.backgroundColor = '#ff110069';
        return false;
    }
    if(contenido === ""){
        var contenido1 = document.getElementById("mensaje");
        contenido1.style.backgroundColor = '#ff110069';
        return false;
    }
    var form = document.frmEnv;
    form.submit();
    
}