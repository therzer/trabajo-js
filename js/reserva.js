var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="mensaje"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl){
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(".tab").css("display","none");
$("#tab-1").css("display","block");

function run(hideTab, showTab){
    //validacion
    if(hideTab < showTab){

        if(hideTab == 1){
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            
            var regularNombre = /^[A-Za-z]+$/;
            
            if(!regularNombre.test(nombre) ){
                var nombre1 = document.getElementById("nombre");
                nombre1.style.backgroundColor = '#ffdddd';
                return false;  
            }
            if(!regularNombre.test(apellido)){
                var apellido1 = document.getElementById("apellido");
                apellido1.style.backgroundColor = '#ffdddd';
                return false;
            }
        }

        if(hideTab == 2){
            var correoElectronico = document.getElementById("correo").value;
            var telefono = document.getElementById("telefono").value;   
            var numerotelefono = /^[0-9]{10}$/;
            var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!expresionRegular.test(correoElectronico)) {
                var correo = document.getElementById("correo");
                correo.style.backgroundColor = '#ffdddd';
                return false;
            }
            if(!numerotelefono.test(telefono)){
                var telefono1 = document.getElementById("telefono");
                telefono1.style.backgroundColor = '#ffdddd';
                return false;
            }
            
        }

        if(hideTab == 3){
            var selected = document.getElementById('habitaciones');
            if(selected.value == 0 || selected.value == ""){
                selected.style.background = '#ffdddd';
                return false;
            }
        }

        if(hideTab == 4){
            var fechaDesde = document.querySelector("#fecha").value;
            var fechaHast = document.querySelector("#fechaHasta").value;

            if(fechaDesde > fechaHast){
                var fecha = document.getElementById('fechaHasta');
                fecha.style.backgroundColor = '#ffdddd';
                return false;
            }
        }

        if(hideTab == 5){

            var adulto = document.querySelector("#adulto").value;
            var ninio = document.querySelector("#ninio").value;

            if(5 > adulto < 1){
                var adult = document.getElementById('adulto');
                adult.style.backgroundColor = '#ffdddd';
                return false;
            }
            if(4 < ninio){
                var adul = document.getElementById('ninio');
                adul.style.backgroundColor = '#ffdddd';
                return false;
            }    
        }
    }

    //barra de progreso
    for(i = 1; i < showTab; i++){
        $("#step-"+i).css("opacity", "1");
    }

    //cambio de formulario
    $("#tab-"+hideTab).css("display", "none");
    $("#tab-"+showTab).css("display", "block");
    $("input").css("background", "#fff");
    $("select").css("background", "#fff");

    if(hideTab == 5){
        mostrar();
    }
}

function recolector() {
    nombre1 = document.querySelector("#nombre").value;
    apellido1 = document.querySelector("#apellido").value;
    correo1 = document.querySelector("#correo").value;
    telefono1 = document.querySelector("#telefono").value;
    habitacion1 = document.querySelector("#habitaciones").value;
    fecha1 = document.querySelector("#fecha").value;
    fechahasta = document.querySelector("#fechaHasta").value;
    adulto1 = document.querySelector("#adulto").value;
    ninio1 = document.querySelector("#ninio").value;
}

function mostrar(){
    recolector();

    $("#NOMBRE-m").val(nombre1);
    $("#Apellido-m").val(apellido1);
    $("#CORREO-m").val(correo1);
    $("#TELEFONO-m").val(telefono1);
    $("#HABITACION-m").val(habitacion1);
    $("#FECHA-m").val(fecha1);
    $("#hasta").val(fechahasta);
    $("#ADULTO-m").val(adulto1);
    $("#NIÑO-m").val(ninio1);
}

/////PDF

function generarPDF(){
    recolector()

    var titulo = "•~~• Harmony Residence •~~•",
    nombre = "Nombre:",
    apellido ="Apellido:",
    correo = "Correo:",
    telefono = "Telefono:",
    habitacion = "Habitación:",
    fechaAct = "Fecha Desde:",
    fechaAsta = "Fecha Hasta:",
    adulto = "Adultos:",
    ninio = "Niños:";

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();


    var fecha = "Fecha:";
    var fechaActual = new Date();
    var fechaActualTexto = fechaActual.toISOString().slice(0, 10);
    
    var logo = new Image();
    logo.src = '../img/logo.png';

    doc.setFontSize(15);
    doc.addImage(logo,'PNG',10, 5, 25,25);
    doc.text(titulo, 40, 20);
    doc.text(fecha + ' ' + fechaActualTexto, 120, 20);

    doc.setLineWidth(1);
    doc.line(0, 33, 210, 33);

    doc.setFontSize(16);
    doc.text(nombre + ' ' + nombre1, 20, 50);
    doc.text(apellido + ' ' + apellido1, 20, 60);
    doc.text(correo + ' ' + correo1, 20, 69);
    doc.text(telefono + ' ' + telefono1, 20, 79);
    doc.text(habitacion + ' ' + habitacion1, 20, 89);
    doc.text(fechaAct + ' ' + fecha1, 20, 99);
    doc.text(fechaAsta+ '' +fechahasta, 20, 109)
    doc.text(adulto + ' ' + adulto1, 20, 119);
    doc.text(ninio + ' ' + ninio1, 20, 129);
    doc.save("Reserva.pdf");
}

