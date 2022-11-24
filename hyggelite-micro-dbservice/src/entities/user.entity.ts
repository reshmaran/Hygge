import { Column, Entity, ObjectID, ObjectIdColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectID;
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column( { unique: true } )
  email: string;
  @Column()
  password: string;
  @Column(    { default: false, nullable:true } )
  role: string;
  @Column( { default: false, nullable:true })
  created_By: number;
  @Column( { default: false, nullable:true })
  updated_By: number;
  @Column( { default: false, nullable:true })
  ip_Address: string;
  @Column( 'integer', { default: 1 })
  isActive: boolean;
  @Column( { default: false, nullable:true })
  forget_Otp: string;
  @Column( { default: false, nullable:true })
  hra_Otp: string;
  @Column( { default: false, nullable:true })
  otp_attempt: string;
  @Column('integer', { default: 1 })
  status:boolean
  @Column( { default: false, nullable:true })
  branch_Id:number;
  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

}