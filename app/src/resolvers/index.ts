import { NonEmptyArray } from 'type-graphql/dist/interfaces/NonEmptyArray';

import { UserResolver } from '@src/resolvers/UserResolver';

export const resolvers: NonEmptyArray<Function> = [
	UserResolver,
];
