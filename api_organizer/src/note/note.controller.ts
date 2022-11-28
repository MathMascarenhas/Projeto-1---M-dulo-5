import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { INoteEntity } from './entities/note.entity';
import { NoteDto } from './service/dto/noteInput.dto';
import { PartialNoteDto } from './service/dto/partialNoteDto';
import { NoteService } from './service/note.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Notes')
@Controller()
export class NoteController {
  constructor(private readonly service: NoteService) {}

  @Get()
  async getNotes(): Promise<INoteEntity[]> {
    return await this.service.getNotes();
  }

  @Get(':id')
  async getNoteById(@Param('id') noteId: string): Promise<INoteEntity> {
    try {
      return await this.service.getNoteById(noteId);
    } catch (err) {
      throw new NotFoundException('Note not found');
    }
  }

  @Post()
  async createNote(
    @Body() { title, description, color }: NoteDto,
  ): Promise<INoteEntity> {
    try {
      return await this.service.createNote({ title, description, color });
    } catch (error) {
      throw new BadRequestException('It was not possible to add the note');
    }
  }

  @Patch()
  async updateNote(@Body() noteData: PartialNoteDto): Promise<INoteEntity> {
    try {
      return await this.service.updateNote(noteData);
    } catch (error) {
      throw new BadRequestException('It was not possible to update the note');
    }
  }

  @Delete(':id')
  async deleteNote(@Param('id') noteId: string): Promise<string> {
    try {
      await this.service.deleteNote(noteId);
      return 'Note deleted successfully';
    } catch (err) {
      throw new NotFoundException('Note not found');
    }
  }
}
