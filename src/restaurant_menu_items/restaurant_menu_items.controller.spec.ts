import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantMenuItemsController } from './restaurant_menu_items.controller';
import { RestaurantMenuItemsService } from './restaurant_menu_items.service';

describe('RestaurantMenuItemsController', () => {
  let controller: RestaurantMenuItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantMenuItemsController],
      providers: [RestaurantMenuItemsService],
    }).compile();

    controller = module.get<RestaurantMenuItemsController>(RestaurantMenuItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
