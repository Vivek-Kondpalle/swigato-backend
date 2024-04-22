import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


export enum MenuItemType {
    VEG = 'veg',
    NON_VEG = 'non-veg',
}

@Entity()
export class RestaurantMenuItem {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    restaurant_id: number;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: MenuItemType,
        default: MenuItemType.VEG,
    })
    type: MenuItemType;

    @Column({ type: 'decimal', precision: 10, scale: 2})
    price: number;

    @Column()
    image_url: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column()
    uuid: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updated_at: Date;

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
