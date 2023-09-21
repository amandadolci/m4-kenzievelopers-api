import format from 'pg-format';
import { DeveloperInfos, DeveloperInfosCreate, DeveloperInfosResult } from '../interfaces';
import { client } from '../database';

async function create(payload: DeveloperInfosCreate): Promise<DeveloperInfos> {
	const queryFormat: string = format(
		'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
		Object.keys(payload),
		Object.values(payload)
	);

	const query: DeveloperInfosResult = await client.query(queryFormat);
	return query.rows[0];
}

export default { create };
