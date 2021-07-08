import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1625699869811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"compliments",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"user_sender",
                        type:"uuid"
                    },
                    {
                        name:"user_receiver",
                        type:"uuid"
                    },
                    {
                        name:"tag_id",
                        type:"uuid"
                    },
                    {
                        name:"message",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }

                ],
                //Criando Foreign Keys
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments", //Nome Foreign Key
                        referencedTableName:"users", //Tabela de Referencia
                        referencedColumnNames: ["id"], //Coluna de referencia
                        columnNames: ["user_sender"], //Nome da coluna da tabela "compliments" que será fk
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments", //Nome Foreign Key
                        referencedTableName:"users", //Tabela de Referencia
                        referencedColumnNames: ["id"], //Coluna de referencia
                        columnNames: ["user_receiver"], //Nome da coluna da tabela "compliments" que será fk
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name: "FKTagCompliments", //Nome Foreign Key
                        referencedTableName:"tags", //Tabela de Referencia
                        referencedColumnNames: ["id"], //Coluna de referencia
                        columnNames: ["tag_id"], //Nome da coluna da tabela "compliments" que será fk
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
