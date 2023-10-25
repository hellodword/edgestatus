export type Bindings = {
    EDGESTATUS: KVNamespace;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
};

declare global {
    function getMiniflareBindings(): Bindings;
}
