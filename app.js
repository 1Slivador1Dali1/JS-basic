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

// const arr = [1, 4, 4, 10];

// const avg = arr.reduce((acc, el, i) => {
//   if (i != arr.length - 1) {
//     return acc + el;
//   } else {
//     return (acc + el) / arr.length;
//   }
// }, 0);

// console.log(avg);

//------------------------------------------------------------------

// ex 66 - find findindex

// const arr = [2, 4, 4, 10];

// let elGT5;
// for (const el of arr) {
//   if (el > 5) {
//     elGT5 = el;
//     break;
//   }
// }
// console.log(elGT5);

// elGT5 = arr.find((el) => el > 5);
// console.log(elGT5);

// elGT5 = arr.findIndex((el) => el < 0); // если элем нет то возвращает -1 а не undefined
// console.log(elGT5);
//------------------------------------------------------------------

// ex 67 - упр

// const arr = [2, 4, 4, 10];

// function some(array, element) {
//   const res = array.find((el) => el === element);
//   return res == undefined ? false : true;
// }

// console.log(some(arr, 2));
// console.log(arr.some((el) => el === 0));
//------------------------------------------------------------------

// ex 68 - flat flatMap

// const prices = [
//   [2, 4],
//   [3, 4],
//   [10, [20, 50]],
// ];

// const res = prices.flat(2); // принимает значение на глубину
// console.log(res);
// const res2 = prices.flatMap((el) => el.concat([1]));
// console.log(res2);

//------------------------------------------------------------------
// ex 69 - sort

// const users = ["Вася", "Маша", "Катя", "Аня"];
// console.log(users);
// users.sort();
// console.log(users);

// const operations = [100, -300, -100, 50, 480];
// console.log(operations);
// operations.sort();
// console.log(operations); // без параметра сорт как строки

// // < 0 - a , b - сохраняем порядок
// // > 0 - a, b - меняем порядок

// operations.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
// console.log(operations);

// operations.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
// });
// console.log(operations);

//------------------------------------------------------------------
// ex 70 - Быстрое создание массива

// const arr = [1, 2, 3, 4, 5];

// console.log(new Array(1, 2, 3, 4, 5));

// const arr2 = new Array(5);
// console.log(arr2);

// arr2.fill(1, 0, 3);
// arr2.fill(2, 3, 5);
// console.log(arr2);

// const arr3 = Array.from({ length: 5 }, () => 5);
// console.log(arr3);

// const arr4 = Array.from({ length: 5 }, (cur, i) => i + 1);
// console.log(arr4);

//------------------------------------------------------------------
// ex 72 - строки базовые методы

// const userName = "Vlad slav";
// console.log(userName[0]);
// console.log(userName[8]); // эмодзи занимают 2 буквы
// console.log(userName.charAt(2));
// console.log(userName.length);

// console.log(userName.indexOf("l"));
// console.log(userName.indexOf("v"));
// console.log(userName.toLowerCase().indexOf("v"));
// console.log(userName.lastIndexOf("a"));
// console.log(userName.includes("s"));

// console.log(userName.slice(5));
// console.log(userName.slice(5, 7));
//------------------------------------------------------------------
// ex 73 - упр

// const userName = "Вася aka Terminator Пупкин";
// //Мое решение
// const arr = userName.split(" ");
// console.log(arr);
// const name = arr[0];
// const lastName = arr[arr.length - 1];
// console.log(name);
// console.log(lastName);

// //решение автора
// const name2 = userName.slice(0, userName.indexOf(" "));
// console.log(name2);
// const lastName2 = userName.slice(
//   userName.lastIndexOf(" ") + 1,
//   userName.length
// );
// console.log(lastName);

//------------------------------------------------------------------

// ex 74 - Преобразование строки

// const str = "Вася Пупкин";
// console.log(str.includes("п"));
// console.log(str.startsWith("В")); //Проверяет начинается ли строка на эту букву
// console.log(str.endsWith("н")); //Заканчивается ли строка на эту букву
// // Данные методы (выше) возвращают булевы значения

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.replace("П", "В"));
// console.log(str.replaceAll("п", "и"));
// // методы выше не изменяют изначальную строку а создают новую

//------------------------------------------------------------------

// ex 75 -упр
// //верные
// const num1 = "89103235356";
// const num2 = "+79103235356";
// const num3 = "+7(910)3235356";
// const num4 = "+7(910) 323-53-56";
// const num5 = " +7(910) 323-53-56 ";
// //не верные
// const num1Error = "89103235";
// const num2Error = "+7d910d323-53-56";
// const num3Error = "9+7103235356";
// const num4Error = "89103g235356";

// function isPhoneNumber(num) {
//   num = num.trim(); // Убирает пробелы по бокам
//   num = num.replace("+7", "8"); //Заменяет одно на другое
//   if (!num.startsWith("8")) {
//     //Если начинается НЕ с 8 то возвращаем false
//     return false;
//   }
//   // удаляем символы и пробелы ниже
//   num = num.replaceAll("(", "");
//   num = num.replaceAll(")", "");
//   num = num.replaceAll(" ", "");
//   num = num.replaceAll("-", "");

//   //Проверяем на длину номера
//   if (num.length != 11) {
//     return false;
//   }

//   let onlyNumber = true;
//   for (const char of num) {
//     if (isNaN(Number(char))) {
//       onlyNamber = false;
//       break;
//     }
//   }

//   return onlyNumber;
// }

// console.log(isPhoneNumber(num1));
// console.log(isPhoneNumber(num2));
// console.log(isPhoneNumber(num3));
// console.log(isPhoneNumber(num4));
// console.log(isPhoneNumber(num5));

// console.log(isPhoneNumber(num1Error));
// console.log(isPhoneNumber(num2Error));
// console.log(isPhoneNumber(num3Error));
// console.log(isPhoneNumber(num4Error));

//------------------------------------------------------------------

// ex 76 -Строки и массивы

// const userName = "Вася Пупкин";
// console.log(userName.split(" "));
// // Деструктуризация (destructuring assignment) – это особый синтаксис присваивания,
// // при котором можно присвоить массив или объект сразу
// // нескольким переменным, разбив его на части. показано ниже
// const [firstName, lastName] = userName.split(" ");
// console.log(firstName);
// console.log(lastName);
// // из массива в строку
// const arr = ["Ты", "знаешь", "JS"];
// console.log(arr.join(" "));

//------------------------------------------------------------------

// ex 77 -Дополнение строк

// const film = "Звездные войны";
// console.log(film.padStart(10, "*"));
// console.log(film.padEnd(2, "*"));
// console.log(film.repeat(5));

//------------------------------------------------------------------

// ex 78 -упр

// const card = "2342834503458353";

// console.log(card.slice(-4).padStart(16, "*"));

//------------------------------------------------------------------

// ex 79 -Знакомство с объектами

// const userArray = ["Вася", "Пупкин", 24];
// console.log(userArray);

// const userObject = {
//   firstName: "Вася",
//   lastName: "Пупкин",
//   age: 24,
// };

// console.log(userObject);
// console.log(typeof userObject);

//------------------------------------------------------------------
// ex 80 -Обращение к элементам
//------------------------------------------------------------------
// ex 81 -упр
//------------------------------------------------------------------
// ex 82 -упр
//------------------------------------------------------------------
// ex 83 -Методы объектов
//------------------------------------------------------------------
// ex 84 -упр
//------------------------------------------------------------------
// ex 85 -Enhance object literals
//------------------------------------------------------------------
// ex 86 -Итерирование по объекту
//------------------------------------------------------------------
// ex 87 -Деструктуризация и rest
//------------------------------------------------------------------
// ex 88 -Optional chaining
//------------------------------------------------------------------
// ex 89 -упр
//------------------------------------------------------------------
