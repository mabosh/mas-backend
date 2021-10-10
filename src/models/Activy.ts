import {Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';

import { CourseUnit } from './CourseUnit';

@Entity("Activies")
class Activy {

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    activy_date: Date;

    @Column()
    course_unit_id: string;

    @Column()
    grade_at: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit

  }

  export {Activy}
  