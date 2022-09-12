import { Controller, Delete, Get, Param,Patch,Post, Put } from '@nestjs/common';
import { create } from 'domain';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'this will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) { // @Param에 들어있는 인자와 위의 get :id는 같아야 한다. 
        //id라는 parameter를 movieId라는 argument에 string 타입으로저장하고 싶어
        return `This will return one movie with the id : ${movieId}`;
    }

    @Post()
    create(){
        return 'this will create a movie';
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `this will remove a movie with the id : ${movieId}`;
    }

    @Patch(':id')
    update(@Param('id') movieId: string) {
        return `this will update a movie with the id : ${movieId}`;
    }
}
