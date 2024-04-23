import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdInRestaurantsTable1713904892795 implements MigrationInterface {
    name = 'AddUserIdInRestaurantsTable1713904892795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD UNIQUE INDEX \`IDX_aefad5ba2f054d4bbc415b3ef2\` (\`user_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_aefad5ba2f054d4bbc415b3ef2\` ON \`restaurant\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD CONSTRAINT \`FK_aefad5ba2f054d4bbc415b3ef2a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP FOREIGN KEY \`FK_aefad5ba2f054d4bbc415b3ef2a\``);
        await queryRunner.query(`DROP INDEX \`REL_aefad5ba2f054d4bbc415b3ef2\` ON \`restaurant\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP INDEX \`IDX_aefad5ba2f054d4bbc415b3ef2\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` CHANGE \`user_id\` \`user_id\` int NOT NULL`);
    }

}
