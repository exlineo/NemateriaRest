import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NoticesService } from './notices.service';
import { NoticeModel } from './interfaces/notice.interface';

@Controller('notices')
export class NoticesController {
    constructor(private readonly noticesService: NoticesService) { }

    @Post()
    async create(@Body() CreateNoticeDto: CreateNoticeDto) {
        this.noticesService.create(CreateNoticeDto);
    }

    @Get()
    async findAll(): Promise<NoticeModel[]> {
        return this.noticesService.findAll();
    }
}