/* Task 1 */

var n = +process.argv[2]; //Число
var e = +process.argv[3]; //Степень


if ( n >= 1 && e <= 100) //проверка значений входных параметров на соответсвие условиям
{
	// вычисление суммы от 1 до n в степени e
	var sumN = 0;
	for (var i = 1; i <= n; i++)
	{
		sumN = sumN + Math.pow(i, e);
	}
	process.stdout.write("Результат: " + sumN);
}
else
{
	process.stdout.write("Значение входных данных не соответсвуют условиям задания!");
}
