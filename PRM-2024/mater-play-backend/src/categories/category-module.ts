import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryService } from "./category.service";
import { CategoryController } from "./Category.controller";
import { Category } from "./category-enity";

@Module({
    imports:[TypeOrmModule.forFeature([Category])],
    providers:[CategoryService],
    controllers:[CategoryController],
})
export class CategoryModule{}