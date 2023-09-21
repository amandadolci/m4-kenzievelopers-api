import { Router } from 'express';
import { developerControllers, devInfosControllers } from '../controllers';
import middlewares from '../middlewares';

const developerRouter: Router = Router();

developerRouter.post('', middlewares.uniqueEmail, developerControllers.create);

developerRouter.use('/:id', middlewares.verifyDeveloperId);

developerRouter.get('/:id', developerControllers.retrieve);
developerRouter.delete('/:id', developerControllers.destroy);
developerRouter.patch('/:id', middlewares.uniqueEmail, developerControllers.update);

developerRouter.post(
	'/:id/infos',
	middlewares.verifyOS,
	middlewares.verifyDevInfos,
	devInfosControllers.create
);

export default developerRouter;
