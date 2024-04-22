import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRestaurantRatingTable1713809369642 implements MigrationInterface {
    name = 'AddRestaurantRatingTable1713809369642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`restaurant_rating\` (\`id\` int NOT NULL AUTO_INCREMENT, \`restaurant_id\` int NOT NULL, \`user_id\` int NOT NULL, \`rating\` int NOT NULL, \`review\` text NOT NULL, \`uuid\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`restaurant_rating\` ADD CONSTRAINT \`FK_c1621f98f7d6492a26cb9e66af7\` FOREIGN KEY (\`restaurant_id\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`restaurant_rating\` ADD CONSTRAINT \`FK_167b8440d3d9e630fe78e15ca3c\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant_rating\` DROP FOREIGN KEY \`FK_167b8440d3d9e630fe78e15ca3c\``);
        await queryRunner.query(`ALTER TABLE \`restaurant_rating\` DROP FOREIGN KEY \`FK_c1621f98f7d6492a26cb9e66af7\``);
        await queryRunner.query(`DROP TABLE \`restaurant_rating\``);
    }

}
