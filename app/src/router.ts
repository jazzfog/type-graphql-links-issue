import { Application } from 'express';

import { index } from '@src/controllers';

export default (app: Application) => {
	app.get('/', index);
};
