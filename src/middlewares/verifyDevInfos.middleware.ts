import { NextFunction, Request, Response } from 'express';
import { DeveloperInfosResult } from '../interfaces';
import { client } from '../database';
import { AppError } from '../error';

export async function verifyDevInfos(
	request: Request,
	response: Response,
	next: NextFunction
): Promise<void> {
	const query: DeveloperInfosResult = await client.query(
		'SELECT * FROM "developerInfos" WHERE "developerId" = $1;',
		[request.params.id]
	);

	if (query.rowCount !== 0) {
		throw new AppError('Developer infos already exists.', 409);
	}

	return next();
}
