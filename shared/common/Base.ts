import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export abstract class Base extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number = 0;

	@Field(() => ID)
	@Column('char')
	uuid: string = '';
}
