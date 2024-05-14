import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import AppConfigInterface from './configuration.interface';
@Injectable()
export class AppConfigService implements AppConfigInterface {
    constructor(private readonly configService: NestConfigService) {}
    get name(): string {
        return (
            this.configService.get<string>('app.name', { infer: true }) ?? ''
        );
    }
    get env(): string {
        return this.configService.get<string>('app.env', { infer: true }) ?? '';
    }
    get url(): string {
        return this.configService.get<string>('app.url', { infer: true }) ?? '';
    }
    get port(): number {
        return Number(this.configService.get<number>('app.port'));
    }
}
