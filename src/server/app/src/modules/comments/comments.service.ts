import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "../../models/comment.model";
import { CreateCommentDto, UpdateCommentDto } from "./dto/create.comment.dto";

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}

    async create(postId: number, createCommentDto: CreateCommentDto): Promise<Comment> {
        return this.commentModel.create({
            ...createCommentDto, postId
        });
    }

    async findAll(postId: number): Promise<Comment[]> {
        return this.commentModel.findAll({
            where: { postId }
        });
    }

    async findOne(postId: number, commentId: number): Promise<Comment> {
        return this.commentModel.findOne({
            where: {
                id: commentId,
                postId: postId
            }
        });
    }

    async update(postId: number, commentId: number, updateCommentDto: UpdateCommentDto): Promise<[number, Comment[]]> {
        return this.commentModel.update(updateCommentDto, {
            where: {
                id: commentId,
                postId: postId
            },
            returning: true
        });
    }

    async remove(postId: number, commentId: number): Promise<void> {
        await this.commentModel.destroy({
            where: {
                id: commentId,
                postId: postId
            }
        });
    }
}
