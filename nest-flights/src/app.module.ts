import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
//import { FlightsController } from './flights/flights.controller';
//import { FlightsService } from './flights/flights.service';
import { FlightsModule } from './flights/flights.module';
import { Flights } from './flights/flights.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'transportation',
      entities: [Flights],
      synchronize: false,
    }),
    FlightsModule]
//  controllers: [AppController, FlightsController],
//  providers: [AppService, FlightsService],
})
export class AppModule {}
