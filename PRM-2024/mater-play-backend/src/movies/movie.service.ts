import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Movie } from "./movie.entity";
import { Category } from "src/categories/category-enity";

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private repository: Repository<Movie>,
      ) {}

    findAll(): Promise<Movie[]>{
        return this.repository.find();
}
findByCategory(category: Category): Promise<Movie[]> {
  return this.repository.find({
    where:{
      categories:{
        id:category.id
      },
    },
  });
}

    findById(id: string): Promise<Movie> {
        return this.repository.findOneBy({ id: id });
    }
  
    save(Movie:Movie):Promise<Movie>{
      return this.repository.save(Movie);
    }
    async remove(id:string):Promise<void>{
      await this.repository.delete(id);
    }
  }