import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { ScanModel } from './interfaces/scan.interface';
import { CreateScanDto } from './dto/scan.dto';
import { SCAN_MODEL_PROVIDER } from '../constants';

@Injectable()
export class ScanService {
    constructor(@Inject(SCAN_MODEL_PROVIDER) private readonly scanModel: Model<ScanModel>) { }

    async create(createScanDto: CreateScanDto): Promise<ScanModel> {
        const createdNotice = new this.scanModel(createScanDto);
        return await createdNotice.save();
    }

    async findAll(): Promise<ScanModel[]> {
        return await this.scanModel.find().exec();
    }
}