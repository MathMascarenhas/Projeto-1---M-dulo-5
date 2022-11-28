import { NoteDto } from '../service/dto/noteInput.dto';

export interface INoteEntity extends NoteDto {
  id: string;
}
