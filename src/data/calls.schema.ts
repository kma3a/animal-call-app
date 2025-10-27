import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CallData } from "./callData.schema";
import { Animals } from './animal.schema';
import { Locations } from './location.schema';

@Entity('Calls')
export class Calls
{
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => CallData, (CallData) => CallData.calls)
	callData: CallData;

  @ManyToOne(() => Animals, (Animals) => Animals.calls)
	animal: Animals;

  @ManyToOne(() => Locations, (Locations) => Locations.calls)
	location: Locations;

  @Column()
  callCount: number;
}