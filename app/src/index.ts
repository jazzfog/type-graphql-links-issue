import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import 'reflect-metadata';

import applyRoutes from '@src/router';
import { resolvers } from '@src/resolvers';

const PORT = 3600;

(async () => {

	const schema = await buildSchema({
		resolvers,
	});
	const apolloServer = new ApolloServer({
		schema,
		debug: true,
		context: ({ req }) => ({ req }),
	});
	const app = Express();

	applyRoutes(app);

	apolloServer.applyMiddleware({ app });

	app.listen(
		PORT,
		() => console.log(`Server has started on port: ${PORT}`)
	);

})();
