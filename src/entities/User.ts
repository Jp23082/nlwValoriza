import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Exclude } from "class-transformer";

//Importando uuid
import {v4 as uuid} from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string; //Não é possivel definir uuid por isso colocamos string

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;  

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{ User };

/*Entidade = responsavel por representar/referenciar uma tabela no banco de dados */
/* Necessário descomentar as seguintes linhas no arquivo tsconfig.json
    "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. 
    "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. 
    
    Alterar a seguinte linha no tsconfig de true para false, conforme abaixo
    "strictPropertyInitialization": false,        /* Enable strict checking of property initialization in classes. 
*/

/**
    Necessário instalar as bibliotecas responsavel pelo uuid
        Ex: yarn add uuid
            yarn add @types/uuid -D
 */
    

