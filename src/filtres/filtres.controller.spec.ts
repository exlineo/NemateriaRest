import { Test, TestingModule } from '@nestjs/testing';
import { FiltresController } from './filtres.controller';

describe('Filtres Controller', () => {
  let controller: FiltresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiltresController],
    }).compile();

    controller = module.get<FiltresController>(FiltresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
