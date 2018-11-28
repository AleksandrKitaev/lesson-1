
let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');





let money, time;
let countOrder = false;

startBtn.addEventListener('click' , function() {
     time = prompt('Введите дату в формате YYYY-MM-DD', '');
     money = +prompt("Ваш бюджет на месяц?", '');

     while (isNaN(money) || money == '' || money == null) {
         money = prompt("Ваш бюджет?", "");
     }
     countOrder = true;
     appData.budget = money;
     appData.timeData = time;
     budgetValue.textContent = money.toFixed();
     yearValue.value = new Date(Date.parse(time)).getFullYear();
     monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
     dayValue.value = new Date(Date.parse(time)).getDate();
 });

 expensesBtn.addEventListener('click', function() {
  if (countOrder == true && expensesItem[0].value != "" && expensesItem[1].value != "" && expensesItem[2].value != "" && expensesItem[3].value != "") {
     let sum = 0;

     for (let i = 0; i < expensesItem.length; i++) {
         let a = expensesItem[i].value,
             b = expensesItem[++i].value;
    
         if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
             && a != '' && b != '' && a.length < 50) {
             console.log("done");
             appData.expenses[a] = b;
             sum += +b;    
        } else {
             alert("Ответы некорректны");
             i--;
        }
    }
     expensesValue.textContent = sum;
  }
 });

optionalExpensesBtn.addEventListener('click', function() {
    if (countOrder == true && optionalExpensesItem[0].value != "" && optionalExpensesItem[1].value != "" && optionalExpensesItem[2].value != "" ) {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let cost = optionalExpensesItem[i].value;
                
        if ( (typeof(cost))=== 'string' && cost != null && cost != '') {
                appData.optionalExpenses[i + 1] = cost;
                optionalExpensesValue.textContent += appData.optionalExpenses[i + 1] + ' ';    
        } else {
            alert("Ответ не корректен");
            i--;
        }
    }
 }
});

countBtn.addEventListener('click', function() {
    if (countOrder == true &&  expensesItem[1].value != ""  && expensesItem[3].value != "") {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - (expensesItem[1].value + expensesItem[3].value)) / 30).toFixed(); 
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.budget < 100) {
           levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.budget > 100 && appData.budget < 2000) {
           levelValue.textContent = "Средний уровень достатка";
        } else if (appData.budget > 2000) {
           levelValue.textContent = "Высокий уровень достатка";
        } else {
           levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
}
    
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (countOrder == true) {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
}
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue/addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {} ,
    optionalExpenses: {},
    income:[] ,
    savings: false,
    
    
};

console.log("Наша программа включает в себя: ");
for (let key in appData) {
    console.log(key)
}

console.log(expensesItem[1]);
console.log(expensesItem[3]);