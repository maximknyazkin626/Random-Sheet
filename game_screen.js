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
    'Выйдет в клетку против Конора Макгрегора на минуту',
    'Станет патау',
    'Не сможет больше разговаривать',
    '50 пощёчин'
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
    './assets/11.jpg',
    './assets/13.jpg',
    './assets/16.jpg'
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
    if (randomNum1 === randomNum2) {
        randomNum1 = Math.floor(Math.random() * array.length);
        firstImage.setAttribute("src", array[randomNum1]);
        secondImage.setAttribute("src", array[randomNum2]);
    } else {
        firstImage.setAttribute("src", array[randomNum1]);
        secondImage.setAttribute("src", array[randomNum2]);
    }
    
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

let endScreenStatistics = document.querySelector('.end-screen__statistics');

function createStatisticsElement(array) {
    //////////////////////////////Создаём элемент самой карточки - newStatisticsCard
    let newStatisticsCard = document.createElement('div');
    newStatisticsCard.className = 'end-screen__statistics-card'; 
    endScreenStatistics.append(newStatisticsCard);
    
    ////////////////////////////Создаём элемент изображения - newStatisticsCardImage
    let newStatisticsCardImage = document.createElement('img');
    newStatisticsCardImage.className = 'end-screen__statistics-card-image'; 
    newStatisticsCard.prepend(newStatisticsCardImage);
    newStatisticsCardImage.src = array.id

    ////////////////////////////Создаём элемент вопроса - newStatisticsCardImage
    for (let i = 0; i < array.questions.length; i++) {
        let newStatisticsCardQuestion = document.createElement('div');
        newStatisticsCardQuestion.className = 'end-screen__statistics-card-question';
        newStatisticsCard.append(newStatisticsCardQuestion);
        newStatisticsCardQuestion.textContent = array.questions[i];
    }
    
}


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
        // gameHeader.classList.toggle('hide');
        gameMain.classList.toggle('hide');
        endScreen.classList.toggle('hide');

        for (let i = 0; i < answers.length; i++) {
            // statisticImg1.src = answers[i].id;
            createStatisticsElement(answers[i]);
        }
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
        // gameHeader.classList.toggle('hide');
        gameMain.classList.toggle('hide');
        endScreen.classList.toggle('hide');

        for (let i = 0; i < answers.length; i++) {
            // statisticImg1.src = answers[i].id;
            createStatisticsElement(answers[i]);
        }
    }
});
