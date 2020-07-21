/*Задание 1 
Выведите числа от 1 до 50 и от 35 до 8.*/

console.log ('задание 1 числа от 1 до 50');

for(let i = 1; i <= 50; i++) {
    console.log(i);
}

console.log ('задание 1 числа от 35 до 8');

for(let i = 35; i >= 8; i--) {
    console.log(i);
}


/*Задание 2 
Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> 
друг от друга, чтобы получить столбец.*/

document.write('Задание 2 <br>');

let f = 89;
while (f >= 11) {
    document.write(f, '<br>');
    f--;
}

/*Задание 3 
С помощью цикла найдите сумму чисел от 0 до 100.*/

console.log('Задание 3');

let summ = 1;
for(let i = 1; i <= 100; i++) {
    summ += i;
}
console.log('Сумма чисел числа 100 равна', summ);

/*Задание 4 
Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).*/

console.log('Задание 4');

let a = 5;
let sum = 0;

for (let i = 1; i <= a; i++) {
    sum = 0;

    for (let j = 1; j <= i; j++) {
        sum += j;
    }
    console.log('Сумма чисел числа', i ,'равна', sum);
}

/*Задание 5 
Выведите чётные числа от 8 до 56. Решить задание через while и for.*/ 
 
console.log('Задание 5');

console.log('Через цикл for');

for (let p = 8; p <= 56; p++) {
    if (p % 2 != 0) continue;
    console.log(p);

}

console.log('Через цикл while');

let w = 8;
while (w <= 56) {
    if ( w % 2 == 0) {
    console.log(w); }
    w++;
}


/*Задание 6 
Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2=4
2*3=6
2*4=8

3*1=3
3*2=6
3*3=9
3*4=12*/

console.log('Задание 6');

let g;
let q;
for(g = 2; g <= 3; g++) {
    for(q = 1; q <= 10; q++ ) {
        console.log(' ', g , ' * ' , q , ' = ', q * g);
    }
}

/* Задание 7. 
Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.*/

console.log('Задание 7');

let num = 0;
let n;

for (n = 1000; n > 50; n /= 2) {
    num++;
    console.log(n);
}
console.log('Число итераций:', num);

/*Задание 8  
Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
1. общую сумму
2. среднее арифметическое введённых чисел

Если пользователь ввел не число, то вывести 

3. сообщение об ошибке ввода. 

При подсчете учесть, что пользователь может ввести отрицательное значение.*/

console.log('Задание 8');

let summa = 0;
let answ;

for(i = 0; answ = +prompt('введите число для задания 8. ваше число:'); i++) {
    if(isNaN(answ)) {
        alert('введен текст, введи число:');
        break;
    }
    if(answ == 0 || answ == '') break;
    summa = summa + answ;
}
console.log('сумма введенных чисел =', summa);
console.log('средн. арифм. введенных чисел =', summa / i );

/*Задание 9. 
Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

console.log('Задание 9');

let strNumbers = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let number = '',
    numberCounter = 0,
    min,
    max;

for (let i = 0; ; i++) {
    if (strNumbers[i] == undefined) break;

    if (strNumbers[i] != ' ') {
        number += strNumbers[i];
    } else {

        if (numberCounter == 0) {
            min = number;
            max = number;
        }

        numberCounter++;

        if (min > +number) min = +number;
        if (max < +number) max = +number;

        number = '';
    }
}

console.log ('min: ', min);
console.log ('max: ', max);

/*Задание 10. 
Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.*/

console.log('Задание 10');

let k = prompt('Введите число для задания 10');
    kString = String(k),
    countNumbers = 0,
    summNumbers = 0;

for (let i = 0; ; i++) {
    if (kString[i] == undefined) {
        countNumbers = i;
        break;
    }

    console.log ('a', kString[i]);

    summNumbers += +kString[i];
}

console.log('b countNumbers ', countNumbers);
console.log('c summNumbers ', summNumbers);

for (let i = countNumbers-1; i >=0; i--) {
    console.log ('d', kString[i]);
}