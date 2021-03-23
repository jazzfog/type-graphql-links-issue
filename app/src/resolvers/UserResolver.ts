import { Arg, Query, Resolver } from 'type-graphql';

// Importin from linked folder with code
import { User } from '../shared/models/User';

@Resolver()
export class UserResolver {

	@Query(() => User, { nullable: true })
	async user(
		@Arg('uuid', { nullable: true }) uuid: string,
	): Promise<User | undefined> {
		return undefined;
	}
}
