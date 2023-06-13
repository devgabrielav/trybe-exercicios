/* const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

//sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const nums = [17, 23, 37];
const [num1, num2, num3] = nums;

sum(num1, num3);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


[animal, bebida, comida] = [comida, animal, bebida];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [, , , seis, oito, dez, doze] = numerosPares;

console.log(seis, oito, dez, doze); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima */

/* const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); */

/* const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542)); */

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));