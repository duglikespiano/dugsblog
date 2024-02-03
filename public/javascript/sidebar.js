const articleCategory = {
	en: ['japanese'],
	ko: ['일본어'],
	ja: ['日本語'],
};

const URL = location.pathname;
const categoriesElement = document.querySelector('.categories');

const createCategoryElements = (category) => {
	const categoryElement = document.createElement('li');
	categoryElement.innerText = category;
	categoriesElement.appendChild(categoryElement);
};

if (URL.split('/')[1] === 'en') {
	articleCategory.en.forEach((category) => {
		createCategoryElements(category);
	});
} else if (URL.split('/')[1] === 'ko') {
	articleCategory.ko.forEach((category) => {
		createCategoryElements(category);
	});
} else {
	articleCategory.ja.forEach((category) => {
		createCategoryElements(category);
	});
}
