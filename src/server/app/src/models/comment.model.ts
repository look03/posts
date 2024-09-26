import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "./post.model";

@Table({
    timestamps: true
})
export class Comment extends Model<Comment> {
    @Column
    content: string;

    @ForeignKey(() => Post)
    @Column
    postId: number;
}