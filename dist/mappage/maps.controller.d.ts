import { CreateMapDto } from './dto/create-map.dto';
import { MapsService } from './maps.service';
import { MapModel } from './interfaces/map.interface';
export declare class MapsController {
    private readonly mapsService;
    constructor(mapsService: MapsService);
    creeMap(creeMapDto: CreateMapDto): Promise<MapModel>;
    findAll(): Promise<Array<MapModel>>;
    findUn(id: any): Promise<MapModel>;
    update(id: string, creeMapDto: CreateMapDto): Promise<MapModel>;
    remove(id: string): Promise<MapModel>;
}
