import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    connection: process.env.DB_CONNECTION,
}));
