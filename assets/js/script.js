
document.addEventListener("click", (e) => {
    // Desafio - Parte 1
    if (e.target.id == "sticker-logo") {
        const borderImg = document.getElementById("sticker-logo");

        if (borderImg.style.border == "2px solid red") {
            borderImg.style.border = "";
        } else {
            borderImg.style.border = "2px solid red";
        }
    }

    // Desafio - Parte 2
    if (e.target.id == "btn-verificar") {
        const num1 = Number(document.querySelector("#card-1").value);
        const num2 = Number(document.querySelector("#card-2").value);
        const num3 = Number(document.querySelector("#card-3").value);
        const suma = num1 + num2 + num3;

        if (suma > 10) {
            document.querySelector("#txt-verificar").innerHTML =
                "Llevas demasiados stickers!";
        } else {
            document.querySelector(
                "#txt-verificar"
            ).innerHTML = `Llevas ${suma} stickers.`;
        }
    }

    // Desafio - Parte 3
    if (e.target.id == "btn-ingresar") {
        const digito0 = document.getElementById("digito-0").value;
        const digito1 = document.getElementById("digito-1").value;
        const digito2 = document.getElementById("digito-2").value;
        const password = Number(digito0 + digito1 + digito2);

        const mensaje = document.getElementById("txt-password");
        password === 911
            ? (mensaje.innerHTML = "Password 1 correcto")
            : password === 714
            ? (mensaje.innerHTML = "Password 2 correcto")
            : (mensaje.innerHTML = "Password Incorrecto!");
    }
});
