const textareaMensaje = document.getElementById('textareaMensaje');
const textareaResultado = document.getElementById('textareaResultado');
const buttonEncriptar = document.getElementById('btnEncriptar');
const buttonDesencriptar = document.getElementById('btnDesencriptar');
const buttonCopiar = document.getElementById('btnCopiar');
var mostrar = document.getElementById('mostrar');
var ocultar = document.getElementById('ocultar');

function msjInfo(){
    Swal.fire({
        icon: 'info',
        title: 'Lo sentimos',
        text: 'No se permiten caracteres especiales, ni MAYUSCULAS'
    });
}

function msjError(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo vacio, favor de escribir al menos una palabra'
    });
}

function copyAprobado(){
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',  
        title: 'Texto copiado con exito',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    });
}

// Encriptar
function encriptar() {
    var encriptarMensaje = textareaMensaje.value
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    textareaResultado.getElementById = 'textareaResultado';
    textareaResultado.innerText = encriptarMensaje;
    
}

function msjEncriptar(){

    if(textareaMensaje.value === ""){
        msjError();
        mostrar.className = 'oculto';
        ocultar.className = 'cont-info';
    }else if(textareaMensaje.value.match(/^[a-z ]*$/)) {
            encriptar();
            mostrar.className = 'activo';
            ocultar.className = 'oculto';
            
        }
        else{
            msjInfo();
            textareaMensaje.value = '';
            mostrar.className = 'oculto';
            ocultar.className = 'cont-info';
        }
}

buttonEncriptar.onclick = msjEncriptar;

// Desencriptar
function desencriptar() {
    var desencriptarMensaje = textareaMensaje.value

    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    textareaResultado.getElementById = 'textareaResultado';
    textareaResultado.innerText = desencriptarMensaje;
    
}

function msjDesencriptar(){

    if(textareaMensaje.value === ""){
        msjError();
        mostrar.className = 'oculto';
        ocultar.className = 'cont-info';
    }else if(textareaMensaje.value.match(/^[a-z ]*$/)) {
            desencriptar();
            mostrar.className = 'activo';
            ocultar.className = 'oculto';
            
        }
        else{
            msjInfo();
            textareaMensaje.value = '';
            mostrar.className = 'oculto';
            ocultar.className = 'cont-info';
        }
}

buttonDesencriptar.onclick = msjDesencriptar;

// Copiar
function copiarTexto(){
    var copiarResultado = document.getElementById('textareaResultado').value;
    
    navigator.clipboard.writeText(copiarResultado).then(() =>{
        textareaMensaje.value = '';
        copyAprobado();
    })
}

buttonCopiar.onclick = copiarTexto;