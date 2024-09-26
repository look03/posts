import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { PostsModule } from "./modules/posts/posts.module";
import sequelizeConfig from "./config/sequelize.config";
import {CommentsModule} from "./modules/comments/comments.module";



@Module({
    imports: [
        SequelizeModule.forRoot(sequelizeConfig),
        PostsModule, CommentsModule
    ],
})
export class AppModule {}
