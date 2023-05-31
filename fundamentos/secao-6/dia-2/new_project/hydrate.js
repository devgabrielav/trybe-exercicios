const hydrate = (string) => {
  for(let index = 0; index < string.length; index += 1){
  if (parseInt(string[index]) !== isNaN) {
    if (string[index] === 1){
      return `${string[index]} copo de água`
    }
    return `${string[index]} copos de água`
  }
}
}

console.log(hydrate('1 cerveja'));
module.exports = hydrate;