import { Test, TestingModule } from '@nestjs/testing';
import { FiltresService } from './filtres.service';

describe('FiltresService', () => {
  let service: FiltresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiltresService],
    }).compile();

    service = module.get<FiltresService>(FiltresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
