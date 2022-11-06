import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangesModule } from './exchanges/exchanges.module';

@Module({
  imports: [ExchangesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
