// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// const sum = [1, 2, 3, 4, 5];
// let result = 0;
// for (i = 0; i < sum.length; i++) {
//   result = result + sum[i];
// }
// console.log(result);

// 2) Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// const sum = [-1, 2, -3, 4, 5];
// let result = 0;
// for (i = 0; i < sum.length; i++) {
//   if (sum[i] > 0) result = result + sum[i];
// }
// console.log(result);

// 3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным
// 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// const sumArr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < sumArr.length; i++) {
//   if (sumArr[i] === 4) {
//     console.log("Есть");
//     break;
//   }
// }
// 4) Дан массив с элементами ['Привет, ', 'мир', '!']. Необходимо записать в переменную text фразу 'Привет, мир!',
// а затем вывести на экран содержимое этой переменной.
// const HelloArr = ["Привет, ", "мир", "!"];
// let text = `${HelloArr[0]}${HelloArr[1]} ${HelloArr[2]}`;
// console.log(text);
// 5) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const a = ["a", "b", "c"];
// const b = [1, 2, 3];
// const c = a + "," + b;
// console.log(c);
// 6) Дан массив ['a', 'b', 'c']. Добавьте ему в начало элементы 1, 2, 3. И отдельно добавьте в конец массива 1,2,3
// const a = ["a", "b", "c"];
// a.unshift(1, 2, 3);
// a.push(1, 2, 3);
// console.log(a);
// 7) Создайте массив ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
const a = ["a", "b", "c", "d"];
let b = `${a[0]}+${a[1]}, ${a[2]}+${a[3]}`;
console.log(b);
