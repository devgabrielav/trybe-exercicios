 let myName = 'Gabriela';
let birthCity = 'Barbacena';
let birthYear = 1999;

console.log(myName);
console.log(birthCity);
console.log(birthYear); 

 let base = 5;
let height = 8;
let area = base * height;
let perimeter = 5 + 5 + 8 + 8;

console.log(area);
console.log(perimeter); 

 let notaC = 87;

if (notaC >= 80){
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
} else if (notaC < 80 && notaC >= 60){
    console.log('Você está na nossa lista de espera.');
} else {
    console.log('Infelizmente, você reprovou.');
} 

 let weekDay = 'Quarta-feira';

if (weekDay == 'Segunda-feira' || weekDay == 'Terça-feira' || weekDay == 'Quarta-feira' || weekDay == 'Quinta-feira' || weekDay == 'Sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido! UwU!');
} 

 let statusC = 'aprovada';

switch (statusC) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break
    case 'reprovada':
        console.log('Infelizmente, você reprovou.');
        break
    default:
        console.log('Informação incorreta.');
        break
} 

