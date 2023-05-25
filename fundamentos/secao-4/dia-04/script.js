const botBack = document.getElementsByClassName('botB');

for (let index = 0; index < botBack.length; index += 1){
  botBack.addEventListener('click', (event) => {
    const background = event.target.innerText;
    document.main.style.backgroundColor = background;
  })
} 