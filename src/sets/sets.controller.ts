import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { CreateSetDto } from './dto/create-set.dto';
import { SetsService } from './sets.service';
import { SetModel } from './interfaces/set.interface';

@Controller('sets')
export class SetsController {
    constructor(private readonly setsService: SetsService) { }
    /**
     * Créer une nouvelle collection
     */
    @Post()
    async cree(@Body() creeSet:CreateSetDto) {
        if(!creeSet._id){
            return this.setsService.cree(creeSet);
        }else{
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Attention, ce SET existe déjà !',
              }, HttpStatus.FORBIDDEN);
        }  
    }
    /**
     * Récupérer l'ensemble des sets
     */
    @Get()
    async findAll(): Promise<Array<SetModel>> {
        return this.setsService.findAll();
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get(':id')
    async findUn(@Param('id') id): Promise<SetModel> {
        return this.setsService.findUn(id);
    }
    /**
     * 
     * @param id ID de la collection à mettre à jour
     * @param creeSetDto Données de la collection mise à jour
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() creeSetDto: CreateSetDto) {
        return this.setsService.updateUn(id, creeSetDto);
    }
    /**
     * Supprimer une collection en fonction de son ID
     * @param id ID de la collection à supprimer
     */
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.setsService.deleteUn(id);
    }
}