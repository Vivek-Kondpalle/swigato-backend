import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserAndRestaurantRelation1714559951427 implements MigrationInterface {
    name = 'ChangeUserAndRestaurantRelation1714559951427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD CONSTRAINT \`FK_aefad5ba2f054d4bbc415b3ef2a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP FOREIGN KEY \`FK_aefad5ba2f054d4bbc415b3ef2a\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP COLUMN \`user_id\``);
    }

}
