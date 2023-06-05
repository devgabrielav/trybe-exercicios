const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((num) => num % 3 === 0 && num % 5 === 0));

const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names1.find((name) => name.length === 5));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((musica) => musica.id === '31031685'));


 const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((names) => name === names);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro')); 

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, idade) => (array.every((person) => person.age >= idade));

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));