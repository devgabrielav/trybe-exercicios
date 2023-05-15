const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

firstLi.style.marginTop = "22px";
myWebpage.style.textAlign = 'center';

function addCLass(event) {
  const classeA = document.querySelector(".tech");
  classeA.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
}

firstLi.addEventListener("click", addCLass);
secondLi.addEventListener("click", addCLass);
thirdLi.addEventListener("click", addCLass);


input.addEventListener('input', (text) =>{
    const classeA = document.querySelector(".tech");
    classeA.innerText = text.target.value;
});

myWebpage.addEventListener('dblclick', () =>{
    window.open('https://www.linkedin.com/in/gabrielavicentini/', '_blank');
});

myWebpage.addEventListener('mouseover', () => {
    myWebpage.style.backgroundColor = 'darkblue';
});

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.
