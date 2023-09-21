import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

export function handleError(
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction
): Response {
	if (error instanceof AppError) {
		return response.status(error.status).json({ message: error.message });
	}

	console.error(error);
	return response.status(500).json({ error: 'Internal server error.' });
}
