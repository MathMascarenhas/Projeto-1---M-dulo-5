import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { INoteEntity } from "./entities/note.entity";
import { NoteDto } from "./service/dto/noteInput.dto";
import { PartialNoteDto } from "./service/dto/partialNoteDto";
import { NoteService } from "./service/note.service";


@Controller()
export class NoteController {
    constructor(private readonly service: NoteService){}

    @Get()
    async getNotes(): Promise<INoteEntity[]> {
        await this.service.getNotes();
    }

    @Get(':id')
    async getNoteById(@Param('id') noteId: string): Promise<INoteEntity> {
        await this.service.getNoteById(noteId)
    }

    @Post()
    async createNote(@Body() {title, description, createDate, color}: NoteDto): Promise<INoteEntity> {
        await this.service.createNote({title, description, createDate, color});
    }

    @Patch()
    async updateNote(@Body() noteData: PartialNoteDto): Promise<INoteEntity> {
        await this.service.updateNote(noteData);
    }

    @Delete(':id')
    async deleteNote(@Param('id') noteId: string): Promise<string> {
        await this.service.deleteNote(noteId);
    }
}