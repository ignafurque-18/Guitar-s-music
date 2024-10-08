
function checkAge(age) {
    if (age >= 18) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}


checkAge(20); 


function printNumbersUpTo(limit) {
    console.log("Números del 1 al " + limit + ":");
    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }
}


printNumbersUpTo(10); 

function countDownFrom(start) {
    console.log("Contando hacia atrás desde " + start + ":");
    while (start > 0) {
        console.log(start);
        start--;
    }
}


countDownFrom(5); 


function repeatMessage(message, times) {
    let count = 0;
    do {
        console.log(message);
        count++;
    } while (count < times);
}


repeatMessage("Hola, Guitar's Music!", 3); 


function interactiveSimulator() {
    const userInput = prompt("Introduce un número del 1 al 10:");
    const number = parseInt(userInput, 10);

    if (number >= 1 && number <= 10) {
        console.log("Has introducido el número: " + number);
    } else {
        console.log("Por favor, introduce un número válido entre 1 y 10.");
    }
}


interactiveSimulator();
