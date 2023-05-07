/* let a = 7;
let b = 3;
let c = 10;
let number = -5; */

/* console.log( a + b);
console.log( a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); */

/* if (a > b) {
    console.log(a + ' é o número maior.');
} else {
    console.log(b + ' é o número maior.');
} */

/* if (a > b && a > c){
    console.log(a + ' é o número maior.');
} else if (b > a && b > c){
    console.log(b + ' é o número maior.');
} else {
    console.log(c + ' é o número maior.');
} */

/* if (number > 0){
    console.log('positive');
} else if (number < 0){
    console.log('negative');
} else if (number == 0){
    console.log('zero');
} */

/* let a = 60;
let b = 60;
let c = 60;

if (a + b + c == 180 && a + b + c > 0){
    console.log(true);
} else {
    console.log(false);
} */

/* let pecaX = 'dama';
let result = pecaX.toLowerCase();

switch (result) {
    case 'cavalo':
        console.log('Movimenta em L.');
        break
    case 'bispo':
        console.log('Movimenta em diagonal.');
        break
    case 'dama':
        console.log('Movimenta em qualquer direção, desde que estejam livres.');
        break
    case 'rei':
        console.log('Movimenta em qualquer direção que esteja livre, porém somente uma casa por vez.');
        break
    case 'torre':
        console.log('Movimenta em linha reta, vertical ou horizontal, quantas casas quiser.');
        break
    case 'peão':
        console.log('Movimenta sempre em frente, uma casa por vez, exceto no primeiro movimento que pode se mover duas casas.');
        break
} */

/* let porcentagem = 49;

if (porcentagem >= 90 && porcentagem <= 100){
    console.log('Nota A');
} else if (porcentagem >= 80 && porcentagem <= 89){
    console.log('Nota B');
} else if (porcentagem >= 70 && porcentagem <= 79){
    console.log('Nota C');
} else if (porcentagem >= 60 && porcentagem <= 69){
    console.log('Nota D');
} else if (porcentagem >= 50 && porcentagem <= 59){
    console.log('Nota E');
} else if (porcentagem < 50 && porcentagem >= 0){
    console.log('Nota F');
} else if (porcentagem < 0 || porcentagem > 100) {
    console.log('Valor incorreto');
} */

/* let a = 3;
let b = 7;
let c = 22;

 if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log(true);
} else {
    console.log(false);
} 


if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1){
    console.log(true);
} else {
    console.log(false);
} */

/* let custoP = 1500;
let custoPr = custoP + custoP * 0.20;
let custoV = 3000;
let lucroP = custoV - custoPr;

if (custoPr < 0 || custoP < 0){
    console.log('Valor incorreto');
} else {
    console.log('O custo do seu produto foi: R$' + custoPr);
    console.log('Com o valor de venda de: R$' + custoV + '. ' + 'Seu lucro é de: R$' + lucroP);
}
 */

let salarioB = 10000;
let salarioLin;
let salarioLt; 
let inss;
let ir;

if (salarioB <= 1556.94){
    inss = salarioB * 0.08;
    salarioLin = salarioB - inss;
    console.log(salarioLin);
}else if (salarioB >= 1556.95 && salarioB <= 2594.92){
    inss = salarioB * 0.09;
    salarioLin = salarioB - inss;
    console.log(salarioLin);
} else if (salarioB >= 2594.93 && salarioB <= 5189.82){
    inss = salarioB * 0.11;
    salarioLin = salarioB - inss;
    console.log(salarioLin);
} else if (salarioB > 5189.82){
    inss = 570.88
    salarioLin = salarioB - inss;
    console.log(salarioLin);
}

if (salarioLin < 1903.98){
    console.log('Não paga IR');
} else if(salarioLin >= 1903.99 && salarioLin <= 2826.65){
    ir = salarioLin * 0.075 - 142.80;
    salarioLt = salarioLin - ir ;
    console.log(salarioLt + ' Após todos os descontos.'); 
} else if (salarioLin >= 2826.66 && salarioLin <= 3751.05){
    ir = salarioLin * 0.15 - 354.80;
    salarioLt = salarioLin - ir ;
    console.log(salarioLt + ' Após todos os descontos.');
} else if (salarioLin >= 3751.06 && salarioLin <= 4664.68){
    ir = salarioLin * 0.225 - 636.13;
    salarioLt = salarioLin - ir;
    console.log(salarioLt + ' Após todos os descontos.');
} else if (salarioLin >= 4664.68){
    ir = salarioLin * 0.275 - 869.36;
    salarioLt = salarioLin - ir;
    console.log(salarioLt + ' Após todos os descontos.');
}




