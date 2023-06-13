const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (list) => {
  return {
    model : list[0],
    brand : list[1],
    year : list[2],
  }
}

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

/* const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year }); */