var login = prompt('Кто пришел?');
if (login == 'Админ') {
	isAdmin();
} else if (login === null) {
	alert('Вход отменен');
} else {
	alert('Я вас не знаю');
}

function isAdmin() {
	var pass = prompt('Пароль?');
	if (pass == 'Черный Властелин') {
		alert('Добро пожаловать!');
	} else if (pass === null) {
		alert('Вход отменен');
	} else {
		alert('Пароль неверен');
	}
}
