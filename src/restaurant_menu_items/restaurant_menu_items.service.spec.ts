import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantMenuItemsService } from './restaurant_menu_items.service';

describe('RestaurantMenuItemsService', () => {
  let service: RestaurantMenuItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantMenuItemsService],
    }).compile();

    service = module.get<RestaurantMenuItemsService>(RestaurantMenuItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
