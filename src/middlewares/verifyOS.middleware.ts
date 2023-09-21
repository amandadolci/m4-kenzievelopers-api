import { NextFunction, Request, Response } from 'express';
import { OS } from '../interfaces';
import { AppError } from '../error';

export function verifyOS(
	request: Request,
	response: Response,
	next: NextFunction
): void | Response {
	const { preferredOS } = request.body;
	const validOS: OS[] = ['Windows', 'Linux', 'MacOS'];

	if (!preferredOS) {
		return next();
	}

	if (!validOS.includes(preferredOS)) {
		throw new AppError('Invalid OS option.', 400);
	}

	return next();
}
