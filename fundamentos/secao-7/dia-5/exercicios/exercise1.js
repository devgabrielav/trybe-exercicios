const swap = (array) => {
  const [lastEl, secondEl, firstEl] = [array[2], array[1], array[0]];
  return [lastEl,secondEl,firstEl];
}

const myList = [5, 2, 3];

console.log(swap(myList));

//const myList = [5, 2, 3];

//const swap = ([a, b, c]) => [c, b, a];