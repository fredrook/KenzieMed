import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  district: string

  @Column({ length: 8 })
  zipCode: string

  @Column({ length: 10 })
  number: string

  @Column({ length: 100 })
  state: string

  @Column()
  city: string

}

export default Addresses
