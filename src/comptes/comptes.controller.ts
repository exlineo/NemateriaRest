import { Controller, Get } from '@nestjs/common';
import { ComptesService } from './comptes.service';

@Controller('comptes')
export class ComptesController {
    constructor(private readonly compteService:ComptesService) { }

    @Get()
    async find(): Promise<any> {
        
    }
}
