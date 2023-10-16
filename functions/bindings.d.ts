export type Bindings = {
    EDGESTATUS: KVNamespace;
};

declare global {
    function getMiniflareBindings(): Bindings;
}
