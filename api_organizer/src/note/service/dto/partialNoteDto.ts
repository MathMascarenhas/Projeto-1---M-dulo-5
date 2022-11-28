import { PartialType } from '@nestjs/mapped-types';
import { NoteDto } from './noteInput.dto';

export class PartialNoteDto extends PartialType(NoteDto) {
    id: string;
}