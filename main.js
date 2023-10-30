// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
const sum = [1, 2, 3, 4, 5];
let result = 0;
for (i = 0; i < sum.length; i++) {
  result = result + sum[i];
}
console.log(result);
