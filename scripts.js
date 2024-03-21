function limpiar() {
    location.reload();
}

function transcode(encrypt) {
    let mensaje = document.querySelector("textarea").value;
    let codigo = document.querySelector("p");
    const substituciones = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
    
    const revertirSubstituciones = Object.fromEntries(
        Object.entries(substituciones).map(([key, value]) => [value, key])
    );
    
    const aplicarSubstituciones = (text, map) =>
        Object.entries(map).reduce(
            (acc, [key, value]) => acc.replaceAll(key, value),
            text
        );

    codigo.innerText = encrypt ? aplicarSubstituciones(mensaje, revertirSubstituciones) : aplicarSubstituciones(mensaje, substituciones);
}