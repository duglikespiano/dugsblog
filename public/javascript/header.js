const bodyElement = document.body;
const languageElements = document.querySelectorAll('.language');
const themeElements = document.querySelectorAll('.theme');
const hamburgerElement = document.querySelector('.hamburger');
const modalHamburgerElement = document.querySelector('.modal-hamburger');
const localStorageDarkmodeKeyName = 'dugsblog-darkmode';

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
	location = newURL;
};

const switchTheme = () => {
	if (bodyElement.classList.contains('darkmode')) {
		bodyElement.classList.remove('darkmode');
		localStorage.setItem(localStorageDarkmodeKeyName, 'false');
		bodyElement.style.transition = 'background-color 0.5s, color 0.5s';
	} else {
		bodyElement.classList.add('darkmode');
		localStorage.setItem(localStorageDarkmodeKeyName, 'true');
		bodyElement.style.transition = 'background-color 0.5s, color 0.5s';
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

if (!localStorage.getItem(localStorageDarkmodeKeyName)) {
	if (matchMedia('(prefers-color-scheme: dark)').matches) {
		bodyElement.classList.add('darkmode');
	}
} else if (localStorage.getItem(localStorageDarkmodeKeyName)) {
	if (localStorage.getItem(localStorageDarkmodeKeyName) === 'false') {
		bodyElement.classList.remove('darkmode');
	} else if (localStorage.getItem(localStorageDarkmodeKeyName) === 'true') {
		bodyElement.classList.add('darkmode');
	}
}
