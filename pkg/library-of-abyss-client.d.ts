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
    readonly __wasm_split_00parse_list_entries_79675364229865071000_export_3144c6a25ff84205b7c84ce88226046a_parse_list_entries: (a: number, b: number, c: number) => void;
    readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
    readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
    readonly intounderlyingbytesource_cancel: (a: number) => void;
    readonly intounderlyingbytesource_pull: (a: number, b: number) => number;
    readonly intounderlyingbytesource_start: (a: number, b: number) => void;
    readonly intounderlyingbytesource_type: (a: number) => number;
    readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
    readonly intounderlyingsink_abort: (a: number, b: number) => number;
    readonly intounderlyingsink_close: (a: number) => number;
    readonly intounderlyingsink_write: (a: number, b: number) => number;
    readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
    readonly intounderlyingsource_cancel: (a: number) => void;
    readonly intounderlyingsource_pull: (a: number, b: number) => number;
    readonly memory: WebAssembly.Memory;
    readonly __indirect_function_table: WebAssembly.Table;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17he0c0dbf706401857E: (a: number, b: number, c: number) => [number, number];
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17hb9389d30aeded9daE: (a: number, b: number, c: number, d: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h589d09437bd1b2b0E: (a: number, b: number, c: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h439c50998b442413E: (a: number, b: number, c: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h654140c010afa9e0E: (a: number, b: number, c: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17he16d39720cd6c93fE: (a: number, b: number) => number;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17hff99780cf58d9ed7E: (a: number, b: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h6c37845d32f56765E: (a: number, b: number) => void;
    readonly _ZN12wasm_bindgen7convert8closures1_6invoke17h576776264485d906E: (a: number, b: number) => void;
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
