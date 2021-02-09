import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CreatePrefixDto } from './dto/create-prefix.dto';
import { PrefixService } from './prefix.service';
import { PrefixModel } from './interfaces/prefix.interface';

@Controller('prefix')
export class PrefixController {
    constructor(private readonly prefixServ: PrefixService) { }
    /**
     * Sélectionner toutes les prefix une celles correspondant à la requête
     * @param req Requête reçue dans le corps
     */
    @Get()
    async findPaquet():Promise<any> {
        console.log("prefix : pas de requete détectée, renvoie de toutes les prefix");
        return await this.prefixServ.findAll();
    }
    /**
     * Récupérer le nombre de prefix inscrits dans la base
     * @param id ID de la collection à récupérer
     */
    @Get(':count')
    async findCount(): Promise<number> {
        return await this.prefixServ.countAll();
    }
    /**
     * Créer une notice
     * @param CreatePrefixDto Schéma de la notice à créer (reçu dans le body)
     */
    @Post()
    async cree(@Body() CreatePrefixDto: CreatePrefixDto) {
        return await this.prefixServ.cree(CreatePrefixDto);
    }
    /**
     * Créer une notice
     * @param CreatePrefixDto Schéma de la notice à créer (reçu dans le body)
     */
    @Post(':multiple')
    async creeMultiples(@Param('multiple') multiple:boolean, @Body() ArrayDTO: Array<CreatePrefixDto>) {
        return await this.prefixServ.creeMultiples(ArrayDTO);
    }
    /**
     * Mettre à jour une notice
     * @param id ID de la notice à mettre à jour
     * @param n Données de la notice mise à jour
     */
    @Put(':id')
    async updateUn(@Param('id') id, @Body() n) {
        return await this.prefixServ.updateUn(id, n);
    }
    /**
     * Supprimer une notice
     * @param id ID de la notice à supprimer
     */
    @Delete(':id')
    async deleteUn(@Param('id') id) {
        return await this.prefixServ.deleteUn(id);
    }
}