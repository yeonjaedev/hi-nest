import { NotFoundException } from '@nestjs/common';
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

  describe("getAll", () => {
    it('should return an array',() => {
      const result = service.getAll();
    expect(result).toBeInstanceOf(Array)
    })
  })

  describe("getOne()",() => {
    it("should return a movie",() => {
      service.create({title:"Test Movie",genres:['test'],year:2022})
      const movie = service.getOne(1)
      expect(movie).toBeDefined()
      expect(movie.id).toEqual(1)
    })

    it('should throw 404 error',() => {
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
        expect(e.message).toEqual('Movie with id 999 Not Found')
      }
    })
  })
});
