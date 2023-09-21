import format from 'pg-format';
import { Project, ProjectCreate, ProjectUpdate, ProjectResult } from '../interfaces';
import { client } from '../database';

async function create(payload: ProjectCreate): Promise<Project> {
	!payload.developerId ? (payload.developerId = null) : null;
	!payload.endDate ? (payload.endDate = null) : null;
	const queryFormat: string = format(
		'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
		Object.keys(payload),
		Object.values(payload)
	);

	const query: ProjectResult = await client.query(queryFormat);
	return query.rows[0];
}

async function retrieve(projectId: string): Promise<Project> {
	const queryFormat: string = format(`
        SELECT
						pjct."id" "projectId",
						pjct."name" "projectName",
						pjct."description" "projectDescription",
						pjct."repository" "projectRepository",
						pjct."startDate" "projectStartDate",
						pjct."endDate" "projectEndDate",
						dev."name" "projectDeveloperName"
        FROM
            "developers" dev
        LEFT JOIN
            "projects" pjct ON dev."id" = pjct."developerId"
				WHERE
      			pjct."id" = $1;
    `);

	const query: ProjectResult = await client.query(queryFormat, [projectId]);

	return query.rows[0];
}

async function update(payload: ProjectUpdate, projectId: string): Promise<Project> {
	const queryFormat: string = format(
		'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
		Object.keys(payload),
		Object.values(payload)
	);

	const query: ProjectResult = await client.query(queryFormat, [projectId]);
	return query.rows[0];
}

export default { create, retrieve, update };
