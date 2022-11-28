import { Module } from '@nestjs/common';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/service/note.service';

@Module({
  imports: [],
  controllers: [NoteController],
  providers: [NoteService]
})
export class AppModule {}
