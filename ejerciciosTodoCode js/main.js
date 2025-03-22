let num1 = parseFloat(prompt('Ingresa el numero 1')); // Convertir a número
let num2 = parseFloat(prompt('Ingresa el numero 2')); // Convertir a número

let resta = num1 - num2;

if (resta <= 0) { // Verificar si la resta es menor o igual a 0
    alert(`${resta} es menor o igual a 0`);
    if (resta % 2 === 0) {
        alert(`${resta} es par`);
    } else {
        alert(`${resta} es impar`);
    }
} else {
    alert(`${resta} es mayor a 0`);
}
