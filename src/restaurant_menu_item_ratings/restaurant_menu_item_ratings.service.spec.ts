import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantMenuItemRatingsService } from './restaurant_menu_item_ratings.service';

describe('RestaurantMenuItemRatingsService', () => {
  let service: RestaurantMenuItemRatingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantMenuItemRatingsService],
    }).compile();

    service = module.get<RestaurantMenuItemRatingsService>(RestaurantMenuItemRatingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
