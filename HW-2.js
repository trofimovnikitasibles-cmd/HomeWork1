//#1 
/*let a = 10;
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
*/
//HW3
//#1
// 

/*
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
*/

/*HW#4 циклы*/
/*№1*/
let i = 0;
while (i<2) {
    console.log('Привет');
    i++
}
/*№2*/
let a = 0;
while(a<6){
    console.log(a);
    a++
} 
/*№3*/
let x =7;
while (x>=7 && x<=22) {
    console.log(x);
    x++
}
/*№4*/
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let key in obj) {
  console.log(`${key} — Имя сотрудника ${obj[key]} сумма $`);
}
/*№5*/
 
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
/*№6*/
let friday = 5;
let MonthsDay = 31;
for(let day = friday; day<=31 ; day +=7){
    console.log(`Сегодня пятница,${day}-е число. Необходимо подготовить отчет.`)
}

/* доп задания
let k = 100;
let iterations = 0;
while (k -=7) {
        if(k<-7){
break;
        }
iterations++
console.log(k)
console.log(iterations)
} */


/*HW#5 функции*/

function guessTheNumber() {
    prompt(`Угадай число от 1 до 100`)
    
}

/*№1*/
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

/*№2*/
function exercise2(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}
console.log(exercise2(12))

/*№3*/
function exercise31(a){
  return  a**2;

}
console.log(exercise31(3))


function exercise32(a){
   let square = a**2;
   return square;
}
console.log(exercise32(5))

/*№4*/

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

/*№5*/

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


/*№6*/

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
