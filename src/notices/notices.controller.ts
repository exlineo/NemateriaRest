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
    async findPaquet():Promise<any> {
            console.log("Notices : pas de requete détectée, renvoie de toutes les notices");
            return this.noticesService.findAll();
    }
    /**
     * Sélectionner toutes les notices une celles correspondant à la requête
     * @param c Paramètre collection transmis
     */
    @Get('/collection/:c')
    async findCollection(@Param('c') c):Promise<any> {
            console.log("Demande des notice d'une collection", c); // c = id de la collection à récupérer
            return this.noticesService.findCollection(c);
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get('/notice/:id')
    async findUn(@Param('id') id): Promise<NoticeModel> {
        return this.noticesService.findUn(id);
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get(':count')
    async findCount(): Promise<number> {
        return this.noticesService.countAll();
    }
    /**
     * Récupérer une collection en fonction de son ID
     * @param id ID de la collection à récupérer
     */
    @Get('/collection/:c/count')
    async findCollecCount(@Param('c') c): Promise<number> {
        return this.noticesService.countCollec(c);
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