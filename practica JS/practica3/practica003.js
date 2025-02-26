let velocidadMaxima = 60;

document.getElementById('verificarButton').addEventListener('click', function () {

    let velocidadActual = parseInt(document.getElementById('velocidadInput').value);
    let resultadoPantalla = document.getElementById('resultado');
    
    if (isNaN(velocidadActual)) {
       resultadoPantalla.textContent = "por favor, ingresa un numero valido"
        return;
    }

    if (velocidadActual >= velocidadMaxima) {
        resultadoPantalla.textContent = " por favor, baja la velocidad"; 
    } else {
        resultadoPantalla.textContent = "La Velocidad es la reglamentaria"
    }
});

