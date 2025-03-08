// PEDIR FECHA ACTUAL
const actualYear = new Date().getFullYear();

let year = 1900;
let result = 0;

do{
    year = parseInt(prompt('En que año naciste', year))
}while (year > actualYear)

result = actualYear - year;

alert('Tienes ' + result + ' años')