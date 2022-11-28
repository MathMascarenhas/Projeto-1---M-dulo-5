import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class NoteDto {
  @ApiProperty({
    description:
      'Título da nota a ser criada com limite de caracteres igual a 25',
    example: 'Fazer compras',
  })
  @IsString()
  @MaxLength(25)
  title: string;

  @ApiProperty({
    description:
      'Corpo da nota a ser criada com limite de caracteres igual a 300',
    example: `- arroz
    -feijão
    -batata`,
  })
  @IsString()
  @MaxLength(300)
  description: string;

  @ApiProperty({
    description: 'cor da nota',
    example: 'vermelho',
  })
  @IsString()
  color: string;
}
