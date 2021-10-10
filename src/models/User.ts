import  {Column, PrimaryColumn, CreateDateColumn, Entity}  from "typeorm";
import  {v4 as uuid}  from 'uuid';


@Entity("users")
class User {

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
    mail: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

};

export {User}
