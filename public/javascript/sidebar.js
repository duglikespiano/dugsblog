const articleCategory = [
	{
		url: 'english',
		title: {
			en: 'English',
			ko: '영어',
			ja: '英語',
		},
	},
	{
		url: 'japanese',
		title: {
			en: 'Japanese',
			ko: '일본어',
			ja: '日本語',
		},
	},
	{
		url: 'days',
		title: {
			en: 'Days',
			ko: '일상',
			ja: '日常',
		},
	},
];

const currentURL = location.pathname;
const categoriesElement = document.querySelector('.categories');

const createCategoryElements = (category, language) => {
	const categoryElement = document.createElement('h2');
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
