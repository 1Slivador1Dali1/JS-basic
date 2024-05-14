// const payRateUsd = 80;
// const projectHours = 40;
// const availableHours = (11 - 2) * 5;

// console.log('Смогу ли я работать? ' + (availableHours > projectHours));
// console.log('Соклько я хочу получить? ' + (payRateUsd * projectHours))

// const allSum = 12000;
// const oneYeInMo = 24;
// const dep = 0.07;
// const priceHouse = 13500;

// const itog = allSum * (1 + dep / 12) ** oneYeInMo;

// if (itog > priceHouse) {
//     console.log('Может купить ' + 'Остаток: ' + (itog - priceHouse));
// }
// else {
//     console.log('Не сможет купить');
// }

// const vvediet = prompt('7 + или - 15');

// switch (true) {
//     case Number(vvediet) === 22:
//     case Number(vvediet) === -8:
//     case vvediet === 'Я не робот':
//         console.log('Успех');
//         break;
//     default:
//         console.log('Вы робот!');
//         break;
// }

// const balance = 1200;
// const bonusBalance = 90;
// const isBanned = false;
// const isExist = false;
// const isSalling = true;

// const canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSalling;

// console.log(`Могу ли я купить игру: ${canBuy ? 'Да' : 'Нет'}`);

// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 3));

// function computerCredit(age, hasJob = false) {
//     switch (true) {
//         case age > 24 && hasJob:
//             return 500;
//         case age > 24:
//             return 100;
//         default:
//             return 0;
//     }
// }

// function canBuy(productPrice, age, money, hasJob = false) {
//     const crediMoney = computerCredit(age, hasJob);
//     return productPrice <= money + crediMoney;
// }

// console.log(canBuy(2000, 27, 1900));


// const tasks = ['Задача 1'];

// function Add(task) {
//     tasks.push(task);
// }

// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     tasks.splice(index, 1);
// }

// function Prioritize(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     const oldTask = tasks[index];
//     tasks.splice(index, 1);
//     tasks.unshift(oldTask);
// }

// console.log(tasks);


// Add('Задача 2');
// Add('Задача 3');
// console.log(tasks);

// Remove('Задача 2');
// console.log(tasks);

// Prioritize('Задача 3');
// console.log(tasks);

//------------------------------------------------------------------

// Циклы

// for( let index = 0; index < 10; index+=2) {
//     console.log(index);
// }

//------------------------------------------------------------------

// ex 51

// const arr = ['!', 'JS', 'Люблю', 'Я'];
// const newArr = [];

// for(let i = (arr.length - 1); i >= 0; i--) {
//     newArr.push(arr[i]);
// }

// console.log(newArr.join(" "));

//------------------------------------------------------------------

// ex 59 - Стрелочные функции

// function power (pow) {
//     return function (num) {
//         return num**pow;
//     }
// } //Обычная функция с функцией высшего порядка

// const power = pow => num => num**pow; //Стрелочная функция

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));

// const powerOfThree = power(3);
// console.log(powerOfThree(5));

//------------------------------------------------------------------