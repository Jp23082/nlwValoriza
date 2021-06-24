import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624406324251 implements MigrationInterface {
    //Criando uma tabela
    //Metodo Up - Criar a tabela users
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

    //Caso Aconteça algum erro executamos o método down para desfazer a migration, neste caso apagar
    //a tabela criada
    public async down(queryRunner: QueryRunner): Promise<void> {
        //Deletando a tabela
        await queryRunner.dropTable("users");
    }
}

/*Para executar devemos criar dentro de ormconfig.json um objeto chamado migrations 
com o caminho das migrations criadas.
    Ex: "migrations":["src/database/migrations/*.ts"]

Após criado devemos executar nossas migrations com o seguinte comando
    Ex: yarn typeorm migration:run

Caso seja necessário remover a uma migration criada
    Ex: yarn typeorm migration:revert -> remove a ultima migration criada
*/

/*
    Criando entidades
        Ex: yarn typeorm entity:create -n User
*/