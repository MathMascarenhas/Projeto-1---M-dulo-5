import { INoteEntity } from '../entities/note.entity';
import { NoteDto } from './dto/noteInput.dto';
import { randomUUID } from 'crypto';
import { PartialNoteDto } from './dto/partialNoteDto';
import { NoteRepository } from '../note.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  async getNotes(): Promise<INoteEntity[]> {
    return await this.noteRepository.findAllNotes();
  }

  async getNoteById(noteId: string): Promise<INoteEntity> {
    const singleNote = await this.noteRepository.findNoteById(noteId);
    return singleNote;
  }

  async createNote(note: NoteDto): Promise<INoteEntity> {
    const noteBody = { ...note, id: randomUUID() };
    const createdNote = await this.noteRepository.createNote(noteBody);
    return createdNote;
  }

  async updateNote(note: PartialNoteDto): Promise<INoteEntity> {
    const updatedNote = await this.noteRepository.updateNote(note);
    return updatedNote;
  }

  async deleteNote(noteId: string): Promise<INoteEntity> {
    const deletedNote = await this.noteRepository.deleteNote(noteId);
    return deletedNote;
  }
}
