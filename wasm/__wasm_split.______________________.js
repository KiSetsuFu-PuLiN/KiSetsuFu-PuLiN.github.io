import { initSync } from "./library-of-fantasia-client.js";
let sharedImports = undefined;
function getSharedImports() {
    if (sharedImports === undefined) {
        sharedImports = { __wasm_split: {  } };
        const mainExports = initSync(undefined, undefined);
        const { __indirect_function_table, __wasm_split_shared1, memory,  } = mainExports;
        Object.assign(sharedImports.__wasm_split, { __indirect_function_table, __wasm_split_shared1, memory,  });
    }
    return sharedImports;
}
function wrapAsyncCb(callee) {
    return async (callbackIndex, callbackData) => {
        let success;
        try {
            await callee();
            success = true;
        } catch (e) {
            console.error(e);
            success = false;
        } finally {
            const sharedImports = getSharedImports();
            sharedImports.__wasm_split.__indirect_function_table.get(callbackIndex)(callbackData, success);
        }
    }
}
function makeLoad(fetchOpts, deps) {
    const fetcher = makeFetch(fetchOpts);
    const loader = async () => {
        const parallelStuff = deps.map(d => d());
        const instantiate = fetcher();
        await Promise.all(parallelStuff);
        const imports = getSharedImports();
        return instantiate(imports);
    };
    let loadingModule = undefined;
    return () => {
        if (loadingModule === undefined) {
            const thisLoad = loader();
            // Memoize successes only: a rejected load must not be cached for
            // the lifetime of the session, or one transient network failure
            // permanently breaks the module. Clearing on rejection lets the
            // next call (e.g. the Rust side re-invoking load after a failed
            // callback) start a fresh attempt.
            thisLoad.catch(() => {
                if (loadingModule === thisLoad) loadingModule = undefined;
            });
            loadingModule = thisLoad;
        }
        return loadingModule;
    }
}
function makeFetch(srcUrl) {
    if (srcUrl === undefined) {
        return () => { return async (_imports) => { return {} } };
    }
    return () => {
        const src = fetch(srcUrl);
        return async (imports) => {
            return await WebAssembly.instantiateStreaming(src, imports);
        }
    }
}
/* view_12184645452386092324, view_13986667979909395837 */
const __chunk_6 = makeLoad(new URL("./chunk_6.wasm", import.meta.url), []);
/* view_12184645452386092324, view_13986667979909395837, view_15620111787578887826 */
const __chunk_7 = makeLoad(new URL("./chunk_7.wasm", import.meta.url), []);
/* view_12184645452386092324, view_13986667979909395837, view_15620111787578887826, view_18373699804174959462 */
const __chunk_8 = makeLoad(new URL("./chunk_8.wasm", import.meta.url), []);
/* view_12184645452386092324, view_13986667979909395837, view_15620111787578887826, view_18373699804174959462, view_201137919517754873 */
const __chunk_9 = makeLoad(new URL("./chunk_9.wasm", import.meta.url), []);
/* view_12184645452386092324, view_13986667979909395837, view_18373699804174959462 */
const __chunk_10 = makeLoad(new URL("./chunk_10.wasm", import.meta.url), []);
/* view_12184645452386092324, view_13986667979909395837, view_18373699804174959462, view_201137919517754873 */
const __chunk_11 = makeLoad(new URL("./chunk_11.wasm", import.meta.url), []);
/* view_12184645452386092324, view_13986667979909395837, view_201137919517754873 */
const __chunk_12 = makeLoad(new URL("./chunk_12.wasm", import.meta.url), []);
/* view_12184645452386092324, view_18373699804174959462 */
const __chunk_13 = makeLoad(new URL("./chunk_13.wasm", import.meta.url), []);
/* view_12184645452386092324, view_18373699804174959462, view_201137919517754873 */
const __chunk_14 = makeLoad(new URL("./chunk_14.wasm", import.meta.url), []);
/* view_12184645452386092324, view_201137919517754873 */
const __chunk_15 = makeLoad(new URL("./chunk_15.wasm", import.meta.url), []);
/* view_13986667979909395837, view_15620111787578887826 */
const __chunk_16 = makeLoad(new URL("./chunk_16.wasm", import.meta.url), []);
/* view_13986667979909395837, view_15620111787578887826, view_18373699804174959462, view_201137919517754873 */
const __chunk_17 = makeLoad(new URL("./chunk_17.wasm", import.meta.url), []);
/* view_13986667979909395837, view_18373699804174959462 */
const __chunk_18 = makeLoad(new URL("./chunk_18.wasm", import.meta.url), []);
/* view_13986667979909395837, view_18373699804174959462, view_201137919517754873 */
const __chunk_19 = makeLoad(new URL("./chunk_19.wasm", import.meta.url), []);
/* view_13986667979909395837, view_201137919517754873 */
const __chunk_20 = makeLoad(new URL("./chunk_20.wasm", import.meta.url), []);
/* view_18373699804174959462, view_201137919517754873 */
const __chunk_21 = makeLoad(new URL("./chunk_21.wasm", import.meta.url), []);
export const __wasm_split_load_view_201137919517754873 = wrapAsyncCb(makeLoad(new URL("./split_view_201137919517754873.wasm", import.meta.url), [__chunk_9, __chunk_11, __chunk_12, __chunk_14, __chunk_15, __chunk_17, __chunk_19, __chunk_20, __chunk_21]));
export const __wasm_split_load_view_18373699804174959462 = wrapAsyncCb(makeLoad(new URL("./split_view_18373699804174959462.wasm", import.meta.url), [__chunk_8, __chunk_9, __chunk_10, __chunk_11, __chunk_13, __chunk_14, __chunk_17, __chunk_18, __chunk_19, __chunk_21]));
export const __wasm_split_load_view_15620111787578887826 = wrapAsyncCb(makeLoad(new URL("./split_view_15620111787578887826.wasm", import.meta.url), [__chunk_7, __chunk_8, __chunk_9, __chunk_16, __chunk_17]));
export const __wasm_split_load_view_13986667979909395837 = wrapAsyncCb(makeLoad(new URL("./split_view_13986667979909395837.wasm", import.meta.url), [__chunk_6, __chunk_7, __chunk_8, __chunk_9, __chunk_10, __chunk_11, __chunk_12, __chunk_16, __chunk_17, __chunk_18, __chunk_19, __chunk_20]));
export const __wasm_split_load_view_12184645452386092324 = wrapAsyncCb(makeLoad(new URL("./split_view_12184645452386092324.wasm", import.meta.url), [__chunk_6, __chunk_7, __chunk_8, __chunk_9, __chunk_10, __chunk_11, __chunk_12, __chunk_13, __chunk_14, __chunk_15]));
