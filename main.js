var entrada = document.getElementById("entrada");
var salida = document.getElementById("salida");

function encriptar() {
    var textSeparado = entrada.value.split('');
    textSeparado = textSeparado.map(elemento => {
        if (elemento === "a") {
            return "ai";
        }
        if (elemento === "e") {
            return "enter";
        }
        if (elemento === "i") {
            return "imes";
        }
        if (elemento === "o") {
            return "ober";
        }
        if (elemento === "u") {
            return "ufat";
        }
        return elemento;
    })
    salida.value= textSeparado.join('');
}

function desencriptar() {
    var nuevoTexto = entrada.value;
    nuevoTexto = nuevoTexto.replace('ai', 'a');
    nuevoTexto = nuevoTexto.replace('enter', 'e');
    nuevoTexto = nuevoTexto.replace('imes', 'i');
    nuevoTexto = nuevoTexto.replace('ober', 'o');
    nuevoTexto = nuevoTexto.replace('ufat', 'u');
    salida.value= nuevoTexto;
}

function copiar() {
    salida.select();
    document.execCommand('copy');
}