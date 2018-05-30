var 
	t2 = +process.argv.pop(), 
	t1 = +process.argv.pop();

if ( ( t1 >= 1	&& t1 <= 100000) || ( t2 >= 1	&& t2 <= 100000)
{
	var sum = t1 + t2; 
	var h, m, s;
	s = sum % 60;
	m = Math.floor(sum / 60);
	h = Math.floor(m / 60);
	m = m % 60;
	
	process.stdout.write(h + " часов " + m + " минут " + s " секунд");
	
}
else
{
	process.stdout.write("Входные данные не соответвуют условию!");
}
