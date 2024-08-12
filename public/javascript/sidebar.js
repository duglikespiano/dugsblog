const currentURL = location.pathname;
const categoriesElement = document.querySelector('.categories');
const categoryElements = document.querySelectorAll('.category');
const language = currentURL.split('/')[1];

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

const createCategoryElements = (category, language) => {
	const categoryElement = document.createElement('h2');
	const linkElement = document.createElement('a');
	const linkURL = `${currentURL.split('/')[0]}/${currentURL.split('/')[1]}/${category.url}`;
	linkElement.innerText = category.title[language];
	linkElement.setAttribute('href', linkURL);
	categoryElement.classList.add('category');
	categoryElement.appendChild(linkElement);
	categoriesElement.appendChild(categoryElement);
	return categoryElement;
};

const updateActiveCategory = (DOM, category) => {
	if (location.pathname.split('/')[2] === category.title['en'].toLocaleLowerCase()) {
		DOM.classList.add('active');
	}
};

articleCategory.forEach((category) => {
	const categoryElement = createCategoryElements(category, language);
	updateActiveCategory(categoryElement, category);
});
