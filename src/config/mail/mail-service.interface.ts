export default interface MailServiceInterface {
    get provider(): string;
    get user(): string;
    get password(): string;
    get port(): number;
}
