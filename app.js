// const payRateUsd = 80;
// const projectHours = 40;
// const availableHours = (11 - 2) * 5;

// console.log('Смогу ли я работать? ' + (availableHours > projectHours));
// console.log('Соклько я хочу получить? ' + (payRateUsd * projectHours))

const allSum = 12000;
const oneYeInMo = 24;
const dep = 0.07;
const priceHouse = 13500;

const itog = allSum * (1 + dep / 12) ** oneYeInMo;

if (itog > priceHouse) {
    console.log('Может купить ' + 'Остаток: ' + (itog - priceHouse));
}
else {
    console.log('Не сможет купить');
}