import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Calls } from "./calls.schema";
import { Locations } from './location.schema';


@Entity('CallData')
export class CallData
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	date: Date;

  @ManyToOne(() => Locations, (Locations) => Locations.callData)
	location: Locations;

  @Column('time', {name: 'startTime'})
	startTime: Date;

  @Column('time', {name: 'endTime'})
	endTime: Date;

  @Column('time', {name: 'sunsetTime'})
  sunsetTime: Date;

  @Column()
  isMoonVisible: boolean;

  @Column()
  moonPhase: string;

  @Column()
  percentIlluminated: number;

  @Column()
  windCodeStart: number;

  @Column()
  windCodeEnd: number;

  @Column()
  skyCodeStart: number;

  @Column()
  skyCodeEnd: number;

  @Column()
  tempFStart: number;

  @Column()
  tempFEnd: number;

  @Column()
  tempF: number;
  
  @Column()
  RHStart: number;

  @Column()
  RHEnd: number;

  @Column()
  microphone: string;

  @Column()
  notes: string;

  @OneToMany(() => Calls, (Calls) => Calls.callData)
  calls: Calls[];

}