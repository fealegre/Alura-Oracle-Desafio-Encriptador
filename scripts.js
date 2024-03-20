function limpiar() {
    location.reload();
}

function transcode(encrypt) {
    let mensaje = document.querySelector("textarea").value;
    let codigo = document.querySelector("p");
    if (!encrypt){    
        mensaje = mensaje.replaceAll("enter", "e");
        mensaje = mensaje.replaceAll("imes", "i");
        mensaje = mensaje.replaceAll("ai", "a");
        mensaje = mensaje.replaceAll("ober", "o");
        mensaje = mensaje.replaceAll("ufat", "u");
    } else {
        mensaje = mensaje.replaceAll("e", "enter");
        mensaje = mensaje.replaceAll("i", "imes");
        mensaje = mensaje.replaceAll("a", "ai");
        mensaje = mensaje.replaceAll("o", "ober");
        mensaje = mensaje.replaceAll("u", "ufat");
    }
    codigo.innerText = mensaje;    
}