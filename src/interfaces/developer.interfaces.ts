import { QueryResult } from 'pg';

interface Developer {
	id: number;
	name: string;
	email: string;
}

type DeveloperCreate = Omit<Developer, 'id'>;
type DeveloperUpdate = Partial<DeveloperCreate>;
type DeveloperResult = QueryResult<Developer>;

export { Developer, DeveloperCreate, DeveloperUpdate, DeveloperResult };
