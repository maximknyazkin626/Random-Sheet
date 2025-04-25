// ------------------------------Вопросы---------------------------------------
let questions = [
    'Каждую ночь он переживает сонный паралич',
    'Каждый раз когда он будет срать, его кто-то будет палить за этим',
    'Чтобы он женился',
    'Каждый раз когда он будет улыбатся, он будет давать жиденького папуаса',
    'Он заразится вшами',
    'Каждое утро для того чтобы проснуться ему нужно будет обосраться',
    'Чтобы он был счастливым',
    'Единственный трек который он сможет слушать это Kambulat - Привет',
    'Станет крестным твоего ребенка',
    'Станет мужем твоей дочери',
    'Он будет твоим единственным другом до конца жизни',
    'Будет разговаривать всю жизнь только на узбекском языке',
    'После каждого третьего слова будет говорить "Бебра"',
    'Каждый год у него будет выпадать один зуб'
];

let images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

// ------------------------------Генератор рандомных вопросов------------------------------
let firstQuestion = document.getElementById('firstQuestion');
let secondQuestion = document.getElementById('secondQuestion');

function generateRandomQuestion(array) {
    let randomQuestion1 = array[Math.floor(Math.random() * array.length)];
    let randomQuestion2 = array[Math.floor(Math.random() * array.length)];
    firstQuestion.textContent = randomQuestion1;
    secondQuestion.textContent = randomQuestion2;
}

document.addEventListener("DOMContentLoaded", generateRandomQuestion(questions));

// ------------------------------Генератор рандомных фоток------------------------------
let firstImage = document.querySelector('.first-image');
let secondImage = document.querySelector('.second-image');

function generateRandomImage(array) {
    let randomNum1 = Math.floor(Math.random() * array.length);
    let randomNum2 = Math.floor(Math.random() * array.length);
    firstImage.setAttribute("src", array[randomNum1]);
    secondImage.setAttribute("src", array[randomNum2]);
}

document.addEventListener("DOMContentLoaded", generateRandomImage(images));