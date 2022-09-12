import { Body, Controller, Delete, Get, Param,Patch,Post, Put, Query } from '@nestjs/common';
import { create } from 'domain';
import { Movie } from 'src/moives/entities/movie.entity';
import { MoivesService } from 'src/moives/moives.service';

@Controller('movies')
export class MoviesController {

    constructor (private readonly movieService: MoivesService) {};

    @Get()
    getAll() :Movie[]{
        return this.movieService.getAll();
    }

    @Get('search')
    search(@Query('year') searchYear:string) {
        return `We are searching for a movie made after ${searchYear}`
    }

    @Get(':id')
    getOne(@Param('id') movieId: string):Movie { // @Param에 들어있는 인자와 위의 get :id는 같아야 한다. 
        //id라는 parameter를 movieId라는 argument에 string 타입으로저장하고 싶어
        return this.movieService.getOne(movieId);
    }
   
    @Post()
    create(@Body() movieData){
        return this.movieService.create(movieData)
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return this.movieService.deleteOne(movieId);
    }

    @Patch(':id')
    update(@Param('id') movieId: string, @Body() updateData) {
        return this.movieService.update(movieId,updateData)
    }
    
    
}
