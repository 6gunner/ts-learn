import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// 定义表的结构，映射成一个entity对象
@Entity()
export class WorkItem {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    length: 100,
  })
  public text: string;

  @Column({ default: false })
  public isChecked: boolean;

  @CreateDateColumn({ type: "timestamp" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt: Date;
}