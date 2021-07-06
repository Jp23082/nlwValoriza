import { getCustomRepository } from "typeorm"
import {TagsRepositories} from "../repositories/TagsRepositories"


class CreateTagService{
    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Incorrect name!");
        }

        //Verifica no banco se a tag existe
        //Basicamente o FindOne realiza um SELECT * FROM tags WHERE NAME = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name,
        });

        if(tagAlreadyExists){
            throw new Error("Tag already exists!");
        }

        //Se não existir insere no banco
        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
    }

    
}

export {CreateTagService}