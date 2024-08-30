const getColor =()=>{

	const randomNumber = Math.floor(Math.random()*16777215)
const randomCode = "#"+randomNumber.toString(16)
console.log(randomCode);
console.log(randomNumber);
document.body.style.backgroundColor=randomCode
	let h5= document.getElementById("color-code");
h5.innerText=randomCode;
navigator.clipboard.writeText(randomCode);

}
document.getElementById("btn").addEventListener(
	"click",
	getColor
)

getColor();