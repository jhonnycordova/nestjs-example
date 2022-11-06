import { Controller, Get, Query } from '@nestjs/common';
import { ConvertDto } from './convert-dto/convert-dto';
import { ExchangesService } from './exchanges.service';

@Controller('exchanges')
export class ExchangesController {
    constructor (private exchangeSrv: ExchangesService) {}
    
    @Get('/converted-amount')
    exchange(@Query() request: ConvertDto): Object {

        // TODO: You can validate the query here.

        return this.exchangeSrv.convert(request);
    }
}
