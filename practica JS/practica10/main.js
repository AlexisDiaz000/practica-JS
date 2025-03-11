/*Enunciado 10:
    Pide una palabra al usuario y crea una función que muestre
    esa palobra en mayúsculos y que además te diga que cantidad
    de Letras tiene dicha palabra.*/

    let text = prompt('Inserte una palabra ') 
    
    function cambio(palabra){
       let upper = palabra.toUpperCase();
       let counter = palabra.length;

       return "la palabra ha sido: "+upper+" y tiene "+counter+" letras";

    }

   alert(cambio(text));