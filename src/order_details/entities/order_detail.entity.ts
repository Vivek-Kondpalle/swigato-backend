import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { UserAddress } from 'src/user_addresses/entities/user_address.entity'; // Import the UserAddress entity
import { v4 as uuidv4 } from 'uuid';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

export enum OrderStatus {
    PENDING = 'Pending',
    PROCESSING = 'Processing',
    READY_FOR_DELIVERY = 'Ready for Delivery',
    ON_THE_WAY = 'On the Way',
    DELIVERED = 'Delivered',
    CANCELLED = 'Cancelled',
}

@Entity({ name: 'order_details' })
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    restaurant_id: number;

    @Column({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.PENDING,
    })
    order_status: OrderStatus;

    @Column()
    uuid: string;

    @Column()
    user_address_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne(() => UserAddress)
    @JoinColumn({ name: 'user_address_id' })
    userAddress: UserAddress;

    @ManyToOne(() => Restaurant)
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: Restaurant;

    @BeforeInsert()
    generateUuid() {
        if (!this.uuid) {
            this.uuid = uuidv4();
        }
    }
}
