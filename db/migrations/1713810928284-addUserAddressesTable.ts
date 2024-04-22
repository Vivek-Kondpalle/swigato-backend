import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserAddressesTable1713810928284 implements MigrationInterface {
    name = 'AddUserAddressesTable1713810928284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_addresses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`address\` varchar(255) NOT NULL, \`lat\` decimal(10,6) NOT NULL, \`lng\` decimal(10,6) NOT NULL, \`address_type\` enum ('Home', 'Work', 'Hotel', 'Other') NOT NULL DEFAULT 'Home', \`near_by_landmark\` varchar(255) NULL, \`receiver_name\` varchar(255) NOT NULL, \`receiver_phone_number\` varchar(255) NOT NULL, \`uuid\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_addresses\` ADD CONSTRAINT \`FK_7a5100ce0548ef27a6f1533a5ce\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_addresses\` DROP FOREIGN KEY \`FK_7a5100ce0548ef27a6f1533a5ce\``);
        await queryRunner.query(`DROP TABLE \`user_addresses\``);
    }

}
