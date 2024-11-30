
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { CategoryModule } from './categories/category-module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,5
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule,
  ],
})
export class AppModule {}

