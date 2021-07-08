import { query } from "express";
import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1625614515784 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name:"password",
                type:"varchar",
                isNullable: true, //Permite que o campo receba vazio
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users","password")
    }

}
