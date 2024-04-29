const payRateUsd = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Соклько я хочу получить? ' + (payRateUsd * projectHours))