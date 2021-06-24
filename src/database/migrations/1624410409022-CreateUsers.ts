import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624410409022 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name:"users", //Nome da tabela
            columns:[
                {
                    name:"id", //Nome coluna
                    type:"uuid", //Tipo de dado Coluna, UUID => Identificador Universal
                    isPrimary: true //Chave Primaria
                },
                {
                    name:"name",
                    type:"varchar"
                },
                {
                    name:"email",
                    type:"varchar"
                },
                {
                    name:"admin",
                    type:"boolean",
                    default: false //Valor padrão, caso nada seja inserido
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"now()" //Insere a hora atual
                },
                {
                    name:"updated_at",
                    type:"timestamp",
                    default:"now()"
                }
            ]
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         //Deletando a tabela
         await queryRunner.dropTable("users");
    }

}
