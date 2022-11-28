import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { INoteEntity } from './entities/note.entity';
import { PartialNoteDto } from './service/dto/partialNoteDto';

@Injectable()
export class NoteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllNotes(): Promise<INoteEntity[]> {
    const allNotes = await this.prisma.note.findMany();
    return allNotes;
  }

  async findNoteById(noteId: string): Promise<INoteEntity> {
    const foundNote = await this.prisma.note.findUniqueOrThrow({
      where: { id: noteId },
    });
    return foundNote;
  }

  async createNote(note: INoteEntity): Promise<INoteEntity> {
    const createdNote = await this.prisma.note.create({ data: note });
    return createdNote;
  }

  async updateNote(note: PartialNoteDto): Promise<INoteEntity> {
    const updatedNote = await this.prisma.note.update({
      where: { id: note.id },
      data: note,
    });
    return updatedNote;
  }

  async deleteNote(noteId: string): Promise<INoteEntity> {
    const deletedNote = await this.prisma.note.delete({
      where: { id: noteId },
    });
    return deletedNote;
  }
}
