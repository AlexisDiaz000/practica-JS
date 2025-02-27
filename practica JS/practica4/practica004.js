
document.getElementById('button').addEventListener('click', function () {

    let sueldoactual = parseInt(document.getElementById('inputNumber').value);
    let resultScreen = document.getElementById('texto');
    switch (true) {
        case (sueldoactual <= 500):
            resultScreen.textContent = "Es un sueldo muy bajo cambia de trabajo!"
            break;
        case (sueldoactual > 500 && sueldoactual < 1000):
            resultScreen.textContent ="Mejora tu sueldo"
            break;
        case (sueldoactual >= 1000 && sueldoactual < 1500):
            resultScreen.textContent = "tu sueldo es aceptable"
            break;
        case (sueldoactual >= 1500):
            resultScreen.textContent = "tu sueldo es exelente"
            break;
        default:
            resultScreen.textContent = "No escriste un sueldo real"


    }
});