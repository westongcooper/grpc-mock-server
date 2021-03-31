import * as grpc from "grpc";
export declare class GrpcMockServer {
    serverAddress: string;
    private readonly _server;
    constructor(serverAddress?: string);
    addService(protoPath: string, pkgName: string, serviceName: string, implementations: any, protoLoadOptions?: any): GrpcMockServer;
    get server(): grpc.Server;
    start(): GrpcMockServer;
    stop(): GrpcMockServer;
}
