'use strict';

let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money =+prompt("Ваш бюджет на месяц?", '' );
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {} ,
    optionalExpenses: {},
    income:[] ,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;    
            } else {
                alert("Ответы некорректны");
                i--;
            }
        } 
    },
    detectDayBudget: function () {
        appData.detectDayBudget = appData.budget / 30;
        alert("Ежедневный бюджет: " + appData.detectDayBudget);
    },
    detectLevel: function () {
        if(appData.detectDayBudget < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.detectDayBudget > 100 && appData.detectDayBudget < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.detectDayBudget > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                persent  = +prompt ("Под какой процент?");
            
                appData.monthIncome = save/100/12*persent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let cost = prompt("Статья необязательных расходов?", '');
    
            if ( (typeof(cost))=== 'string' && cost != null && cost != '') {
                    appData.optionalExpenses[i + 1] = cost;
            } else {
                alert("Ответ не корректен");
                i--;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

            if ((typeof(items)) === 'string' && items != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                alert("Ответ не корректен");
                i--;
            }
        }
            console.log("Способы дополнительного заработка: ");
        appData.income.forEach(function(item, i, income) {
            console.log((i + 1) + ' : ' + item);
        });         
    },

        

    
};

console.log("Наша программа включает в себя: ");
for (let key in appData) {
    console.log(key)
}