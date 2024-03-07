export class FsError extends Error {
	errno: number;
	constructor(errno: number) {
		super();
		this.errno = errno;
	}
}
