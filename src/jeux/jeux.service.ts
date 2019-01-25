import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';

import { Jeu } from './interfaces/jeu.interface';
import { CreateJeuDto } from './dto/create-jeu.dto';
import { JEU_MODEL_PROVIDER } from '../constants';

@Component()
export class JeuxService {
    constructor(
        @Inject(JEU_MODEL_PROVIDER) private readonly jeuxModel: Model<Jeu>) { }

    async create(createJeuDto: CreateJeuDto): Promise<Jeu> {
        const createdJeu = new this.jeuxModel(createJeuDto);
        return await createdJeu.save();
    }

    async findAll(): Promise<Jeu[]> {
        return await this.jeuxModel.find().exec();
    }
}