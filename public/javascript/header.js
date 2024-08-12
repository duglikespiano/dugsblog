const bodyElement = window.document.body;
const languageElements = document.querySelectorAll('.language');
const themeElements = document.querySelectorAll('.theme');
const hamburgerElement = document.querySelector('.hamburger');
const modalHamburgerElement = document.querySelector('.modal-hamburger');

const switchLanguage = (element) => {
	let newURL = '';
	let URLArray = location.pathname.split('/');
	if (element.innerText === '한글') {
		URLArray[1] = 'ko';
	} else if (element.innerText === '日本語') {
		URLArray[1] = 'ja';
	} else {
		URLArray[1] = 'en';
	}
	URLArray.slice(0, 1);
	newURL = URLArray.join('/');
	window.location = newURL;
};

const switchTheme = () => {
	if (bodyElement.classList.contains('darkmode')) {
		bodyElement.classList.remove('darkmode');
	} else {
		bodyElement.classList.add('darkmode');
	}
};

languageElements.forEach((element) => {
	element.addEventListener('click', () => {
		switchLanguage(element);
	});
});

themeElements.forEach((element) => {
	element.addEventListener('click', () => {
		switchTheme();
	});
});

hamburgerElement.addEventListener('click', () => {
	hamburgerElement.classList.toggle('active');
	modalHamburgerElement.classList.toggle('active');
});
