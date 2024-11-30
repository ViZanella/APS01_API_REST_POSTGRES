import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { Category } from "src/entities/category-enity";
import { CategoryService } from "src/services/category.service";

@Controller('categories')
export class CategoryController {
    constructor(private service: CategoryService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.service.findAll();
      }
    
      @Get('id')
      async findById (@Param('id',new ParseIntPipe)id: number): Promise<Category> {

        const found = await this.service.findById(id);

        if(!found){ 
          throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
        }
        return found;
      }

    @Post()
    create(@Body() Category:Category):Promise<Category>{
      return this.service.save(Category);
    }
    @Put(':id')
    async update (@Param('id', ParseIntPipe) id:number, @Body() category: Category):Promise<Category>{
      const found = await this.service.findById(id);

      if(!found){ 
        throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
      }

      category.id = found.id;

      return this.service.save(category);
    }
    @Delete(':id')
    @HttpCode(204)
      async remove (@Param('id', ParseIntPipe) id:number):Promise<void>{
        const found = await this.service.findById(id);
  
        if(!found){ 
          throw new HttpException('Filme não encontrado', HttpStatus.NOT_FOUND);
        }
  
        return this.service.remove(id);
      }
}