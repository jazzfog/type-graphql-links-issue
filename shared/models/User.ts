import { Entity, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Base } from '../common/Base';

@Entity()
@ObjectType()
export class User extends Base {

	@Field()
	@Column('varchar')
	email: string = '';
}
