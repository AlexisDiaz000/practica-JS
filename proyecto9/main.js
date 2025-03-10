let valorTotal = 0;

function sumarAll(...valores){
    let resultBox = document.getElementById('result');
    let numerosBox = document.getElementById('num');

    numerosBox.innerHTML = 'los numeros Utilizados en la suma:'

    for(let cont = 0; cont < valores.length;cont++){
        valorTotal += valores[cont];
        
        numerosBox.innerHTML += valores[cont];

        if(cont !== valores.length -1) numerosBox.innerHTML += '+'
    }



    resultBox.innerHTML = "El resultado es: "  + valorTotal;
    

}

sumarAll(1,3,4,5);