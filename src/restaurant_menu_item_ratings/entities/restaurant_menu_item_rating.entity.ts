import { RestaurantMenuItem } from "src/restaurant_menu_items/entities/restaurant_menu_item.entity";
import { User } from "src/user/entities/user.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class RestaurantMenuItemRating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    restaurant_menu_item_id: number;

    @Column()
    rating: number;

    @Column()
    uuid: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToOne(() => RestaurantMenuItem)
    @JoinColumn({ name: 'restaurant_menu_item_id' })
    restaurantMenuItem: RestaurantMenuItem

    @BeforeInsert()
    generateUuid() {
        if (!this.uuid) {
            this.uuid = uuidv4();
        }
    }
}
