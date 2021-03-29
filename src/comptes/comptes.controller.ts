import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { JwtService } from '../systeme/jwt.service';
import { ComptesService } from './comptes.service';
import { CompteDto } from './dto/create-compte.dto';

@Controller('comptes')
export class ComptesController {
    constructor(private readonly compteService: ComptesService, private readonly jwtService:JwtService) { }
    /**
     * Réception d'une tentative de connexion
     * @param id Identifiant de l'utilisateur
     * @param pass Mot de passe de l'utilisateur
     */
    @Get(':id/:pass')
    @HttpCode(HttpStatus.OK)
    async id(@Param('id') id, @Param('pass') pass): Promise<any> {
        try {
            let response = await this.compteService.verifie(id, pass);
            console.log("Identification réussie", response);
            return response;
        } catch (error) {
            console.log("Erreur d'identification : ", error);
            return error;
        }
    }
    /**
     * Accès aux comptes sans paramètres
     */
    @Get('*')
    async idErreur(): Promise<string> {
        throw new HttpException('LOGIN.NO_CONNECTION', HttpStatus.UNAUTHORIZED);
        // return await "Erreur de connexion";
    }
    /**
     * Créer un nouveau filtre
     */
     @Post()
     async creeFiltre(@Body() comptDto:CompteDto) {
        //  return await this.compteService.creeCompte(comptDto);
     }
     /**
     * Mettre à jour un filtre
     * Les données sont traitées directement dans l'objet envoyé dans le body (cf. FiltreService)
     */
    @Put()
    async update(@Body() comptDto: CompteDto) {
        console.log("Update tenté", comptDto);
        // return await this.compteService.updateUn(comptDto);
    }
    /**
     * Supprimer un filtre en fonction de son ID
     * @param id ID du filtre à supprimer
     */
    @Delete(':id')
    async suppr(@Param('id') id: string) {
        // return `This action removes a #${id} filter`;
        // return await this.compteService.deleteUn(id);
    }
}
