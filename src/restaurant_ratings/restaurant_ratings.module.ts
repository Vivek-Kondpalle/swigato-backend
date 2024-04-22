import { Module } from '@nestjs/common';
import { RestaurantRatingsService } from './restaurant_ratings.service';
import { RestaurantRatingsController } from './restaurant_ratings.controller';

@Module({
  controllers: [RestaurantRatingsController],
  providers: [RestaurantRatingsService],
})
export class RestaurantRatingsModule {}
