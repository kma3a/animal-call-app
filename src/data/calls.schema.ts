import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CallData } from "./callData.schema";
import { Animals } from './animal.schema';

@Entity('Calls')
export class Calls
{
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => CallData, (CallData) => CallData.calls)
	callData: CallData;

  @ManyToOne(() => Animals, (Animals) => Animals.calls)
	animal: Animals;

  @Column()
  callCount: number;
}