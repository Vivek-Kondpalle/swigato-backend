import { Module } from '@nestjs/common';
import { RestaurantMenuItemRatingsService } from './restaurant_menu_item_ratings.service';
import { RestaurantMenuItemRatingsController } from './restaurant_menu_item_ratings.controller';

@Module({
  controllers: [RestaurantMenuItemRatingsController],
  providers: [RestaurantMenuItemRatingsService],
})
export class RestaurantMenuItemRatingsModule {}
