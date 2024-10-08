export class FsError extends Error {
	errno: number;
	constructor(errno: number) {
		super();
		this.errno = errno;
	}
}

export type Language = {
	language: string;
};

export type LanguagesCode = 'en' | 'ko' | 'ja';

export type FilenameWithNumber = {
	name: string;
	number: number;
};
