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

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));