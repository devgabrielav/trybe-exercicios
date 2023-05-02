/* let myName = 'Gabriela';
let birthCity = 'Barbacena';
let birthYear = 1999;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

let base = 5;
let height = 8;
let area = base * height;
let perimeter = 5 + 8 + 5 + 8;

console.log(area);
console.log(perimeter);

let notaCandidato = 82;

if (notaCandidato >= 80){
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
} else if (notaCandidato < 80 && notaCandidato >= 60){
    console.log('Você está na nossa lista de espera.')
} else {
    console.log('Infelizmente, você reprovou')
}

 let currentHour = 16;
let message = '';

if (currentHour >= 22){
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18){
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14){
    message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11){
    message = 'Hmmm, cheiro de café recém-passado!';
}

console.log(message); 
 */

let weekDay = 'Sábado';

if (weekDay == 'Segunda-feira' || weekDay == 'Terça-feira' || weekDay == 'Quarta-feira' || weekDay == 'Quinta-feira' || weekDay == 'Sexta-feira')  {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido! UwU!');
}