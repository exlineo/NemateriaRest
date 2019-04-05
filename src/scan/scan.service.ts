import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';

import { ScanModel } from './interfaces/scan.interface';
import { CreateScanDto } from './dto/scan.dto';
import { NOTICES_MODEL_PROVIDER } from '../constants';

@Component()
export class ScanService {
    constructor(@Inject(NOTICES_MODEL_PROVIDER) private readonly ScanModel: Model<ScanModel>) { }

    async create(CreateScanDto: CreateScanDto): Promise<ScanModel> {
        const createdNotice = new this.ScanModel(CreateScanDto);
        return await createdNotice.save();
    }

    async findAll(): Promise<ScanModel[]> {
        return await this.ScanModel.find().exec();
    }
}