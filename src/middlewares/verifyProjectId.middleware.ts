import { NextFunction, Request, Response } from 'express';
import { ProjectResult } from '../interfaces';
import { client } from '../database';
import { AppError } from '../error';

export async function verifyProjectId(
	request: Request,
	response: Response,
	next: NextFunction
): Promise<void> {
	const query: ProjectResult = await client.query(
		`
	SELECT * FROM "projects" WHERE "id" = $1;`,
		[request.params.id]
	);

	if (query.rowCount === 0) {
		throw new AppError('Project not found.', 404);
	}

	return next();
}
