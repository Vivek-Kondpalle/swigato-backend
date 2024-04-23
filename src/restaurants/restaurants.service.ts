import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService {

  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>
  ){}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    try {
      const restaurant = this.restaurantRepository.create(createRestaurantDto);
      return await this.restaurantRepository.save(restaurant);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create a restaurant');
    }
  }

  findAll() {
    return `This action returns all restaurants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
