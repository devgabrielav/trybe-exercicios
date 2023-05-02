let numero1 = 35;
let numero2 = 38;
let numero3 = 78;
let valorRecebido;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);

if (numero1 > numero2) {
    console.log(numero1 + ' é maior')
} else {
    console.log(numero2 + ' é maior');
}

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1 + ' é o número maior!')
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2 + ' é o número maior!')
} else {
    console.log(numero3 + ' é o número maior!')
}

if (valorRecebido > 0) {
    console.log('positive');
} else if (valorRecebido < 0) {
    console.log('negative');
} else {
    console.log('0');
}

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let resultado;

if (angulo1 + angulo2 + angulo3 == 180) {
    resultado = true;
    console.log(resultado);
} else {
    resultado = false;
    console.log(resultado);
}

