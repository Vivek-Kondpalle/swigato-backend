import { Module } from '@nestjs/common';
import { RestaurantMenuItemsService } from './restaurant_menu_items.service';
import { RestaurantMenuItemsController } from './restaurant_menu_items.controller';

@Module({
  controllers: [RestaurantMenuItemsController],
  providers: [RestaurantMenuItemsService],
})
export class RestaurantMenuItemsModule {}
