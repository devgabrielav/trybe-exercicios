const title = document.querySelector('#header-container');
title.style.backgroundColor = 'rgb(0, 176, 105)';

const back = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < back.length; index += 1){
    back[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const back2 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < back2.length; index += 1){
    back2[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const dad = document.querySelectorAll('.emergency-tasks div'); 
for (let index = 0; index < dad.length; index += 1){
    dad[index].style.backgroundColor = 'rgb(255, 159, 132)';
}

const dad2 = document.querySelectorAll('.no-emergency-tasks div');
for (let index = 0; index < dad2.length; index += 1){
    dad2[index].style.backgroundColor = 'rgb(249, 219, 94)';
}



