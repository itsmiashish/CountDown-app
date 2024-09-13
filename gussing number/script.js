const min = 1;
const max = 10;
let secNumber = Math.floor(Math.random()*(max-min+1))+min;
let gusss = 0;
let hin = '';
let number = 0;
do{
	let input =  prompt(`enter number between ${min} and ${max}` + hin);
	number = parseInt(input);
	gusss++;
	if(number>secNumber)
	{
		hin = ', and less than '+number;
	}
	else if (number<secNumber)
	{
	hin =', and gretaerthan'+number;
	}
	else if (number == secNumber)
	{
		alert(` Brovo! you're correct after ${gusss}`);
		}

}while(number!=secNumber);