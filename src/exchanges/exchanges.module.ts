import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExchangesController } from './exchanges.controller';
import { ExchangesService } from './exchanges.service';

@Module({
  controllers: [ExchangesController],
  imports: [HttpModule],
  providers: [ExchangesService]
})
export class ExchangesModule {}
