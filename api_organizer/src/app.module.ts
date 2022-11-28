import { Module } from '@nestjs/common';
import { NoteController } from './note/note.controller';
import { NoteRepository } from './note/note.repository';
import { NoteService } from './note/service/note.service';
import { DatabaseModule } from './prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NoteController],
  providers: [NoteService, NoteRepository],
})
export class AppModule {}
