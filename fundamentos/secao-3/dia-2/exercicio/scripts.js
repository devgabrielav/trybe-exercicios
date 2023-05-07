/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;

for (let index = 0; index < numbers.length; index += 1){
    //console.log(numbers[index]);
    sum += numbers[index];
    //console.log(sum);
    media = sum / numbers.length;
   // console.log(media);
}

if (media > 20){
    //console.log('O valor da média aritmética é maior que 20');
} else {
    //console.log('O valor da média aritmética é menor ou igual a 20');
}
let biggestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if ( numbers[index] > biggestNumber){
        biggestNumber = numbers[index]
        //console.log(biggestNumber);
    } 
}
let numI;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 == 1){
        numI = numbers[index];
        //console.log(numI);
    } else {
       // console.log('Nenhum valor ímpar encontrado.');
    }
}

let smallerNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if ( numbers[index] < smallerNumber){
        smallerNumber = numbers[index]
        console.log(smallerNumber);
    } 
} */
/* let divisao;

for (let index = 1; index <= 25; index += 1){
    //console.log(index);
    divisao = index / 2;
    console.log(divisao);
} */

/* let fato = 1;

for (let index = 10; index > 0 ; index -= 1){
    fato *= index;
}
console.log(fato); */

/* let word = 'tryber';
let reverse =' ';

for (let index = 0; index < word.length; index += 1){
    reverse += word[word.length - 1 - index];
    //console.log(reverse);
}

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];

for (let index = 0; index < array.length; index += 1){
    if (array[index].length > biggerWord.length){
        biggerWord = array[index];
        console.log(biggerWord);
    } 
    if (array[index].length < smallerWord.length){
        smallerWord = array[index];
        console.log(smallerWord);
    }
} */

/* let numP;

for (let index = 2; index <= 50; index += 1){
    let isPrime = true;
    for (let divisor = 2; divisor < index; divisor += 1){
        if (index % divisor === 0){
            isPrime = false;
        } if (isPrime) {
           numP = index; 
        }
    }
}
console.log(numP); */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let troca;


for (let index = 1; index < numbers.length; index += 1){
    for (let pos = 0; pos < index; pos += 1)
    if (numbers[index] < numbers[pos]){
        troca = numbers[index];
        numbers[index] = numbers[pos];
        numbers[pos] = troca;
    }
}
console.log(numbers);

for (let index = 1; index < numbers.length; index += 1){
    for (let pos = 0; pos < index; pos += 1)
    if (numbers[index] > numbers[pos]){
        troca = numbers[index];
        numbers[index] = numbers[pos];
        numbers[pos] = troca;
    }
}

console.log(numbers);
