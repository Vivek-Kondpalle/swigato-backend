import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantMenuItemRatingsController } from './restaurant_menu_item_ratings.controller';
import { RestaurantMenuItemRatingsService } from './restaurant_menu_item_ratings.service';

describe('RestaurantMenuItemRatingsController', () => {
  let controller: RestaurantMenuItemRatingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantMenuItemRatingsController],
      providers: [RestaurantMenuItemRatingsService],
    }).compile();

    controller = module.get<RestaurantMenuItemRatingsController>(RestaurantMenuItemRatingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
