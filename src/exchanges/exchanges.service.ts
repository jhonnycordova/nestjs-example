import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, map } from 'rxjs';
import { ConvertDto } from './convert-dto/convert-dto';

@Injectable()
export class ExchangesService {
    constructor(private httpSrv: HttpService){}

    async convert(request: ConvertDto): Promise<Object> {
        // TODO: app_id could come from env variables instead
        const URL_API = `https://openexchangerates.org/api/latest.json?app_id=820d3704aa1a42e7b3cc188b502273ce&base=${request.fromCurrency}`;

        const response = this.httpSrv.get(URL_API)
        .pipe(map((res) => res.data))
        .pipe(
          catchError(() => {
            throw new ForbiddenException('API not available');
          }),
        );

        const apiReponse = await firstValueFrom(response);

        return {
            convertedAmount: request.amount * apiReponse.rates[request.toCurrency]
        }
    }
}
