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

// ex 61 - map

// const transactionInUSD = [10, -7, 50, -10, 100];

// const transactionInRub = [];
// for (const transaction of transactionInUSD) {
//   transactionInRub.push(transaction * 100);
// }

// console.log(transactionInUSD);
// console.log(transactionInRub);

// const transactionInRub2 = transactionInUSD.map((transaction) => {
//   return transaction * 100;
// });

// console.log(transactionInUSD);
// console.log(transactionInRub2);

// const transactionInRub3 = transactionInUSD.map(
//   (transaction) => transaction * 100
// );

// console.log(transactionInUSD);
// console.log(transactionInRub3);

//------------------------------------------------------------------

// ex 62 - filter

// const operations = [100, -20, 7, -20, 50];
// const positiveOperations = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperations.push(operation);
//   }
// }

// console.log(positiveOperations);

// const positiveOperations2 = operations.filter((operation) => {
//   return operation > 0;
// });
// console.log(positiveOperations2);

// const positiveRUBOperations = operations
//   .filter((operation) => {
//     return operation > 0;
//   })
//   .map((operation) => operation * 100);

// console.log(positiveRUBOperations);

//------------------------------------------------------------------

// ex 63 - упр

// const prices = [
//   [100, 200],
//   [120, 100],
//   [200, 350],
// ];
// не правильно
// const posiriveChange = prices
//   .filter((res, x, y, i) => {
//     res = prices[i][y] - prices[i][x];
//     return res;
//   })
//   .map((res) => res > 0);
// console.log(posiriveChange);

// верно
// const res = prices
//   .map((product) => product[1] - product[0])
//   .filter((price) => price > 0);
// console.log(res);

//------------------------------------------------------------------

// ex 64 - reduce

// const operations = [100, -20, 7, -30, 50];

// let balance = 0;

// for (operation of operations) {
//   balance += operation;
// }

// console.log(balance);

// const finalBalance = operations.reduce((acc, operation) => {
//   return (acc += operation);
// }, 0);

// console.log(finalBalance);

//------------------------------------------------------------------

// ex 65 - упр

const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, el, i) => {
  if (i != arr.length - 1) {
    return acc + el;
  } else {
    return (acc + el) / arr.length;
  }
}, 0);

console.log(avg);

//------------------------------------------------------------------

// ex 66 - find findindex

//------------------------------------------------------------------

// ex 67 - упр
