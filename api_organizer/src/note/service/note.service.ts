import { INoteEntity } from "../entities/note.entity";
import { NoteDto } from "./dto/noteInput.dto";
import { randomUUID } from "crypto";
import { PartialNoteDto } from "./dto/partialNoteDto";

export class NoteService{

    async getNotes(): Promise<INoteEntity[]> {

    }

    async getNoteById(noteId: string): Promise<INoteEntity> {

    }

    async createNote(note: NoteDto): Promise<INoteEntity> {
        const noteEntity = { ...note, id: randomUUID() };

    }

    async updateNote(note: PartialNoteDto): Promise<INoteEntity> {

    }

    async deleteNote(noteId: string): Promise<Boolean> {

    }
}