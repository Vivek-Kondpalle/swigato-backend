import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantMenuItemRatingsService } from './restaurant_menu_item_ratings.service';
import { CreateRestaurantMenuItemRatingDto } from './dto/create-restaurant_menu_item_rating.dto';
import { UpdateRestaurantMenuItemRatingDto } from './dto/update-restaurant_menu_item_rating.dto';

@Controller('restaurant-menu-item-ratings')
export class RestaurantMenuItemRatingsController {
  constructor(private readonly restaurantMenuItemRatingsService: RestaurantMenuItemRatingsService) {}

  @Post()
  create(@Body() createRestaurantMenuItemRatingDto: CreateRestaurantMenuItemRatingDto) {
    return this.restaurantMenuItemRatingsService.create(createRestaurantMenuItemRatingDto);
  }

  @Get()
  findAll() {
    return this.restaurantMenuItemRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantMenuItemRatingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurantMenuItemRatingDto: UpdateRestaurantMenuItemRatingDto) {
    return this.restaurantMenuItemRatingsService.update(+id, updateRestaurantMenuItemRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantMenuItemRatingsService.remove(+id);
  }
}
