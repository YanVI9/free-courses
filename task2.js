/* Task 2 */

// Получение входных параметров
var inputStr = process.argv[2];
var shift = +process.argv[3];

if ( (inputStr.length >= 1 &&  inputStr.length <= 10000) || ( shift >= 0 && shift <= 10000 ))
{
	var outputStr = "";
	for (var i = 0; i < inputStr.length; i++)
	{
		var charCod = inputStr[i].charCodeAt(0); //Получаем код символа из строки
		outputStr = outputStr + String.fromCharCode(charCod + shift); //Добавляем к результату смещенный символ
	}
}
else
{
	process.stdout.write("Значение входных параметров не соответсвуют условиям");
}

process.stdout.write(outputStr);


