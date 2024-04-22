import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrderDetailsTable1713811969676 implements MigrationInterface {
    name = 'AddOrderDetailsTable1713811969676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`order_details\` (\`id\` int NOT NULL AUTO_INCREMENT, \`restaurant_id\` int NOT NULL, \`order_status\` enum ('Pending', 'Processing', 'Ready for Delivery', 'On the Way', 'Delivered', 'Cancelled') NOT NULL DEFAULT 'Pending', \`uuid\` varchar(255) NOT NULL, \`user_address_id\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order_details\` ADD CONSTRAINT \`FK_1233dd266821a1ae9caf2d7f8a9\` FOREIGN KEY (\`user_address_id\`) REFERENCES \`user_addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_details\` ADD CONSTRAINT \`FK_cc5d26b1fa5151ce267def45f78\` FOREIGN KEY (\`restaurant_id\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_details\` DROP FOREIGN KEY \`FK_cc5d26b1fa5151ce267def45f78\``);
        await queryRunner.query(`ALTER TABLE \`order_details\` DROP FOREIGN KEY \`FK_1233dd266821a1ae9caf2d7f8a9\``);
        await queryRunner.query(`DROP TABLE \`order_details\``);
    }

}
