import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedNotNullableToUserId1714560587076 implements MigrationInterface {
    name = 'AddedNotNullableToUserId1714560587076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` CHANGE \`user_id\` \`user_id\` int NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`restaurant\` ADD CONSTRAINT \`FK_aefad5ba2f054d4bbc415b3ef2a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`restaurant\` DROP FOREIGN KEY \`FK_aefad5ba2f054d4bbc415b3ef2a\``);
        await queryRunner.query(`ALTER TABLE \`restaurant\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`CREATE INDEX \`FK_aefad5ba2f054d4bbc415b3ef2a\` ON \`restaurant\` (\`user_id\`)`);
    }

}
