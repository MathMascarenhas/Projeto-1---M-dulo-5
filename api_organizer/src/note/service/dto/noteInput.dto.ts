import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsEmpty } from "class-validator";

export class NoteDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsDate()
    createDate: Date;

    @ApiProperty()
    @IsString()
    color: string;
}