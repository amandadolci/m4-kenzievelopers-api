import { Request, Response } from 'express';
import { DeveloperInfos, DeveloperInfosCreate } from '../interfaces';
import { developersInfosServices } from '../services';

async function create(request: Request, response: Response): Promise<Response> {
	const payload: DeveloperInfosCreate = { ...request.body, developerId: request.params.id };
	const developersInfos: DeveloperInfos = await developersInfosServices.create(payload);
	return response.status(201).json(developersInfos);
}

export default { create };
