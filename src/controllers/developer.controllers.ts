import { Request, Response } from 'express';
import { Developer } from '../interfaces';
import { developerServices } from '../services';

async function create(request: Request, response: Response): Promise<Response> {
	const developer: Developer = await developerServices.create(request.body);
	return response.status(201).json(developer);
}

async function retrieve(request: Request, response: Response): Promise<Response> {
	const developer: Developer = await developerServices.retrieve(request.params.id);
	return response.status(200).json(developer);
}

async function destroy(request: Request, response: Response): Promise<Response> {
	await developerServices.destroy(request.params.id);
	return response.status(204).json();
}

async function update(request: Request, response: Response): Promise<Response> {
	const developer: Developer = await developerServices.update(request.body, request.params.id);
	return response.status(200).json(developer);
}

export default { create, retrieve, destroy, update };
