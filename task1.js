/* Task 1 */

var n = +process.argv[2]; //Число
var e = +process.argv[3]; //Степень

//проверка значений входных параметров на соответсвие условиям
if ( n >= 1 && e <= 100)
{
	process.stdout.write("Значения входных параметров соответсвуют!");
}
else
{
	process.stdout.write("Значение входных данных не соответсвуют условиям задания!");
}
