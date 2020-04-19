import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  team: string;

  @Column("int", { default: 0 })
  clicks: number;

  order: number;
}
