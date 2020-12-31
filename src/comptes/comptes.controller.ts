import { Controller, Get, Param, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { JwtService } from '../systeme/jwt.service';
import { ComptesService } from './comptes.service';

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
            return (response);
        } catch (error) {
            console.log("Erreu d'identification : ", error);
            return (error);
        }
    }
    /**
     * Accès aux comptes sans paramètres
     */
    @Get('*')
    async idErreur(): Promise<string> {
        throw new HttpException('LOGIN.NO_CONNECTION', HttpStatus.UNAUTHORIZED);
        return await "Erreur de connexion";
    }
    
}
