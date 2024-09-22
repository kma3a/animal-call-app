import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Animals')
export class Animals
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	species: string;

  @Column()
	subspecies: string;

  @Column()
	binomial: string;
}