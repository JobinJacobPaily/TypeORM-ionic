import {Entity,Column,PrimaryColumn} from 'typeorm';


@Entity('table')
export class Table {

    @PrimaryColumn()
    name: string;

    @Column()
    Age: number;

    @Column()
    Date: string;
}