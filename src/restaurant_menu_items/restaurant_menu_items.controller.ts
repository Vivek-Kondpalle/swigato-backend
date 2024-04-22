import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantMenuItemsService } from './restaurant_menu_items.service';
import { CreateRestaurantMenuItemDto } from './dto/create-restaurant_menu_item.dto';
import { UpdateRestaurantMenuItemDto } from './dto/update-restaurant_menu_item.dto';

@Controller('restaurant-menu-items')
export class RestaurantMenuItemsController {
  constructor(private readonly restaurantMenuItemsService: RestaurantMenuItemsService) {}

  @Post()
  create(@Body() createRestaurantMenuItemDto: CreateRestaurantMenuItemDto) {
    return this.restaurantMenuItemsService.create(createRestaurantMenuItemDto);
  }

  @Get()
  findAll() {
    return this.restaurantMenuItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantMenuItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurantMenuItemDto: UpdateRestaurantMenuItemDto) {
    return this.restaurantMenuItemsService.update(+id, updateRestaurantMenuItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantMenuItemsService.remove(+id);
  }
}
