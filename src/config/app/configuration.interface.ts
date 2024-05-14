export default interface AppConfigInterface {
    get name(): string;
    get env(): string;
    get url(): string;
    get port(): number;
}
