const pass1 = document.querySelector("#pwd");
const pass2 = document.querySelector("#pwdVerified");
const message = document.querySelector("#formmessage");
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

pass2.addEventListener("focusout", checkPassword);

function checkPassword() {
	if (pass1.value !== pass2.value) {
		message.textContent = "❗Password DO NOT MATCH!";
		message.style.visibility = "show";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
	}
}


range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
