/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    //console.log(numbers[index]);
}

let sum = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
//console.log(sum);

for (let index = 0; index < numbers.length; index += 1) {
    media = sum / numbers.length;
}
//console.log(media);

if (media > 20) {
   // console.log('O valor da média aritmética é maior que 20');
} else {
    //console.log('O valor da média aritmética é menor ou igual a 20');
}

let biggestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > biggestNumber){
        biggestNumber = numbers[index];
    }
}
console.log(biggestNumber);


for (index = 0; index < numbers.length; index += 1){
    let numIm = 0;
    if (numbers[index] % 2 === 1){
        numIm = numbers[index];
        console.log(numIm);
    } else {
        console.log('Nenhum valor ímpar encontrado');
    }
}

let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < smallestNumber){
        smallestNumber = numbers[index];
    }
}
console.log(smallestNumber);
for (let index = 1; index <= 25; index += 1){
    console.log(index);
    let div = 0;
    div = index / 2;
    console.log(div);
} 

let mult = 1;
for (let fatorial = 10; fatorial > 0; fatorial -= 1){
    mult *= fatorial;
    console.log(mult);
}

let word = 'tryber';
let reverse = '';
for (let index = word.length - 1; index >= 0; index -= 1){
    reverse += word[index];
    console.log(reverse);
}

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (index = 0; index < array.length; index += 1){
    if (array[index].length > biggestWord.length){
        biggestWord = array[index];
        console.log(biggestWord);
    }
    if (array[index].length < smallestWord.length){
        smallestWord = array[index];
        console.log(smallestWord);
    }
}


let biggestN = 2;


for (index = 2; index <= 50; index += 1){
    if (index > biggestN && index % 2 !== 0){
        biggestN = index;
    }
}
console.log(biggestN); */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
    for (let index2 = 0; index2 < index; index2 += 1){
        if (numbers[index] < numbers[index2]){
            let cresc = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = cresc;
        }
    }
}
//console.log(numbers);

for (let index = 1; index < numbers.length; index += 1){
    for (let index2 = 0; index2 < index; index2 += 1){
        if (numbers[index] > numbers[index2]){
            let decresc = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = decresc;
        }
    }
}
//console.log(numbers);

/* let newNumbers = [];

for (let index = 0; index < numbers.length; index += 1){
    
        newNumbers = numbers[index] * numbers[index2];
    
}
console.log(newNumbers); */