import { QueryResult } from 'pg';

interface Project {
	id: number;
	name: string;
	description?: string | null | undefined;
	repository: string;
	startDate: Date;
	endDate?: Date | null | undefined;
	developerId?: number | null | undefined;
}

type ProjectCreate = Omit<Project, 'id'>;
type ProjectUpdate = Partial<ProjectCreate>;
type ProjectResult = QueryResult<Project>;

export { Project, ProjectCreate, ProjectUpdate, ProjectResult };
