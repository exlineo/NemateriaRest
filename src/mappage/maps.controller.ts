import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { MapsService } from './maps.service';
import { MapModel } from './interfaces/map.interface';

@Controller('mappages')
export class MapsController {
    constructor(private readonly mapsService: MapsService) { }
    /**
     * Créer une nouvelle collection
     */
    @Post()
    async create(@Body() creeMapDto: CreateMapDto) {
        this.mapsService.create(creeMapDto);
    }
    /**
     * Récupérer l'ensemble des sets
     */
    @Get()
    async findAll(): Promise<Array<MapModel>> {
        return this.mapsService.findAll();
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get(':id')
    async findUn(@Param('id') id): Promise<MapModel> {
        return this.mapsService.findUn(id);
    }
    /**
     * 
     * @param id ID de la collection à mettre à jour
     * @param creeMapDto Données de la collection mise à jour
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() creeMapDto: CreateMapDto) {
        return this.mapsService.updateUn(id, creeMapDto);
    }
    /**
     * Supprimer une collection en fonction de son ID
     * @param id ID de la collection à supprimer
     */
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.mapsService.deleteUn(id);
    }
}