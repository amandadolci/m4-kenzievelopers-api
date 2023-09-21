import { Request, Response } from 'express';
import { Project } from '../interfaces';
import { projectsServices } from '../services';

async function create(request: Request, response: Response): Promise<Response> {
	const project: Project = await projectsServices.create(request.body);
	return response.status(201).json(project);
}

async function retrieve(request: Request, response: Response): Promise<Response> {
	const project: Project = await projectsServices.retrieve(request.params.id);
	return response.status(200).json(project);
}

async function update(request: Request, response: Response): Promise<Response> {
	const project: Project = await projectsServices.update(request.body, request.params.id);
	return response.status(200).json(project);
}

export default { create, retrieve, update };
