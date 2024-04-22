import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantRatingsController } from './restaurant_ratings.controller';
import { RestaurantRatingsService } from './restaurant_ratings.service';

describe('RestaurantRatingsController', () => {
  let controller: RestaurantRatingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantRatingsController],
      providers: [RestaurantRatingsService],
    }).compile();

    controller = module.get<RestaurantRatingsController>(RestaurantRatingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
