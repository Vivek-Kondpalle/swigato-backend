import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export enum AddressType {
    HOME = 'Home',
    WORK = 'Work',
    HOTEL = 'Hotel',
    OTHER = 'Other',
}

@Entity({ name: 'user_addresses' })
export class UserAddress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    address: string;

    @Column({ type: 'decimal', precision: 10, scale: 6 })
    lat: number;

    @Column({ type: 'decimal', precision: 10, scale: 6 })
    lng: number;

    @Column({
        type: 'enum',
        enum: AddressType,
        default: AddressType.HOME,
    })
    address_type: AddressType;

    @Column({ nullable: true })
    near_by_landmark: string;

    @Column()
    receiver_name: string;

    @Column()
    receiver_phone_number: string;

    @Column()
    uuid: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @BeforeInsert()
    generateUuid() {
        if (!this.uuid) {
            this.uuid = uuidv4();
        }
    }
}
