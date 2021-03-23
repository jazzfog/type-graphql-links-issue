import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export abstract class Base {

	id: number = 0;

	@Field(() => ID)
	uuid: string = '';
}
