// ------------------------------Вопросы---------------------------------------
let questions = [
    'Каждую ночь будет переживать сонный паралич',
    'Каждый раз когда он будет срать, кто-то будет палить его за этим',
    'Женится',
    'Каждый раз когда он будет улыбатся, он будет давать жиденького папуаса',
    'Заразится вшами',
    'Каждое утро для того чтобы проснуться ему нужно будет обосраться',
    'Станет счастливым',
    'Единственный трек который он сможет слушать это Kambulat - Привет',
    'Станет крестным твоего ребенка',
    'Станет мужем твоей дочери',
    'Будет твоим единственным другом до конца жизни',
    'Будет разговаривать всю жизнь только на узбекском языке',
    'После каждого третьего слова будет говорить "Бебра"',
    'Каждый год будет выпадать один зуб',
    'Всю жизнь будет работать дворником',
    'Будет иметь IQ как у карася',
    'Сядет в тюрьму на 5 лет',
    'Будет каждый раз хрюкать во время секса',
    'Каждую ночь будут сниться кошмары',
    'Обосрётся на собственной свадьбе',
    'Получит миллион рублей',
    'Его имя по паспорту будет Тралалело Тралала',
    'Перекрут яичка.',
    'Никогда больше не сможет играть в валорант',
    'Отправится на неделю жить в племя людоедов',
    'Станет афроамериканцем (негром)',
    'Станет ростом 150 см',
    '- 5 см к писюнчику',
    'Постоянно будут жечь соски',
    'Каждый раз во время пука будет выпадать один зуб',
    'Будет вставать только на женщин 50+',
    'Каждый желающий сможет прочитать его мысли',
    'Навсегда выселят из России',
    'Всю жизнь будет работать в салоне эротического массажа',
    'Одна эякуляция - минус год жизни',
    'Клещ укусит за яичко',
    'Перестанет различать вкусы',
    'Станет президентом России',
    'Съест коровью лепёшку',
    'Никогда больше его не увидеть',
    'Выйдет в клетку против Конора Макгрегора на минуту'
];

let images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg',
    './assets/7.jpg',
    './assets/8.jpg',
    './assets/9.jpg',
    './assets/10.jpg',
    './assets/11.jpg',
    './assets/12.jpg',
    './assets/13.jpg',
    './assets/14.jpg',
    './assets/15.jpg',
    './assets/16.jpg',
    './assets/17.jpg',
    './assets/18.jpg',
    './assets/19.jpg'
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


// ------------------------------Запись ответов в статистику---------------------------------
class StatisticsItem {
    constructor(id, question) {
      this.id = id;
      this.questions = [question];
    }
} /////////////Класс для записи объектов со статистикой

let answers = []; ////////////////Массив в котором хранятся объекты со статистикой: id - ссылка на фото, questions - массив вопросов
console.log(answers);


// ------------------------------Выбор вариантов ответов--------------------------------------
// ------------------------------Появление экрана окончания игры------------------------------
let first = document.getElementById('first');
let second = document.getElementById('second');
let counter = 0;

let gameHeader = document.getElementById('gameHeader');
let gameMain = document.getElementById('gameMain');
let endScreen = document.getElementById('endScreen');

// -----------------Переменные для вписывания вопросов в статистику-------------------------
let statisticImg1 = document.getElementById('statisticsCardImage1');
let statisticImg2 = document.getElementById('statisticsCardImage2');
let statisticImg3 = document.getElementById('statisticsCardImage3');
let statisticImg4 = document.getElementById('statisticsCardImage4');
let statisticImg5 = document.getElementById('statisticsCardImage5');
let statisticImg6 = document.getElementById('statisticsCardImage6');
let statisticImg7 = document.getElementById('statisticsCardImage7');
let statisticImg8 = document.getElementById('statisticsCardImage8');
let statisticImg9 = document.getElementById('statisticsCardImage9');

let statisticImg1Src = statisticImg1.src;
let statisticImg2Src = statisticImg2.src;
let statisticImg3Src = statisticImg3.src;
let statisticImg4Src = statisticImg4.src;
let statisticImg5Src = statisticImg5.src;
let statisticImg6Src = statisticImg6.src;
let statisticImg7Src = statisticImg7.src;
let statisticImg8Src = statisticImg8.src;
let statisticImg9Src = statisticImg9.src;

first.addEventListener('click', () => {
    let firstImageSrc = firstImage.src;
    let firstQuestionText = firstQuestion.textContent;

    // console.log(firstImageSrc);
    let exists = answers.find(obj => obj.id == firstImageSrc);
    console.log('Статус объекта - ', exists);

    if (exists == undefined) {
        // console.log(firstQuestion.textContent);
        answers.push(new StatisticsItem(firstImageSrc, firstQuestionText));
        console.log(answers);
    } else { 
        exists.questions.push(firstQuestionText);
        console.log(answers);
    }

    generateRandomImage(images);
    generateRandomQuestion(questions);
    counter++;
    console.log(counter);

    if (counter === 12) {
        gameHeader.classList.toggle('hide');
        gameMain.classList.toggle('hide');
        endScreen.classList.toggle('hide');

        statisticImg1.src = answers[1].id;
        statisticImg2.src = answers[2].id;
        statisticImg3.src = answers[3].id;
        statisticImg4.src = answers[4].id;
    }
});

second.addEventListener('click', () => {
    let secondImageSrc = secondImage.src;
    let secondQuestionText = secondQuestion.textContent;

    let exists = answers.find(obj => obj.id == secondImageSrc);
    console.log('Статус объекта - ', exists);

    if (exists == undefined) {
        // console.log(firstQuestion.textContent);
        answers.push(new StatisticsItem(secondImageSrc, secondQuestionText));
        console.log(answers);
    } else { 
        exists.questions.push(secondQuestionText);
        console.log(answers);
    }

    generateRandomImage(images);
    generateRandomQuestion(questions);
    counter++;
    console.log(counter);

    if (counter === 12) {
        console.log('Counter = 12');
        gameHeader.classList.toggle('hide');
        gameMain.classList.toggle('hide');
        endScreen.classList.toggle('hide');

    }
});
