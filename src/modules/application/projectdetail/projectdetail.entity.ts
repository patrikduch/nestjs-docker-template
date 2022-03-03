import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * @class ProjectDetailEntity DB entity that represens projectdetail relation.
 * @author Patrik Duch
 */

@Entity('projectdetail')
export class ProjectDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  projectname: string;
}