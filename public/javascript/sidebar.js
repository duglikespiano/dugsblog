const articleCategory = [
	{
		url: 'japanese',
		title: {
			en: 'japanese',
			ko: '일본어',
			ja: '日本語',
		},
	},
];
const currentURL = location.pathname;
const categoriesElement = document.querySelector('.categories');

const createCategoryElements = (category, language) => {
	const categoryElement = document.createElement('li');
	const linkElement = document.createElement('a');
	const linkURL = `${currentURL.split('/')[0]}/${currentURL.split('/')[1]}/${category.title[language]}`;
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
	articleCategory.ko.forEach((category) => {
		createCategoryElements(category, language);
	});
} else {
	const language = 'ja';
	articleCategory.ja.forEach((category) => {
		createCategoryElements(category, language);
	});
}