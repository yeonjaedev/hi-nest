import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoivesService {
    private movies:Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:string):Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if(!movie){
            throw new NotFoundException(`Movie with id ${id} Not Found`)
        }
        return movie
    }

    deleteOne(id:string) {
        this.getOne(id) // id 없을 때 에러 발생함
        this.movies = this.movies.filter(movie => movie.id !== parseInt(id));
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length +1,
            ...movieData
        })
    }
    update(id:string, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id)
        this.movies.push({...movie,...updateData})

    }
}
