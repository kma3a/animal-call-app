import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Locations')
export class Locations
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

  @Column()
	GPSNorth: string;

  @Column()
	GPSWest: string;
}