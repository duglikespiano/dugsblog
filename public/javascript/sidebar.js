const header = document.querySelector('header');
console.log(window.matchMedia('(prefers-color-scheme: dark)'));
console.log(window.matchMedia('(prefers-color-scheme: light)'));
console.log(window.matchMedia('(prefers-color-scheme: no-preference)'));
console.log(header);

if (window.matchMedia('(prefers-color-scheme: dark)')) {
	// document.querySelector('body').classList.add('dark');
}

const articleCategory = [
	{
		url: 'japanese',
		title: {
			en: 'japanese',
			ko: '일본어',
			ja: '日本語',
		},
	},
	{
		url: 'dailylives',
		title: {
			en: 'dailylives',
			ko: '일상',
			ja: '日常',
		},
	},
];
const currentURL = location.pathname;
const categoriesElement = document.querySelector('.categories');

const createCategoryElements = (category, language) => {
	const categoryElement = document.createElement('li');
	const linkElement = document.createElement('a');
	const linkURL = `${currentURL.split('/')[0]}/${currentURL.split('/')[1]}/${category.url}`;
	linkElement.innerText = category.title[language];
	linkElement.setAttribute('href', linkURL);
	categoryElement.appendChild(linkElement);
	categoriesElement.appendChild(categoryElement);
};

if (currentURL.split('/')[1] === 'en') {
	const language = 'en';
	articleCategory.forEach((category) => {
		createCategoryElements(category, language);
	});
} else if (currentURL.split('/')[1] === 'ko') {
	const language = 'ko';
	articleCategory.forEach((category) => {
		createCategoryElements(category, language);
	});
} else {
	const language = 'ja';
	articleCategory.forEach((category) => {
		createCategoryElements(category, language);
	});
}
