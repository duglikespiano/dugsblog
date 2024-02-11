import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';
import { AWSRegion, AWSAccessKeyId, AWSSecretAccessKey, AWSBucket } from './dotenv';

const client = new S3Client({
	region: AWSRegion,
	credentials: {
		accessKeyId: AWSAccessKeyId,
		secretAccessKey: AWSSecretAccessKey,
	},
});

export const getFilenamesFromS3 = async () => {
	const command = new ListObjectsV2Command({
		Bucket: AWSBucket,
	});
	try {
		let isTruncated = true;
		let resultArray = [];
		while (isTruncated) {
			const { Contents, IsTruncated, NextContinuationToken } = await client.send(command);
			if (Contents) {
				for (let element of Contents) {
					if (element.Key?.split('/')[2] !== undefined && element.Key?.split('/')[2] !== '') {
						resultArray.push(element.Key?.split('/')[2]);
					}
				}
			}
			isTruncated = IsTruncated as boolean;
			command.input.ContinuationToken = NextContinuationToken;
		}

		resultArray.sort(function (a, b) {
			return -1;
		});

		return resultArray;
	} catch (err) {
		console.error(err);
	}
};
