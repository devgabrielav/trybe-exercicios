// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Manga', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Morango', 'Banana', 'Maçã'];

const fruitSalad = (fruit, additional) => {
  const newfruitSalad = [...fruit, ...additional];
  return newfruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));