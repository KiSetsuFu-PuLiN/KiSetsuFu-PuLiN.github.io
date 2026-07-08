/* tslint:disable */
/* eslint-disable */
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */

export type ReadableStreamType = "bytes";

export class IntoUnderlyingByteSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableByteStreamController): Promise<any>;
    start(controller: ReadableByteStreamController): void;
    readonly autoAllocateChunkSize: number;
    readonly type: ReadableStreamType;
}

export class IntoUnderlyingSink {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    abort(reason: any): Promise<any>;
    close(): Promise<any>;
    write(chunk: any): Promise<any>;
}

export class IntoUnderlyingSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableStreamDefaultController): Promise<any>;
}

/**
 * cargo-leptos CSR 入口：由生成的 JS glue 在 WASM 加载后调用。
 */
export function hydrate(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly hydrate: () => void;
    readonly __wasm_split_00parse_list_entries_495699008166880339400_export_673a3340222ef9dbca4f3e6a01045e5a_parse_list_entries: (a: number, b: number, c: number) => void;
    readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
    readonly intounderlyingsink_abort: (a: number, b: number) => number;
    readonly intounderlyingsink_close: (a: number) => number;
    readonly intounderlyingsink_write: (a: number, b: number) => number;
    readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
    readonly intounderlyingsource_cancel: (a: number) => void;
    readonly intounderlyingsource_pull: (a: number, b: number) => number;
    readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
    readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
    readonly intounderlyingbytesource_cancel: (a: number) => void;
    readonly intounderlyingbytesource_pull: (a: number, b: number) => number;
    readonly intounderlyingbytesource_start: (a: number, b: number) => void;
    readonly intounderlyingbytesource_type: (a: number) => number;
    readonly memory: WebAssembly.Memory;
    readonly __indirect_function_table: WebAssembly.Table;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h903a9ac0977ba0fbE: (a: number, b: number, c: number) => [number, number];
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h3712b95b5d34dab5E: (a: number, b: number, c: number, d: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17hf634d84be850c51fE: (a: number, b: number, c: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h77dd5573a8ca3a06E: (a: number, b: number, c: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h5669ba0a12261eafE: (a: number, b: number, c: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h1ef9bf5cb9ee9ab9E: (a: number, b: number) => number;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h20a74bbbcff66637E: (a: number, b: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h92f45605d3c99b3eE: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
