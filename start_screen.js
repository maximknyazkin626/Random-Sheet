let gameButton = document.getElementById('gameButton');
let rulesButton = document.getElementById('rulesButton');
let startBody = document.getElementById('start-screen-body');


rulesButton.addEventListener("click", (element) => {
    element.preventDefault();
    startBody.classList.add('hide');
})


