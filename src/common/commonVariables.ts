export const languages = ['en', 'ko', 'ja'];
export const markdownRootPath = './public/markdown';
export const noDataMessage: { [key: string]: string } = {
	en: 'No DATA',
	ko: '데이터 없음',
	ja: 'データ無し',
};

type LanguageCode = 'en' | 'ko' | 'ja';

export const templatesTitles: { [key: string]: { [key in LanguageCode]: string } } = {
	english: {
		en: 'English',
		ko: '영어',
		ja: '英語',
	},
	japanese: {
		en: 'Japanese',
		ko: '일본어',
		ja: '日本語',
	},
	days: {
		en: 'Days',
		ko: '일상',
		ja: '日常',
	},
};
