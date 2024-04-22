import { Injectable } from '@nestjs/common';
import { CreateRestaurantMenuItemDto } from './dto/create-restaurant_menu_item.dto';
import { UpdateRestaurantMenuItemDto } from './dto/update-restaurant_menu_item.dto';

@Injectable()
export class RestaurantMenuItemsService {
  create(createRestaurantMenuItemDto: CreateRestaurantMenuItemDto) {
    return 'This action adds a new restaurantMenuItem';
  }

  findAll() {
    return `This action returns all restaurantMenuItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurantMenuItem`;
  }

  update(id: number, updateRestaurantMenuItemDto: UpdateRestaurantMenuItemDto) {
    return `This action updates a #${id} restaurantMenuItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurantMenuItem`;
  }
}
