import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { CompteModel } from './interfaces/compte.interface';
import { CreateCompteDto } from './dto/create-compte.dto';
import { COMPTE_MODEL_PROVIDER } from '../constants';

@Injectable()
export class ComptesService {
    constructor(
        @Inject(COMPTE_MODEL_PROVIDER) private readonly compteModel: Model<CompteModel>) { }

}
