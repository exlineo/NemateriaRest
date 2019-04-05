import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateScanDto } from './dto/scan.dto';
import { ScanService } from './scan.service';
import { ScanModel } from './interfaces/scan.interface';

@Controller('Scan')
export class ScanController {
    constructor(private readonly ScanService: ScanService) { }

    @Post()
    async create(@Body() CreateScanDto: CreateScanDto) {
        this.ScanService.create(CreateScanDto);
    }

    @Get()
    async findAll(): Promise<ScanModel[]> {
        return this.ScanService.findAll();
    }
}