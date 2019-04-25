import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { CollectionsService } from './collections.service';
import { CollectionModel } from './interfaces/collection.interface';

@Controller('collections')
export class CollectionsController {
    constructor(private readonly collectionsService: CollectionsService) { }

    @Post()
    async create(@Body() CreateCollectionDto: CreateCollectionDto) {
        this.collectionsService.create(CreateCollectionDto);
    }

    @Get()
    async findAll(): Promise<Array<CollectionModel>> {
        return this.collectionsService.findAll();
    }

    @Get(':id')
    async findUn(@Param('id') id): Promise<CollectionModel> {
        return this.collectionsService.findUn(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() creeCollec: CreateCollectionDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}