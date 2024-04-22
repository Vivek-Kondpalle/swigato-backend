import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRestaurantMenuItem1713808906731 implements MigrationInterface {
    name = 'AddRestaurantMenuItem1713808906731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`restaurant_menu_item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`restaurant_id\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`type\` enum ('veg', 'non-veg') NOT NULL DEFAULT 'veg', \`price\` decimal(10,2) NOT NULL, \`image_url\` varchar(255) NOT NULL, \`description\` text NULL, \`uuid\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`restaurant_menu_item\` ADD CONSTRAINT \`FK_38d7197bdc8bb6493c29fa0759f\` FOREIGN KEY (\`restaurant_id\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant_menu_item\` DROP FOREIGN KEY \`FK_38d7197bdc8bb6493c29fa0759f\``);
        await queryRunner.query(`DROP TABLE \`restaurant_menu_item\``);
    }

}
