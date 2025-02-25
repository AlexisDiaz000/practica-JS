let marca = "BMW",
    velocidad = 200,
    stock = true,
    modelos = ["Z100", "CENTRA","POSMA"]

let frase = `La marca del vehiculo es
     ${marca}, su velocidad maxima es ${velocidad}km/h actualmente su estado es: ${stock}
     los modelos actuales son: <br>`


modelos.forEach((modelo) => {
    frase +=` - ${modelo} <br/>`
});

let caja = document.querySelector("#caja");
caja.innerHTML = frase;