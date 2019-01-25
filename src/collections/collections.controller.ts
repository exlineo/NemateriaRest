import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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
    async findAll(): Promise<CollectionModel[]> {
        return this.collectionsService.findAll();
    }
}