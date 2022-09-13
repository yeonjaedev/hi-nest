import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { moviesService } from './movies.service';

@Module({
    controllers:[MoviesController],
    providers:[moviesService]
})
export class MoviesModule {}
