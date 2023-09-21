import { NextFunction, Request, Response } from 'express';
import { DeveloperResult } from '../interfaces';
import { client } from '../database';
import { AppError } from '../error';

export async function verifyDeveloperId(
	request: Request,
	response: Response,
	next: NextFunction
): Promise<void> {
	const id = request.body.developerId ? request.body.developerId : request.params.id;
	const query: DeveloperResult = await client.query(
		`
	SELECT * FROM "developers" WHERE "id" = $1;`,
		[id]
	);

	if (query.rowCount === 0) {
		throw new AppError('Developer not found.', 404);
	}

	return next();
}
