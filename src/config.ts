const config = {
    http: {
        port: process.env.port || process.env.PORT || 9090,
        host: process.env.host || process.env.HOST || 'localhost',
        protocol: process.env.protocol || 'http'
    }
}

class HttpUtility {
    static getBaseUrl(): string {
        return `${config.http.protocol}://${config.http.host}:${config.http.port}`;
    }

    static port(): number {
        return config.http.port;
    }

    static host(): string {
        return config.http.host;
    }

    static protocol(): string {
        return config.http.protocol;
    }
}

export { HttpUtility };





 

