import { Field, ObjectType } from 'type-graphql';

import { Base } from '../common/Base';

@ObjectType()
export class User extends Base {

	@Field()
	email: string = '';
}
