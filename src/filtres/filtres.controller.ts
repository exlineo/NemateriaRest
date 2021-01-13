import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { FiltresService } from './filtres.service';
import { FiltreDto } from './dto/filtre.dto';

@Controller('filtres')
export class FiltresController {

    constructor(private readonly filtresServ:FiltresService) { }
    
    /**
     * Récupérer l'ensemble des filtres
     */
    @Get()
    async findAll(): Promise<Array<any>> {
        return await this.filtresServ.findAll();
    }
    /**
     * Récupérer un filtre en fonction de son ID
     * @param id ID du filtre à récupérer
     */
    @Get(':id')
    async findUn(@Param('id') id): Promise<any> {
        return await this.filtresServ.findUn(id);
    }
    /**
     * Créer un nouveau filtre
     */
    @Post()
    async creeFiltre(@Body() filtreDto: FiltreDto) {
        return await this.filtresServ.cree(filtreDto);
    }
    /**
     * Mettre à jour un filtre
     * Les données sont traitées directement dans l'objet envoyé dans le body (cf. FiltreService)
     */
    @Put()
    async update(@Body() upFiltreDto: FiltreDto) {
        console.log("Update tenté", upFiltreDto);
        return await this.filtresServ.updateUn(upFiltreDto);
    }
    /**
     * Supprimer un filtre en fonction de son ID
     * @param id ID du filtre à supprimer
     */
    @Delete(':id')
    async suppr(@Param('id') id: string) {
        // return `This action removes a #${id} filter`;
        return await this.filtresServ.deleteUn(id);
    }
}
