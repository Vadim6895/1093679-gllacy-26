var link = document.querySelector(".feedback_button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback_close");
var login = popup.querySelector("[name=name]");

var validity_form = popup.querySelector("form");
var validity_mail = popup.querySelector("[name=mail]");

var isStorageSupport = true;
var storage ="";
	try {
		storage = localStorage.getItem("login");
	}
	catch (err) {
		isStorageSupport = false;
	}

link.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("visually-hidden");
	popup.classList.add("animation");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("visually-hidden");
	popup.classList.remove("shake");
});

validity_form.addEventListener("submit", function(evt){
	if (!login.value || !validity_mail.value){
	evt.preventDefault();
	popup.classList.remove("shake");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("shake");
	console.log("Нужно ввести логин и пароль");
	}
	else {
		if (isStorageSupport) {
		localStorage.setItem("login", login.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (!popup.classList.contains("visually-hidden")) {
			popup.classList.add("visually-hidden");
			popup.classList.remove("shake");
		}
	}
});