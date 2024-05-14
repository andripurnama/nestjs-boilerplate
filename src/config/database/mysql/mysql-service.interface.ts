export default interface MysqlServiceInterface {
    get host(): string;

    get database(): string;

    get user(): string;

    get password(): string;

    get port(): number;
}
