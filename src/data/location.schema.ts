import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Calls } from './calls.schema';

@Entity('Locations')
export class Locations
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: false})
	name: string;

  @Column({nullable: false})
	GPSNorth: string;

  @Column({nullable: false})
	GPSWest: string;

	@OneToMany(() => Calls, (Calls) => Calls.location)
	calls: Calls[];
}