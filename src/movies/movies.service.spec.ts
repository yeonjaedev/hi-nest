import { Test, TestingModule } from '@nestjs/testing';
import { moviesService } from './movies.service';

describe('moviesService', () => {
  let service: moviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [moviesService],
    }).compile();

    service = module.get<moviesService>(moviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
