import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto, UpdateCommentDto } from "./dto/create.comment.dto";

@Controller('posts/:postId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Param('postId') postId: number, @Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(postId, createCommentDto);
  }

  @Get()
  findAll(@Param('postId') postId: number) {
    return this.commentsService.findAll(postId);
  }

  @Get(':commentId')
  findOne(@Param('postId') postId: number, @Param('commentId') commentId: number) {
    return this.commentsService.findOne(postId, commentId);
  }

  @Put(':commentId')
  update(@Param('postId') postId: number, @Param('commentId') commentId: number, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(postId, commentId, updateCommentDto);
  }

  @Delete(':commentId')
  remove(@Param('postId') postId: number, @Param('commentId') commentId: number) {
    return this.commentsService.remove(postId, commentId);
  }
}
