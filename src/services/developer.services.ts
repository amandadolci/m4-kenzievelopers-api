import format from 'pg-format';
import { Developer, DeveloperCreate, DeveloperUpdate, DeveloperResult } from '../interfaces';
import { client } from '../database';

async function create(payload: DeveloperCreate): Promise<Developer> {
	const queryFormat: string = format(
		'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
		Object.keys(payload),
		Object.values(payload)
	);

	const query: DeveloperResult = await client.query(queryFormat);
	return query.rows[0];
}

async function retrieve(developerId: string): Promise<Developer> {
	const queryFormat: string = format(`
        SELECT 
						dev."id" "developerId",
						dev."name" "developerName",
						dev."email" "developerEmail",
            "devI"."developerSince" "developerInfoDeveloperSince",
            "devI"."preferredOS" "developerInfoPreferredOS"
        FROM
             "developers" dev
        LEFT JOIN
            "developerInfos" "devI" ON dev."id" = "devI"."developerId"
				WHERE
      			dev."id" = $1;
    `);

	const query: DeveloperResult = await client.query(queryFormat, [developerId]);

	return query.rows[0];
}

async function destroy(developerId: string): Promise<void> {
	await client.query('DELETE FROM "developers" WHERE "id" = $1;', [developerId]);
}

async function update(payload: DeveloperUpdate, developerId: string): Promise<Developer> {
	const queryFormat: string = format(
		'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
		Object.keys(payload),
		Object.values(payload)
	);

	const query: DeveloperResult = await client.query(queryFormat, [developerId]);
	return query.rows[0];
}

export default { create, retrieve, destroy, update };
