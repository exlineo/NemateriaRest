import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NoticesService } from './notices.service';
import { NoticeModel } from './interfaces/notice.interface';

@Controller('notices')
export class NoticesController {
    constructor(private readonly noticesService: NoticesService) { }

    
    /**
     * Sélectionner toutes les notices une celles correspondant à la requête
     * @param req Requête reçue dans le corps
     */
    @Get()
    async findPaquet(@Query() req):Promise<any> {
        if(req){
            console.log("requete notice détectée", req); // dir > le dossier à scanner, q > des variables passées
            return this.noticesService.findCollection(req);
        }else{
            console.log("Notices : pas de requete détectée");
            return this.noticesService.findAll();
        }
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get(':id')
    async findUn(@Param('id') id): Promise<NoticeModel> {
        return this.noticesService.findUn(id);
    }
    /**
     * Créer une notice
     * @param CreateNoticeDto Schéma de la notice à créer (reçu dans le body)
     */
    @Put()
    async cree(@Body() CreateNoticeDto: CreateNoticeDto) {
        this.noticesService.cree(CreateNoticeDto);
    }
    /**
     * Mettre à jour une notice
     * @param id ID de la notice à mettre à jour
     * @param n Données de la notice mise à jour
     */
    @Post(':id')
    async updateUn(@Param('id') id, @Body() n) {
        this.noticesService.updateUn(id, n);
    }
    /**
     * Supprimer une notice
     * @param id ID de la notice à supprimer
     */
    @Delete(':id')
    async deleteUn(@Param('id') id) {
        this.noticesService.deleteUn(id);
    }
}