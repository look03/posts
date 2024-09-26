import { Injectable } from '@nestjs/common';
import { Post } from "../../models/post.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePostDto, UpdatePostDto } from "./dto/create.post.dto";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postModel: typeof Post) {}

    async create(createPostDto: CreatePostDto): Promise<Post> {
        return this.postModel.create(createPostDto);
    }

    async findAll(): Promise<Post[]> {
        return this.postModel.findAll();
    }

    async findOne(id: number): Promise<Post> {
        return this.postModel.findByPk(id);
    }

    async update(id: number, updatePostDto: UpdatePostDto): Promise<[number, Post[]]> {
         return this.postModel.update(updatePostDto, {
            where: { id },
            returning: true
        });
    }

    async remove(id: number): Promise<void> {
        await this.postModel.destroy({
            where: { id }
        });
    }
}
