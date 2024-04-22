import { Injectable } from '@nestjs/common';
import { CreateRestaurantMenuItemRatingDto } from './dto/create-restaurant_menu_item_rating.dto';
import { UpdateRestaurantMenuItemRatingDto } from './dto/update-restaurant_menu_item_rating.dto';

@Injectable()
export class RestaurantMenuItemRatingsService {
  create(createRestaurantMenuItemRatingDto: CreateRestaurantMenuItemRatingDto) {
    return 'This action adds a new restaurantMenuItemRating';
  }

  findAll() {
    return `This action returns all restaurantMenuItemRatings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurantMenuItemRating`;
  }

  update(id: number, updateRestaurantMenuItemRatingDto: UpdateRestaurantMenuItemRatingDto) {
    return `This action updates a #${id} restaurantMenuItemRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurantMenuItemRating`;
  }
}
