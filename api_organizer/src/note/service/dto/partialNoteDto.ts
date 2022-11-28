import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { NoteDto } from './noteInput.dto';

export class PartialNoteDto extends PartialType(NoteDto) {
  @ApiProperty()
  id: string;
}
