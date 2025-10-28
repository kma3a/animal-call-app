import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CallData } from './callData.schema';

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

	@OneToMany(() => CallData, (CallData) => CallData.location)
	callData: CallData[];
}