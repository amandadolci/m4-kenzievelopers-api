import express, { Application } from 'express';
import 'express-async-errors';
import { developerRouter, projectsRouter } from './routers';
import middlewares from './middlewares';

const app: Application = express();
app.use(express.json());

app.use('/developers', developerRouter);
app.use('/projects', projectsRouter);

app.use(middlewares.handleError);

export default app;
