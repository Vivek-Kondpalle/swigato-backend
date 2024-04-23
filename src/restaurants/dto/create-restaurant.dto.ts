import { IsNotEmpty } from "class-validator";

export class CreateRestaurantDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    lat: number;

    @IsNotEmpty()
    lng: number;

    @IsNotEmpty()
    phone_number: string;

    @IsNotEmpty()
    user_id: number;
}
