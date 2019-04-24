import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateScanDto } from './dto/scan.dto';
import { ScanService } from './scan.service';
import { ScanModel } from './interfaces/scan.interface';

@Controller('scans')
export class ScanController {
    constructor(private readonly scanService: ScanService) { }

    @Post()
    async create(@Body() CreateScanDto: CreateScanDto) {
        this.scanService.create(CreateScanDto);
    }

    @Get()
    async findAll(): Promise<ScanModel[]> {
        return this.scanService.findAll();
    }
}