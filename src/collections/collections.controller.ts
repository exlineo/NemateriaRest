import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { CollectionsService } from './collections.service';
import { CollectionModel } from './interfaces/collection.interface';

@Controller('collections')
export class CollectionsController {
    constructor(private readonly collectionsService: CollectionsService) { }
    
    /**
     * Récupérer l'ensemble des collections
     */
    @Get()
    async findAll(): Promise<Array<CollectionModel>> {
        return this.collectionsService.findAll();
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get(':id')
    async findUn(@Param('id') id): Promise<CollectionModel> {
        return this.collectionsService.findUn(id);
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get('/:id/series')
    async findSeries(@Param('id') id): Promise<object> {
        return this.collectionsService.findSeries(id);
    }
    /**
     * Créer une nouvelle collection
     */
    @Post()
    async create(@Body() collecDto: CreateCollectionDto) {
        console.log("Ajout tnté", collecDto);
        this.collectionsService.cree(collecDto);
    }
    /**
     * Mettre à jour une collection
     * @param id ID de la collection à mettre à jour
     * @param creeCollec Données de la collection mise à jour
     */
    @Put()
    update(@Body() upCollecDto: CreateCollectionDto) {
        console.log("Update tenté", upCollecDto);
        return this.collectionsService.updateUn(upCollecDto);
    }
    /**
     * Supprimer une collection en fonction de son ID
     * @param id ID de la collection à supprimer
     */
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}