"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcMockServer = void 0;
const proto_loader = require("@grpc/proto-loader");
const log = require("debug");
const grpc = require("grpc");
const ProtoUtils_1 = require("./utils/ProtoUtils");
class GrpcMockServer {
    constructor(serverAddress = "127.0.0.1:50777") {
        this.serverAddress = serverAddress;
        this._server = new grpc.Server();
        this.server.bind(this.serverAddress, grpc.ServerCredentials.createInsecure());
    }
    addService(protoPath, pkgName, serviceName, implementations, protoLoadOptions) {
        const pkgDef = grpc.loadPackageDefinition(proto_loader.loadSync(protoPath, protoLoadOptions));
        const proto = ProtoUtils_1.ProtoUtils.getProtoFromPkgDefinition(pkgName, pkgDef);
        if (!proto) {
            throw new Error("Seems like the package name is wrong.");
        }
        if (!proto[serviceName]) {
            throw new Error("Seems like the service name is wrong.");
        }
        const service = proto[serviceName].service;
        this.server.addService(service, implementations);
        return this;
    }
    get server() {
        return this._server;
    }
    start() {
        log.debug("Starting gRPC mock server ...");
        this.server.start();
        return this;
    }
    stop() {
        log.debug("Stopping gRPC mock server ...");
        this.server.forceShutdown();
        return this;
    }
}
exports.GrpcMockServer = GrpcMockServer;
//# sourceMappingURL=GrpcMockServer.js.map