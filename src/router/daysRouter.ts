import { Router } from 'express';
import { getFilenamesFromS3 } from '../aws-s3';
import { AWSS3ThumbnailFolderURL } from '../dotenv';
import { Language } from '../common/types';

const router = Router({ mergeParams: true });
const categoryName = 'days';

router.get('/', async (req, res) => {
	const { language } = req.params as Language;
	const filenames = await getFilenamesFromS3();
	let data = '';

	if (filenames) {
		for (let element of filenames) {
			data += `
				<li class="thumbnail" data-filename=${element}>
					<a href="./${categoryName}/${element.split('_')[0]}">
						<img src="${AWSS3ThumbnailFolderURL}/${element}">
					</a>
				</li>`;
		}
	}

	res.render(`./${language}/${categoryName}.ejs`, { data, language, title: 'Days' });
});

router.get('/:param', async (req, res) => {});

export default router;
