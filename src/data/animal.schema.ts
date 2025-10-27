import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Calls } from "./calls.schema"

@Entity('Animals')
export class Animals
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: false})
	species: string;

  @Column({nullable: false})
	subspecies: string;

  @Column()
	binomial: string;

	@OneToMany(() => Calls, (Calls) => Calls.animal)
	calls: Calls[];
}