import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Delete, Query} from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Category } from "src/categories/category-enity";
import { Movie } from "./movie.entity";


@Controller('movies')
export class MovieController {
    constructor(private service: MovieService) {}

    @Get()
    findAll(@Query ('categoriId') categoryId?: Category): Promise<Movie[]> {
      if(categoryId){
        return this.service.findByCategory({
          id:Number(categoryId),
          }as Category);
      }
      return this.service.findAll();
      }
    
      @Get('id')
      async findById (@Param('id',new ParseUUIDPipe)id: string): Promise<Movie> {

        const found = await this.service.findById(id);

        if(!found){ 
          throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
        }

        return found;
      }
      
    @Post()
    create(@Body() movie:Movie):Promise<Movie>{
      return this.service.save(movie);
    }
    @Put(':id')
    async update (@Param('id', ParseUUIDPipe) id:string, @Body() movie: Movie) :Promise<Movie>{
      const found = await this.service.findById(id);

      if(!found){ 
        throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
      }

      movie.id = found.id;

      return this.service.save(movie);
    }
    @Delete(':id')
    @HttpCode(204)
      async remove (@Param('id', ParseUUIDPipe) id:string):Promise<void>{
        const found = await this.service.findById(id);
  
        if(!found){ 
          throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
        }
  
        return this.service.remove(id);
      }
}
