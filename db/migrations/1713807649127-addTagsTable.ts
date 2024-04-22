import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTagsTable1713807649127 implements MigrationInterface {
    name = 'AddTagsTable1713807649127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tag\` (\`id\` int NOT NULL AUTO_INCREMENT, \`restaurant_id\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`uuid\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tag\` ADD CONSTRAINT \`FK_d67e646eea7425652b3db75583d\` FOREIGN KEY (\`restaurant_id\`) REFERENCES \`restaurant\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tag\` DROP FOREIGN KEY \`FK_d67e646eea7425652b3db75583d\``);
        await queryRunner.query(`DROP TABLE \`tag\``);
    }

}
