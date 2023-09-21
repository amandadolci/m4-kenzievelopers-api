import { handleError } from './handleError.middleware';
import { uniqueEmail } from './uniqueEmail.middleware';
import { verifyOS } from './verifyOS.middleware';
import { verifyDevInfos } from './verifyDevInfos.middleware';
import { verifyDeveloperId } from './verifyDevId.middleware';
import { verifyProjectId } from './verifyProjectId.middleware';

export default {
	handleError,
	uniqueEmail,
	verifyDeveloperId,
	verifyOS,
	verifyDevInfos,
	verifyProjectId,
};
