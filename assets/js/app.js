
document.addEventListener("click", (e) => {
    // PARTE 1
    if (e.target.id == "mariobros") {
        const borderImg = document.getElementById("mariobros");

        if (borderImg.style.border == "2px solid red") {
            borderImg.style.border = "none";
        } else {
            borderImg.style.border = "2px solid red";
        }
    }

    // PARTE 2
    //e. objeto que represetna el evento, y uno de sus atributos es el target,
    // que viene a ser el elemento que recibió el evento. (En este caso el botón btn-verificador)

    if (e.target.id == "btn-verificador") {
        const numero1 = document.querySelector("#elInput-1");
        const numero2 = document.querySelector("#elInput-2");
        const numero3 = document.querySelector("#elInput-3");

        if (validarInput(numero1) && validarInput(numero2) && validarInput(numero3)) {
            const suma = Number(numero1.value) + Number(numero2.value) + Number(numero3.value);
            // si la suma de sticker es mayor a 10, muestra: ¡¡Oooops!! llevas demasiados stickers
            if (suma > 10) {
                document.querySelector("#txt-verificador").innerHTML = "¡¡Oooops!! llevas demasiados stickers";
            // si no se cumple esa conidición, suma todos los stickers
            } else {
                document.querySelector("#txt-verificador").innerHTML = `Llevas ${suma} stickers`;
            }

        } else {
             document.querySelector("#txt-verificador").innerHTML = "";
        }
    }

    function validarInput(inputNum) {
        let valor = parseFloat(inputNum.value);
        // si la elección es mayo o igual a 0 
        if (Number.isInteger(valor) && valor >= 0) {
            inputNum.style.border = "1px solid blue";
            inputNum.style.animation = "";
            inputNum.placeholder = "";
            return true;
        } //else {
            // inputNum.style.border = "1px solid green";
            // inputNum.style.animation = "";
            // inputNum.value = "";
            // inputNum.placeholder = "Numero no valido";
            // return false;
         //}
    }


    // PARTE 3
    if (e.target.id == "btn-ingresar") {
        const elDigito0 = document.getElementById("digito-0").value;
        const elDigito1 = document.getElementById("digito-1").value;
        const elDigito2 = document.getElementById("digito-2").value;
        const password = Number(elDigito0 + elDigito1 + elDigito2);

        const mensaje = document.getElementById("txt-password");
        password === 911
            ? (mensaje.innerHTML = "¡Excelente! Password 1 correcto")
            : password === 714
            ? (mensaje.innerHTML = "¡Excelente! Password 2 correcto")
            : (mensaje.innerHTML = "¡Mala cosa! Tu Password es Incorrecto!");
    }
});



