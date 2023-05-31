
const techList = (linguagens, name) => {
  const array = [];
  const lingOrg = linguagens.sort();
  if(linguagens.length === 0){
    return "Vazio!";
  } else { 
  for (let index = 0; index < lingOrg.length; index += 1){
    array.push({
      tech:lingOrg[index], 
      name,})
  }
  return array;
} 
}
module.exports = techList;
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));