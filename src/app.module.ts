import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from 'db/data-source';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TagsModule } from './tags/tags.module';
import { RestaurantMenuItemsModule } from './restaurant_menu_items/restaurant_menu_items.module';
import { RestaurantRatingsModule } from './restaurant_ratings/restaurant_ratings.module';
import { RestaurantMenuItemRatingsModule } from './restaurant_menu_item_ratings/restaurant_menu_item_ratings.module';
import { UserAddressesModule } from './user_addresses/user_addresses.module';
import { OrderDetailsModule } from './order_details/order_details.module';
import { OrderItemsModule } from './order_items/order_items.module';

@Module({
  imports: [
    // ConfigModule.forRoot(), // Load environment variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => (dataSourceOptions),
      inject: [ConfigService],
    }),
    UserModule,
    RestaurantsModule,
    TagsModule,
    RestaurantMenuItemsModule,
    RestaurantRatingsModule,
    RestaurantMenuItemRatingsModule,
    UserAddressesModule,
    OrderDetailsModule,
    OrderItemsModule,
  ],
})
export class AppModule {}
