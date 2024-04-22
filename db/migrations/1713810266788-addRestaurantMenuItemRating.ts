import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRestaurantMenuItemRating1713810266788 implements MigrationInterface {
    name = 'AddRestaurantMenuItemRating1713810266788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`restaurant_menu_item_rating\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`restaurant_menu_item_id\` int NOT NULL, \`rating\` int NOT NULL, \`uuid\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`restaurant_menu_item_rating\` ADD CONSTRAINT \`FK_07e4b992e7c2f4e544da7167623\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`restaurant_menu_item_rating\` ADD CONSTRAINT \`FK_feeb8bc9205709bf9b7f9cdefb2\` FOREIGN KEY (\`restaurant_menu_item_id\`) REFERENCES \`restaurant_menu_item\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant_menu_item_rating\` DROP FOREIGN KEY \`FK_feeb8bc9205709bf9b7f9cdefb2\``);
        await queryRunner.query(`ALTER TABLE \`restaurant_menu_item_rating\` DROP FOREIGN KEY \`FK_07e4b992e7c2f4e544da7167623\``);
        await queryRunner.query(`DROP TABLE \`restaurant_menu_item_rating\``);
    }

}
