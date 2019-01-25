import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateJeuDto } from './dto/create-jeu.dto';
import { JeuxService } from './jeux.service';
import { Jeu as JeuInterface } from './interfaces/jeu.interface';

@Controller('jeux')
export class JeuxController {
    constructor(private readonly jeuService: JeuxService) { }

    @Post()
    async create(@Body() createJeuDto: CreateJeuDto) {
        this.jeuService.create(createJeuDto);
    }

    @Get()
    async findAll(): Promise<JeuInterface[]> {
        return this.jeuService.findAll();
    }
}