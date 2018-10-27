/*

1) Собрать результаты n интераций и поместить их в массив numbers[]
2) Вычислить сколько раз было получено то или иное число и вывести результаты:
Выпадений числа n: число раз;
Алгоритм:
У нас есть массив чисел, необходимо выяснить сколько раз в нем встречается то или 
иное целое число, из диапазона max - min
10, 11, 12 ... 19, 20
Проверяемое число пусть будет checkingNumber
Если checkingNumber == numbers[i]

*/

let min = 10;
let max = 20;
let numbers = [];
let checkingRange = [];
let iterations = 1000000;

for (let i = 0; i < iterations; i++) {
    let result;
    result = Math.round(Math.random() * (max - min) + min);
    numbers.push(result);
}

for (let i = max - min; i <= max; i++) {
    checkingRange.push(i);
}
console.log(checkingRange);

for (let i = 0; i < checkingRange.length; i++) {
    let matches = 0;

    for (let j = 0; j <= numbers.length; j++) {
        if (checkingRange[i] == numbers[j]) {
            matches++;
        }
    }
    let resultMessage = 'Выпадений числа ' + checkingRange[i] + ': ' + matches + ' раз;';
    console.log(resultMessage);
    $("#results").append(resultMessage + "<br>");
}