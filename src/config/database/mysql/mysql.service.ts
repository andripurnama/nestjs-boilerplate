import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import MysqlServiceInterface from './mysql-service.interface';

@Injectable()
export class MysqlService implements MysqlServiceInterface {
    constructor(private configService: ConfigService) {}

    get host(): string {
        return this.configService.get<string>('db.host') ?? '';
    }

    get database(): string {
        return this.configService.get<string>('db.name') ?? '';
    }

    get user(): string {
        return this.configService.get<string>('db.user') ?? '';
    }

    get password(): string {
        return this.configService.get<string>('db.password') ?? '';
    }

    get port(): number {
        return Number(this.configService.get<number>('db.port'));
    }
}
