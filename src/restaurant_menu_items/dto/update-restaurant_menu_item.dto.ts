import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantMenuItemDto } from './create-restaurant_menu_item.dto';

export class UpdateRestaurantMenuItemDto extends PartialType(CreateRestaurantMenuItemDto) {}
