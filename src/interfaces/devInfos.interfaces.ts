import { QueryResult } from 'pg';

type OS = 'Windows' | 'Linux' | 'MacOS';

interface DeveloperInfos {
	id: number;
	developerSince: Date;
	preferredOS: OS;
	developerId: number;
}

type DeveloperInfosCreate = Omit<DeveloperInfos, 'id'>;
type DeveloperInfosResult = QueryResult<DeveloperInfos>;

export { OS, DeveloperInfos, DeveloperInfosCreate, DeveloperInfosResult };
