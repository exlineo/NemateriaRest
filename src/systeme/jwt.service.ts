import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';

import { CompteModel } from '../comptes/interfaces/compte.interface';
import { CreateCompteDto } from '../comptes/dto/create-compte.dto';
import { COMPTES_MODEL_PROVIDER } from '../constants';
import { JWT_CONFIG } from '../config';

@Injectable()
export class JwtService {

    token;

    constructor(@Inject(COMPTES_MODEL_PROVIDER) private readonly compteModel: Model<CompteModel>) { }
    /**
     * 
     * @param email Identifiant de l'utilisateur
     * @param roles Statut de l'utilisateur
     */
    async creeToken(email, statut) {
        const expire = JWT_CONFIG.expiration,
          secret = JWT_CONFIG.secret;
        const userInfo = { email: email, statut: statut};
        this.token = jwt.sign(userInfo, secret, { expire });
        return this.token;
        // return {
        //   expiration: expire,
        //   token_acces: this.token
        // };
      }
      /**
       * Valider un compte utilisateur
        * @param id Identifiant de l'utilisateur
        * @param pass Mot de passe de l'utilisateur
       */
    //   async valideCompte(id, pass): Promise<CompteModel> {
    //     let compte = await this.compteModel.findOne({ compte:id, mdp:pass});
    //     if (compte) {
    //         return compte;
    //     }
    //     return null;
    //   }
}
