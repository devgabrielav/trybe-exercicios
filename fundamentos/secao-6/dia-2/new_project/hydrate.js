let nums;
const hydrate = (string) => {
  string.split();
  if (string.match(/\d+/)) {
    nums += string.match(/\d+/);
  }
  if (nums == 1){
    return `${nums} copo de água`
  }
  return `${nums} copos de água`
}



console.log(hydrate('2 cerveja'));
module.exports = hydrate;