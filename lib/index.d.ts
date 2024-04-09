export interface NodeGlobalProxyConfig {
    http: string;
    https: string;
}
export declare class NodeGlobalProxy {
    config: NodeGlobalProxyConfig;
    started: boolean;
    MAJOR_NODEJS_VERSION: number;
    constructor();
    system(): void;
    setConfig(config?: NodeGlobalProxyConfig | string): void;
    getConfig(): NodeGlobalProxyConfig;
    start(): void;
    stop(): void;
}
declare const _default: NodeGlobalProxy;
export default _default;
