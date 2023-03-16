var a = 0;
var b = 1;

function now() {
	document.getElementById("pole").innerHTML = "Manual image slider's counter value: " + a;
}

function plus() {
	a = a + b;
	document.getElementById("pole").innerHTML = "Manual image slider's counter value: " + a;
	if (a == 1) {
		document.getElementById("imgGp").style.right = "900px";
	}
	else if (a == 0) {
		document.getElementById("imgGp").style.right = "450px";
	}
	else if (a == -1) {
		document.getElementById("imgGp").style.right = "0px";
	}
	/*Limit:*/ /*Aby cyfry nie były dodawane ponad liczbę obrazów, by nie zepsuć funkcji prawodłowego porównywania wartości po klikaniu strzałek.*/
	else if (a == 2) {
		a = a - b; /*(a+b-b) = (a+0)*/
		document.getElementById("pole").innerHTML = "Manual image slider's counter value: " + a;
		alert("Next you haven't pictures, so your clicking won't do you any good.");
	}
	/*Komunikat błędu*/
	else {
		alert("Error occured. Refresh the page, and if that doesn't help, contact the website author.");
	}
}

function minus() {
	a = a - b; /*-1*/
	document.getElementById("pole").innerHTML = "Manual image slider's counter value: " + a;
    if (a == 1) {
		document.getElementById("imgGp").style.right = "900px";
	}
	else if (a == 0) {
		document.getElementById("imgGp").style.right = "450px";
	}
	else if (a == -1) {
		document.getElementById("imgGp").style.right = "0px";
	}
	/*Limit:*/ /*Aby cyfry nie były dodawane ponad liczbę obrazów, by nie zepsuć funkcji prawodłowego porównywania wartości po klikaniu strzałek.*/
	else if (a == -2) {
		a = a + b; /*(a-b+b) = (a+0)*/
		document.getElementById("pole").innerHTML = "Manual image slider's counter value: " + a;
		alert("Next you haven't pictures, so your clicking won't do you any good.");
	}
	/*Komunikat błędu*/
	else {
		alert("Error occured. Refresh the page, and if that doesn't help, contact the website author.");
	}
}