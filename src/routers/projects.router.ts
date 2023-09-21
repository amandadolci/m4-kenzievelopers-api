import { Router } from 'express';
import { projectsControllers } from '../controllers';
import middlewares from '../middlewares';

const projectsRouter: Router = Router();

projectsRouter.post('', middlewares.verifyDeveloperId, projectsControllers.create);

projectsRouter.use('/:id', middlewares.verifyProjectId);

projectsRouter.get('/:id', projectsControllers.retrieve);
projectsRouter.patch('/:id', middlewares.verifyDeveloperId, projectsControllers.update);

export default projectsRouter;
