/* const generateRandomNumber = () => Math.round(Math.random() * 10);

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

  resolvedPromise().then((result) => {
    console.log(`O número gerado foi ${result}`);
  });

  const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

  rejectedPromise()
  .then((response) => {
    console.log(`O número é ${response}`);
  })
  .catch((error) => {
    console.log(`RejectedPromise: ${error.message}`);
  })


  const randomPromise = () => 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if (randomNumber % 2 === 0) {
          resolve(randomNumber);
        } else {
        reject(new Error(`Promise rejeitada. O número ${randomNumber} é ímpar!`));
        };
      }, 1000);
    });

  randomPromise()
  .then((response) => {
    console.log(`O número gerado foi ${response}`);
  })
  .catch((error) => {
    console.log(error.message);
  }) */

fetch('https://dummyjson.com/quotes/random')
.then(response => response.json())
.then(resultado => console.log(`${resultado.quote} - ${resultado.author}`))
.catch(error => console.log(`Erro na requisição: ${error.message}`));