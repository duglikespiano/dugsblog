import { app } from './app';
import { port } from './dotenv';

export const initiateServer = () => {
	app.listen(port, '0.0.0.0', () => {
		if (!port) {
			throw new Error('PORT INVALID');
		} else {
			console.log(`SERVER IS LISTENING ON PORT ${port}!`);
		}
	});
};
