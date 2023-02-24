
export interface ILogger {
    Log(): void;
}

export class BaseLogger implements ILogger {
    Log(): void { }
}


export class ConsoleLogger extends BaseLogger {
    override Log(): void {
        console.log('console logger');
    }
}

export class DatabaseLogger extends BaseLogger {
    override Log(): void {
        console.log('database logger');
    }
}