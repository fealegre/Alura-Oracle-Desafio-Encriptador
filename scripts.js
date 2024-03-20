function encriptar() {
    let mensaje = document.querySelector("textarea").value;
    let codigo = document.querySelector("p");
    let cambiapor = "";
    let salida = ""
    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje.charAt(i)) {
            case "e":
                cambiapor = "enter";
                break;
            case "i":
                cambiapor = "imes";
                break;
            case "a":
                cambiapor = "ai";
                break;
            case "o":
                cambiapor = "ober";
                break;
            case "u":
                cambiapor = "ufat";
                break;
            default:
                cambiapor = mensaje.charAt(i);
                break;
        }
        salida = salida + cambiapor;
        cambiapor = "";
    }
    codigo.innerText = salida;
}

function desencriptar() {
    let codigo = document.querySelector("textarea").value;
    let mensaje = document.querySelector("p");
    if (codigo.includes("enter")) {
        codigo = codigo.replaceAll("enter", "e");
    }
    if (codigo.includes("imes")) {
        codigo = codigo.replaceAll("imes", "i");
    }
    if (codigo.includes("ai")) {
        codigo = codigo.replaceAll("ai", "a");
    }
    if (codigo.includes("ober")) {
        codigo = codigo.replaceAll("ober", "o");
    }
    if (codigo.includes("ufat")) {
        codigo = codigo.replaceAll("ufat", "u");
    }
    mensaje.innerText = codigo;
}

function limpiar() {
    location.reload();
}