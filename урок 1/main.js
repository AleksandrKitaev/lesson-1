'use strict';


let money = prompt("Ваш бюджет на месяц?", '');
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD", '');
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {} ,
    optionalExpenses: {},
    income:[] ,
    savings: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце", '');
appData.expenses[question1] = prompt("Во сколько обойдется?", '');

let question2 = prompt("Введите обязательную статью расходов в этом месяце", '');
appData.expenses[question2] = prompt("Во сколько обойдется?", '');

console.log(appData);


alert(money / 30);