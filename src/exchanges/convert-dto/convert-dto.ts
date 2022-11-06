import { IsNumber, IsString} from "class-validator";

export class ConvertDto {
    @IsNumber()
    amount: number;

    @IsString()
    fromCurrency: string;

    @IsString()
    toCurrency: string;
}
