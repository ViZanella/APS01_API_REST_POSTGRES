import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Category')
export class Category{
    @PrimaryGeneratedColumn()0
    id:number;

    @Column({length:60, nullable:false})
    name:string;

    @Column({nullable:false, default:true})
    active: boolean;
}