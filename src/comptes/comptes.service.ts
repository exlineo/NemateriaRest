// Tuto intéressant : https://github.com/marcomelilli/nestjs-email-authentication/tree/ebd95bbd51352457017e31ecf3184fd7f4d62f61

import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '../systeme/jwt.service';

import { CompteModel } from './interfaces/compte.interface';
import { CompteDto } from './dto/create-compte.dto';
import { COMPTES_MODEL_PROVIDER } from '../constants';

@Injectable()
export class ComptesService {

    compte: CompteModel;

    constructor(@Inject(COMPTES_MODEL_PROVIDER) private readonly compteModel: Model<CompteModel>, private readonly jwtService: JwtService) { }
    /**
     * Valider l'identification d'un utilisateur
     */
    async verifie(id, pass): Promise<any> {
        const hash = bcrypt.hashSync(pass, 10);
        console.log(hash);
        // Recherche de l'identifiant dans la base
        this.compte = await this.compteModel.findOne({ compte: id});
        if (!this.compte) {
            // Renvoyer une erreur
            throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.UNAUTHORIZED);
        } else {

            if(bcrypt.compareSync(pass, this.compte.mdp)){
                // Retourner des données
                this.jwtService.creeToken(this.compte.email, this.compte.statut);
                this.compte.mdp='';
                return ({compte:this.compte, token:this.jwtService.token});
            }else{
                throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.UNAUTHORIZED);
            }
            
        };
    }
    /**
     * Créer un filtre
     * @param creeFiltreDto forme du filtre à transmettre
     */
     async creeCompte(comptDto): Promise<CompteModel> {
        console.log("Filtre DTO (service) : ", comptDto);
        return await bcrypt.genSalt(10, function(err, salt) {
            return bcrypt.hash(comptDto.mdp, salt, function(err, hash) {
                comptDto.mdp = hash;
                const compteCree = new this.compteModel(comptDto);
                return compteCree.save();
            });
          });
    }
    /**
     * Mettre à jour un document
     * @param filtre ID du document à mettre à jour
     * @type FiltreModel
     */
    async updateUn(c): Promise<CompteModel> {
        console.log("Mise à jour du filtre ", c);
        return await this.compteModel.findByIdAndUpdate(c._id, c).exec();
    }
    /**
     * Supprimer un élément en fonction de son ID
     * @param id ID du document à supprimer
     */
    async deleteUn(id): Promise<CompteModel> {
        console.log("Destruction d'un filtre", id);
        return await this.compteModel.findByIdAndDelete(id).exec();
    }
}
