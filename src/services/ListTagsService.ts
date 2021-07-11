import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"

class ListTagsService {
    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        //Vai modificar a entidade de modo que seja possivel criar outros objetos com base no que já está sendo retornado
        return classToPlain(tags);
    }
}

export { ListTagsService }