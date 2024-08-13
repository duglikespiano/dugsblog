import { LanguagesCode } from './types';

export const pageRootUrl = 'https://dugsblog-production.up.railway.app';

export const languages = ['en', 'ko', 'ja'];
export const markdownRootPath = './public/markdown';
export const noDataMessage: { [key: string]: string } = {
	en: 'No DATA',
	ko: '데이터 없음',
	ja: 'データ無し',
};

export const templatesTitles: { [key: string]: { [key in LanguagesCode]: string } } = {
	main: {
		en: '',
		ko: '',
		ja: '',
	},
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

export const ogpInformationWithLanguage = {
	en: {
		locale: 'en_US',
		title: "Dug's Blog",
		description: 'A Blog which Dug organizes his thoughts, studyings',
		url: '',
	},
	ko: {
		locale: 'ko_KO',
		title: '더그의 블로그',
		description: '더그의 생각과 공부내용을 정리하는 블로그',
		url: '',
	},
	ja: {
		locale: 'ja_JP',
		title: 'ダグのブログ',
		description: 'ダグの考えと勉強内容を整理して置くブログ',
		url: '',
	},
};
