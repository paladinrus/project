//const hamburger = 0,
  //    fries = 0,
    //  cola = 0;


console.log(hamburger === 3 && cola && fries);

//Оператор И всегда возвращает первое ложное значение, если оно есть, на нем он запинается и его он возвращает и дальше код уже не идет 
//Если все аргументы верны, код дошел до конца, то возвращается значение последнего аргумента

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'gchghfghfg');



if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим!');
}

if (hamburger || cola || fries) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим!');
}
//возвращает последнее ложное значение
//возвращает первую правду
console.log(hamburger || cola || fries);


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);




const hamburger = 3,
      fries = 3,
      cola = 0,
      nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
console.log('Все довольны');
} else {
console.log('Мы уходим!');
}
// вернет 2
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

//не
console.log(!0);