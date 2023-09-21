import { NextFunction, Request, Response } from 'express';
import { DeveloperResult } from '../interfaces';
import { client } from '../database';
import { AppError } from '../error';

export async function uniqueEmail(
	request: Request,
	response: Response,
	next: NextFunction
): Promise<void> {
	const { email } = request.body;

	if (!email) {
		return next();
	}

	const query: DeveloperResult = await client.query(
		'SELECT * FROM "developers" WHERE "email" = $1;',
		[email]
	);

	if (query.rowCount !== 0) {
		throw new AppError('Email already exists.', 409);
	}

	return next();
}
