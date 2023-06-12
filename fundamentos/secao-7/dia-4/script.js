/* // Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Manga', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Morango', 'Banana', 'Maçã'];

const fruitSalad = (fruit, additional) => {
  const newfruitSalad = [...fruit, ...additional];
  return newfruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(42, 75, 81, 900, 600)); 

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

 */
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userData = {... user, ...jobInfos};
const {name} = userData;
const {age} = userData;
const {nationality} = userData;
const {profession} = userData;
const {squad} = userData;
const {squadInitials} = userData;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);