//your JS code here. If required.


let counterDisplay = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');

let count = 0;

incrementBtn.addEventListener("click" , function () {
	

	count++ ;
	alert(count);

	counterDisplay.textContent =  count;
}) 
