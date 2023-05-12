<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main id="parent-of-parent">
        <section id="parent">
          <section id="first-child"></section>
          <section id="where-are-you">
            <section id="first-child-of-child"></section>
          </section>
          Attention!
          <section id="third-child"></section>
          <section id="fourth-and-last-child"></section>
        </section>
      </main>
      <script src="script.js"></script>
</body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main id="paiDoPai">
        <section id="pai">
          <section id="primeiroFilho"></section>
          <section id="elementoOndeVoceEsta">
            <section id="primeiroFilhoDoFilho"></section>
            <section id="segundoEUltimoFilhoDoFilho"></section>
          </section>
          Atenção!
          <section id="terceiroFilho"></section>
          <section id="quartoEUltimoFilho"></section>
        </section>
      </main>
      <script src="script.js"></script>
</body>
</html> -->

------------------------------------------------------------------------------------------------------------------

script.js

/* const paizao = document.getElementById('where-are-you');
paizao.parentNode.style.color = 'pink';
console.log(paizao.firstChild);
console.log(paizao.parentNode.parentNode.innerText);
console.log(paizao.nextElementSibling);

const fChild = document.getElementById('first-child-of-child');
fChild.innerText = 'Sou o primogênito';

const parent = document.getElementById('parent');
console.log(parent.lastChild.previousElementSibling.previousElementSibling); */

/* const parent = document.getElementById('pai');
let novoIrmao = document.createElement('section');
novoIrmao.innerHTML = 'Sou o irmão mais novo';
parent.appendChild(novoIrmao);

const onde = document.getElementById('elementoOndeVoceEsta');
let filho = document.createElement('p');
filho.innerText = 'I am your child.'
onde.appendChild(filho);

const fiDoFi = document.getElementById('primeiroFilhoDoFilho');
let filhoDofi = document.createElement('h1');
filhoDofi.innerText = 'I am filho do fi.'
fiDoFi.appendChild(filhoDofi);

console.log(fiDoFi.parentNode.nextElementSibling); */

