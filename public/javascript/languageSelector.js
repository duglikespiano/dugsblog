const languageElements = document.querySelectorAll('nav > ul > li > a');

const languageSelector = (element) => {
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

languageElements.forEach((element) => {
	element.addEventListener('click', () => {
		languageSelector(element);
	});
});
