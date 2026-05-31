/*
//#1 
let a = 10;
alert (a);
a = 20;
alert (a);

//#2 
{
const age = 2007;
alert (`Дата выхода первого iPhone - ${age}`);}

//#3
const name = 'Брендан Эйх';
alert(`Создатель JS - ${name}`);

//#4
x = 10;
y = 2;
alert(x+y);
alert (x-y);
alert (x*y);
alert (x/y);

//#5
alert(2**5);

//#6
а=9;
b=2;
alert(a%b);

//#7
let num = 1;
num +=5;
alert(num);
num -=3;
alert(num);
num *=7;
alert(num);
num /=3;
alert(num);
num++;
alert(num);
num--;
alert(num);

//#8
{let age = prompt("Сколько вам лет?")
alert(age);}

//#9
const User = {
    name: 'Никита',
    age: 29,
    isAdmin: 123456789111213n
}

//#10
{const name = prompt("Ваше имя");
    alert(name);
}; 

//HW3
//#1
// 


let password = '12345';
let message = prompt ('Введите пароль');
if (message === password) {alert ('Пароль введен верно');
} 
else {alert('Пароль введен неправильно');
}

//#2
let c = 1;
if (c>0 && c<10) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

//#3
let d = 20
let e = 101
if (d>100||e>100) {console.log('Верно');
    
} else {console.log('Неверно');
    
}

//#4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number (b));

//#5

let monthNumber = 12;

if (monthNumber >= 1 && monthNumber <= 12) {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    }
} else {
     console.log('ошибка ');
}


//HW#4 циклы
//№1
let i = 0;
while (i<2) {
    console.log('Привет');
    i++
}
//№2
let a = 0;
while(a<6){
    console.log(a);
    a++
} 
//№3
let x =7;
while (x>=7 && x<=22) {
    console.log(x);
    x++
}
//№4
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let key in obj) {
  console.log(`${key} — Имя сотрудника ${obj[key]} сумма $`);
}
//№5
 
let n = 1000;
let num = 0;
while (n/=2){
    if(n<50){
        break;
    }
    num++
    console.log(n)
    console.log(num)
}
//№6
let friday = 5;
let MonthsDay = 31;
for(let day = friday; day<=31 ; day +=7){
    console.log(`Сегодня пятница,${day}-е число. Необходимо подготовить отчет.`)
}

 доп задания
let k = 100;
let iterations = 0;
while (k -=7) {
        if(k<-7){
break;
        }
iterations++
console.log(k)
console.log(iterations)
} 


//HW#5 функции

function guessTheNumber() {
  
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let userGuess = null;


  while (userGuess !== secretNumber) {
    userGuess = prompt("Угадай число от 1 до 100:");

    
    if (userGuess === null) break;

    userGuess = Number(userGuess);

   
    if (userGuess > secretNumber) {
      alert("Загаданное число меньше!");
    } else if (userGuess < secretNumber) {
      alert("Загаданное число больше!");
    }
  }

 
  if (userGuess === secretNumber) {
    alert("Поздравляем! Вы угадали число " + secretNumber);
  }
}




//№1
const exercise1 = (a,b) =>{
    if (a<b){
        return a;
    }
    if (a===b){
        return a;
    }
    else return b;
}
console.log(exercise1(4,8))

//№2
function exercise2(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}
console.log(exercise2(12))

//№3
function exercise31(a){
  return  a**2;

}
console.log(exercise31(3))


function exercise32(a){
   let square = a**2;
   return square;
}
console.log(exercise32(5))

//№4

function exercise4() {
    const age =prompt('сколько вам лет?') 
   if (age < 0) {
    alert('Вы ввели неправильное значение');
  } 
  else if (age >=0  && age <=12) {
    alert('Привет, друг!');
  } 
  else if (age >= 13) {
    alert('Добро пожаловать!');
  }
}
exercise4() 

//№5

function validateAndSum(a, b) {
  // Преобразуем входные данные в числа
  const num1 = Number(a);
  const num2 = Number(b);

  // Проверяем, не является ли результат преобразования NaN
  if (isNaN(num1) || isNaN(num2)) {
    return 'Ошибка: один или оба параметра не являются корректными числами';
  }

  // Если всё хорошо, возвращаем результат (например, сумму)
  return `Числа корректны: ${num1} и ${num2}. Сумма: ${num1 + num2}`;
}

// Примеры вызова:
console.log(validateAndSum(10, "20"));    // Сработает (строка станет числом)
console.log(validateAndSum("текст", 5)); // Выдаст ошибку


//№6

function checkAndCube() {
    let input = prompt("Введите число:");
    
    // Проверка: пустая строка, строка с пробелами или не число
    if (input === null || input.trim() === "" || isNaN(Number(input))) {
        return 'Переданный параметр не является числом';
    }

    let n = Number(input);
    let cube = Math.pow(n, 3); // или n ** 3

    return `${n} в кубе равняется ${cube}`;
}

// Функция для автоматической проверки работы алгоритма (от 0 до 10)
function testCube() {
    for (let i = 0; i <= 10; i++) {
        let result = i ** 3;
        console.log(`${i} в кубе равняется ${result}`);
    }
}

// Вызов функции с вводом
console.log(checkAndCube());
testCube();



// 
function getCircleArea() {
   // Используем 'this' для обращения к свойствам 'radius' 
   return 3.14*this.radius**2  ;
}
function getCirclePerimeter() {
   // Используем 'this' для обращения к свойствам 'radius' 
   return this.radius * 2 * 3.14 ;
}

const circle1 = {
   radius:9,

   // Используем функции, объявленные выше, как методы объекта
   getArea: getCircleArea,
   getPerimeter: getCirclePerimeter
};

const circle2 = {
   radius:15,   

   // Используем функции, объявленные выше, как методы объекта
 getArea: getCircleArea,
   getPerimeter: getCirclePerimeter
};

// Вызываем методы объектов
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
*/

//HW#6 Массивы

// Реализация игры №2
// function simpleArithmetic() {
//   const operators = ['+', '-', '*', '/'];
//   const a = Math.floor(Math.random() * 10) + 1;
//   const b = Math.floor(Math.random() * 10) + 1;
//   const op = operators[Math.floor(Math.random() * operators.length)];

//   let correctAnswer;
//   let task;

//   if (op === '/') {
//     // Чтобы не было дробей, делим произведение на число
//     correctAnswer = a;
//     task = `${a * b} / ${b}`;
//   } else {
//     task = `${a} ${op} ${b}`;
//     // Используем eval для быстрого вычисления правильного ответа из строки
//     correctAnswer = eval(task);
//   }

//   const userAnswer = prompt(`Решите задачу: ${task}`);

//   if (userAnswer !== null) {
//     if (Number(userAnswer) === correctAnswer) {
//       alert("Верно!");
//     } else {
//       alert(`Неверно. Правильный ответ: ${correctAnswer}`);
//     }
//   }
// }

// //№1
// const numbs = [1, 5, 4, 10, 0, 3];

// for (const num of numbs) {
//   console.log(num);
//   if (num === 10) {
//     break;
//   }
// }

// //№2
// console.log(numbs.indexOf(4));

// //№3
// const nmb = [1, 3, 5, 10, 20];
// const joinExample = nmb.join(' ');

// console.log(joinExample);

// //№4
// const matrix = Array(3).fill().map(() => Array(3).fill(1));

// console.log(matrix); 


// //№5
// let pushing = [1,1,1];
// pushing.push(2,2,2)

// console.log(pushing);

// //№6
// let del = [9, 8, 7, 'a', 6, 5];
// delSort = del.sort();
// console.log(delSort);

// delPop = delSort.pop();
// console.log(delSort);
// console.log(delPop);

// //№7
// let search = [9, 8, 7, 6, 5];
// let userInput = prompt('Угадай число');
// let userAnswer = Number(userInput);

// if(search.includes(userAnswer)){
    
//   alert("Угадал");
// } 
// else {
//   alert("Не угадал");
// }

// //№8
// const str = 'abcdef';
// const reversed = str.split('').reverse().join('');

// console.log(reversed); 

// //№9
// let double = [[1, 2, 3],[4, 5, 6]];
// slice = [...double[0],...double[1]];
// console.log(slice);

// //№10
// const splitExample = [2, 5, 8, 1, 9, 3, 7];
// for (let i = 0; i < splitExample.length - 1; i++) {
//   let sum = splitExample[i] + splitExample[i + 1];
//   console.log(`Сумма ${splitExample[i]} и ${splitExample[i + 1]} равна: ${sum}`);
// }

// //№11
// function getSquares(arr) {

//   return arr.map(num => num ** 2);
// }

// const input = [1, 2, 3, 4, 5];
// console.log(getSquares(input)); 

// //№12
// function getWordLengths(arr) {
  
//   return arr.map(word => word.length);
// }

// const words = ["яблоко", "банан", "киви"];
// const lengths = getWordLengths(words);

// console.log(lengths); 

// //№13
// function getNegativeNumbers(arr) {
//   return arr.filter(num => num < 0);
// }

// const example13 = [10, -5, 3, -2, 0, -11, 8];
// const negatives = getNegativeNumbers(example13);

// console.log(negatives); 

// //№14
// // 1. Создаем исходный массив из 10 случайных чисел
// const originalArray = [];
// for (let i = 0; i < 10; i++) {
//   // Генерируем число от 0 до 10 и округляем (например, до целого)
//   const randomNumber = Math.floor(Math.random() * 11);
//   originalArray.push(randomNumber);
// }

// // 2. С помощью filter() выбираем только четные значения
// const evenArray = originalArray.filter(num => num % 2 === 0);

// // 3. Выводим результаты в консоль
// console.log("Исходный массив:", originalArray);
// console.log("Массив с четными значениями:", evenArray);

// //№15
// // 1. Генерируем массив из 6 случайных чисел от 1 до 10
// const example15 = [];
// for (let i = 0; i < 6; i++) {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   example15.push(randomNumber);
// }

// // 2. Вычисляем сумму всех элементов через reduce()
// const sum = example15.reduce((accumulator, current) => accumulator + current, 0);

// // 3. Находим среднее арифметическое
// const average = sum / example15.length;

// // Вывод результатов
// console.log("Массив:", example15);
// console.log("Среднее арифметическое:", average.toFixed(2)); // Округлили до 2 знаков


// let myDate = new Date(); 
// console.log(+myDate)


//HW#7 Встроенные объекты
// реализация третьей игры
// function reverseText(){
//   const userWord = prompt('Введите слово')
//   if(userWord){
//     const reverseWord = userWord.split('').reverse().join('')
//     alert(reverseWord)
//   }
// }

// // реализация пятой игры
// // Массив вопросов и правильных ответов

// function questionAnswer () {
//   const quiz = [
//     {
//         question: "Какой цвет небо?",
//         options: ["1. Красный", "2. Синий", "3. Зеленый"],
//         correctAnswer: 2 // номер правильного ответа
//     },
//     {
//         question: "Сколько дней в неделе?",
//         options: ["1. Шесть", "2. Семь", "3. Восемь"],
//         correctAnswer: 2
//     },
//     {
//         question: "Сколько у человека пальцев на одной руке?",
//         options: ["1. Четыре", "2. Пять", "3. Шесть"],
//         correctAnswer: 2
//     }
// ];

// // Переменная для подсчета правильных ответов
// let correctCount = 0;

// // Цикл для прохода по каждому вопросу викторины
// quiz.forEach((item) => {
//     // Формируем текст сообщения: вопрос + варианты ответов с новой строки
//     const message = item.question + "\n" + item.options.join("\n") + "\n\nВведите номер ответа (1, 2 или 3):";
    
//     // Запрашиваем ответ у пользователя и преобразуем его в число
//     const userAnswer = Number(prompt(message));
    
//     // Сравниваем ответ пользователя с правильным ответом
//     if (userAnswer === item.correctAnswer) {
//         correctCount++; // Увеличиваем счетчик, если ответ верный
//     }
// });

// // Выводим финальный результат игры
// alert(`Игра окончена!\nВы правильно ответили на ${correctCount} из ${quiz.length} вопросов.`);
// }




// //№1
// const registr = 'js';
// console.log(registr.toUpperCase());

// //№2
// function filterArrayByPrefix(array, searchString) {
//   const searchLower = searchString.toLowerCase();

//   return array.filter(item => {
   
//     return item.toLowerCase().startsWith(searchLower);
//   });
// }

// const sourceArray = ['Аптека', 'Арбуз', 'Апельсин', 'Хлеб', 'Клей'];
// const prefix = 'ап';

// const result = filterArrayByPrefix(sourceArray, prefix);
// console.log(result); 

// //№3

// const exampleCeilFloor = 32.58884;
// console.log(Math.ceil(exampleCeilFloor));
// console.log(Math.floor(exampleCeilFloor));
// console.log(Math.round(exampleCeilFloor));

// //№4

// console.log(Math.max(52, 53, 49, 77, 21, 32 ))
// console.log(Math.min(52, 53, 49, 77, 21, 32 ))


// //№5
// function exampleRandomNumber() {

//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//    console.log(randomNumber)
//   }
// exampleRandomNumber()
   
// //#6
// function getRandomArray(num) {
//  const results = [];
//     const arrayLength = Math.floor(num / 2);
//     for (let i = 0; i < arrayLength; i++) {
//         const randomNum = Math.floor(Math.random() * (num + 1));
//         results.push(randomNum);
//     }
//     return results;}
// console.log(getRandomArray(10)); 
// console.log(getRandomArray(5));  

// //#7
// function getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInRange(5, 15));  

// //#8
// console.log(new Date());

// //#9

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate.toLocaleDateString('ru-RU'));

// //#10
// function formatDateTime(date) {

//     const day = date.getDate();
    
//     const month = date.toLocaleDateString('ru-RU', { month: 'long' });

//     const year = date.getFullYear();
    
//     const weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');

//     return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
// }

// const now = new Date();
// console.log(formatDateTime(now));


// HW#8 Callback, setTimeout, setInterval

// реализация игры №4

// function kniveScissorsPapper(){
//   const Games5Massive = ["камень", "ножницы", "бумага"]
//   let randomIndex = Math.floor(Math.random()*3) ;
//   let compChoice =Games5Massive[randomIndex]
//   let userChoice =  prompt('Камень, ножницы, бумага. Раз, два, три!').toLowerCase();
// if (compChoice === userChoice){
//   alert('Ничья!');}
//   else if((userChoice === "камень" && compChoice === "ножницы") || (userChoice === "ножницы" && compChoice === "бумага") || (userChoice === "бумага" && compChoice === "камень")){
//     alert('Победа!')
//   } 
//   else if((userChoice === "ножницы" && compChoice === "камень") || (userChoice === "бумага" && compChoice === "ножницы") || (userChoice === "камень" && compChoice === "бумага")){
//     alert('Поражение!')
//   }
//   else{
//     alert('Вы ввели что-то не то!')
//   }
// }

// // #1
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];
// console.log(people.sort((a,b) => a.age - b.age));


// // #2

// function isPositive(number) {
//   return number > 0;
// }
// function isMale(person) {
//   return person.gender === 'male';
// }
// function filter(arr, functionRule) {
//   let newMassive = [];
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (functionRule(item)) {
//       newMassive.push(item);
//     }
//   }
//   return newMassive;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people2 = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];
// console.log(filter(people2, isMale)); 

// // #3

// let intervalId = setInterval(() => {
//   console.log(new Date());
// }, 3000);

// setTimeout(() => {
//   clearInterval(intervalId); 
//   console.log('30 секунд прошло');
// }, 30000);

// // #4

// function delayForSecond(callback) {
//    setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// });

// // #5

// // Функция delayForSecond через 1 секунду пишет в консоль 
// // «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => {
//    setTimeout(() => {
//         sayHi('Глеб');
//     }, 1000); 
// });


// HW#9 Основы работы DOM

// №1
const headingEl = document.querySelector('.main-h1');
const hideButtonEl = document.querySelector('.hideText');

hideButtonEl.addEventListener('click', function() {
    if (headingEl.style.display === 'none') {
        headingEl.style.display = 'block';     
        hideButtonEl.textContent = 'Скрыть текст'; 
    } else {
        
        headingEl.style.display = 'none';
        hideButtonEl.textContent = 'Показать текст';
    }
});
