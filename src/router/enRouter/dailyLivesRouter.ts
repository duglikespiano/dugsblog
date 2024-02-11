import { Router } from 'express';
import { getFilenamesFromS3 } from '../../aws-s3';
import { AWSS3ThumbnailFolderURL } from '../../dotenv';

const router = Router();

const language = 'en';
const categoryName = 'dailylives';

router.get('/', async (req, res) => {
	const filenames = await getFilenamesFromS3();
	let data = '';

	if (filenames) {
		for (let element of filenames) {
			data += `
				<div class="article">
					<a href="./${categoryName}/${element.split('_')[0]}">
						<img src="${AWSS3ThumbnailFolderURL}/${element}">
					</a>
				</div>`;
		}
	}

	res.render(`./${language}/${categoryName}.ejs`, { data });
});

router.get('/:param', async (req, res) => {});

export default router;
