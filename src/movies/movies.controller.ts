import { Body, Controller, Delete, Get, Param,Patch,Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { moviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor (private readonly movieService: moviesService) {};

    @Get()
    getAll() :Movie[]{
        return this.movieService.getAll();
    }

    @Get('search')
    search(@Query('year') searchYear:string) {
        return `We are searching for a movie made after ${searchYear}`
    }

    @Get(':id')
    getOne(@Param('id') movieId: number):Movie { // @Param에 들어있는 인자와 위의 get :id는 같아야 한다. 
        //id라는 parameter를 movieId라는 argument에 string 타입으로저장하고 싶어
        return this.movieService.getOne(movieId);
    }
   
    @Post()
    create(@Body() movieData:CreateMovieDto){
        return this.movieService.create(movieData)
    }

    @Delete(':id')
    remove(@Param('id') movieId: number) {
        return this.movieService.deleteOne(movieId);
    }

    @Patch(':id')
    update(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.movieService.update(movieId,updateData)
    }
    
    
}
