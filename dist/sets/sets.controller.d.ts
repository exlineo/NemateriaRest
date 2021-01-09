import { CreateSetDto } from './dto/create-set.dto';
import { SetsService } from './sets.service';
import { SetModel } from './interfaces/set.interface';
export declare class SetsController {
    private readonly setsService;
    constructor(setsService: SetsService);
    cree(creeSet: CreateSetDto): Promise<SetModel>;
    findAll(): Promise<Array<SetModel>>;
    findUn(id: any): Promise<SetModel>;
    update(id: string, creeSetDto: CreateSetDto): Promise<SetModel>;
    remove(id: string): Promise<SetModel>;
}
