document.getElementById('buttom').addEventListener('click', function(){

    let valor = parseInt(document.getElementById('num').value)

    if(valor % 2 === 0){
        alert('El numero es par')
        console.log('El numero es par')
    
    }else{
        alert('El numero es impar')
        console.log('El numero es impar')
    }


});