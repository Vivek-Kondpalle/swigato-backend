import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRestaurantsTable1713805866931 implements MigrationInterface {
    name = 'AddRestaurantsTable1713805866931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`restaurant\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`lat\` decimal(10,6) NOT NULL, \`lng\` decimal(10,6) NOT NULL, \`uuid\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`restaurant\``);
    }

}
