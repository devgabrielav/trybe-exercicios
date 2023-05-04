/* /* let numero1 = 35;
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
 
let cavalo = 'L';

switch (cavalo) {
    case 'L' || 'l':
        console.log('Cavalo movimenta em L');
        break;
    default:
        console.log('Error');
        break
} 

let nota = 150;

if (nota >= 90 && nota <= 100){
    console.log('A');
}
else if (nota >= 80 && nota <= 100){
    console.log('B');
}
else if (nota >= 70 && nota <= 100){
    console.log('C');
}
else if (nota >= 60 && nota <= 100){
    console.log('D');
}
else if (nota >= 50 && nota <= 100){
    console.log('E');
} 
else if (nota < 50){
    console.log('F');
} 
else if (nota < 0 || nota > 100){
    console.log('Nota inválida');
} 

let num1 = 5;
let num2 = 10;
let num3 = 13;
let epar;

if (num1 % 2 == 0 || num2 % 2 == 0|| num3 % 2 == 0){
    epar = true;
    console.log(epar);
} else {
    epar = false;
    console.log(epar);
} 

let impostoCusto = 1520 / 5;
let custoProduto = 1520 + impostoCusto;
let valorVenda = 2000;
let valorLucro = valorVenda - custoProduto;

if (impostoCusto < 0 || custoProduto < 0 || valorVenda < 0){
    console.log('Valores inválidos');
} else {
    console.log(valorLucro);
}*/

//salario bruto - INSS && - IR

let salarioB = 2000;
let salarioL ;

if (salarioB <= 1556.94){
    salarioL = salarioB - salarioB * 0.08;
    console.log('Isento de IP.Alíquota de 8%.Salário líquido: ' + salarioL);
} else if (salarioB <= 1903.98 && salarioB > 1556.95){
    salarioL = salarioB - salarioB * 0.09;
    console.log('Isento de IP.Alíquota de 9%.Salário líquido: ' + salarioL);
} else if (salarioB <= 2594.92 && salarioB >= 1903.99 && salarioB <= 2825.65){
    salarioL = salarioB - salarioB * 0.09 - salarioB * 0.075;
    console.log('Alíquota de 9%.IP de 7,5%. Salário líquido: ' + salarioL);
} else if (salarioB >= 2594.93 && salarioB <= 5189.82 && )


/* 
let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
*/ 