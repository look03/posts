import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Comment } from "./comment.model";

@Table({
    timestamps: true
})
export class Post extends Model<Post> {
    @Column
    title: string;

    @Column
    content: string;

    @HasMany(() => Comment)
    comments: Comment[];
}