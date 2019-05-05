import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { CollectionsService } from './collections.service';
import { CollectionModel } from './interfaces/collection.interface';

@Controller('collections')
export class CollectionsController {
    constructor(private readonly collectionsService: CollectionsService) { }
    /**
     * Créer une nouvelle collection
     */
    @Post()
    async create(@Body() creeCollectionDto: CreateCollectionDto) {
        this.collectionsService.create(creeCollectionDto);
    }
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
     * 
     * @param id ID de la collection à mettre à jour
     * @param creeCollec Données de la collection mise à jour
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() creeCollec: CreateCollectionDto) {
        return `This action updates a #${id} cat`;
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