"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoUtils = void 0;
class ProtoUtils {
    static getProtoFromPkgDefinition(pkgName, pkgDef) {
        const pathArr = pkgName.split(".");
        return pathArr.reduce((obj, key) => {
            return (obj && obj[key] !== "undefined") ? obj[key] : undefined;
        }, pkgDef);
    }
}
exports.ProtoUtils = ProtoUtils;
//# sourceMappingURL=ProtoUtils.js.map