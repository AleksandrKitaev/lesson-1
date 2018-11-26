'use strict';

let adv = document.getElementsByClassName('adv')[0],
    menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li'),
    title = document.getElementById ('title'),
    
    question = prompt("Как вы относитесь к технике Apple?" , ''),
    review = document.getElementsByClassName('prompt')[0];




menu.insertBefore(menuItem[2], menuItem[1]);
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
menu.appendChild(li);
adv.style.display = 'none';
title.innerHTML = '<h2>Мы продаем только подлинную технику Apple</h2>';
document.body.style.background = "url(./img/apple_true.jpg)";
review.textContent = question;

