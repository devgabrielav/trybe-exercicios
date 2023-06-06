const newEmployees = (name) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  employees.forEach((id) => {
    id = `Nome: ${name}, Email: ${name[0]}_${name[1]}@trybe.com`;
  })
  return employees;
};

console.log(newEmployees('Pedro Guerra'));