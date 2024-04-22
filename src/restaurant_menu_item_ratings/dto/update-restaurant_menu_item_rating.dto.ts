import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantMenuItemRatingDto } from './create-restaurant_menu_item_rating.dto';

export class UpdateRestaurantMenuItemRatingDto extends PartialType(CreateRestaurantMenuItemRatingDto) {}
