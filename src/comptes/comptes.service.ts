// Tuto intéressant : https://github.com/marcomelilli/nestjs-email-authentication/tree/ebd95bbd51352457017e31ecf3184fd7f4d62f61

import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '../systeme/jwt.service';

import { CompteModel } from './interfaces/compte.interface';
import { CreateCompteDto } from './dto/create-compte.dto';
import { COMPTES_MODEL_PROVIDER } from '../constants';

@Injectable()
export class ComptesService {

    compte: CompteModel;

    constructor(@Inject(COMPTES_MODEL_PROVIDER) private readonly compteModel: Model<CompteModel>, private readonly jwtService: JwtService) { }
    /**
     * Valider l'identification d'un utilisateur
     */
    async verifie(id, pass): Promise<any> {
        this.compte = await this.compteModel.findOne({ compte: id, mdp: pass });
        console.log("Retour base : ", this.compte);
        if (!this.compte) {
            throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.UNAUTHORIZED);
        } else {
            await this.jwtService.creeToken(this.compte.email, this.compte.statut);
            return {compte:this.compte, token:this.jwtService.token};
        };
    }
}
