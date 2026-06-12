import { initSync } from "/pkg/library-of-abyss-client.js";
let sharedImports = undefined;
function getSharedImports() {
    if (sharedImports === undefined) {
        sharedImports = { __wasm_split: { } };
        const mainExports = initSync(undefined, undefined);
        const { __wasm_split_shared0, memory, __indirect_function_table,  } = mainExports;
        Object.assign(sharedImports.__wasm_split, { __wasm_split_shared0, memory, __indirect_function_table,  });
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
        if (loadingModule === undefined) loadingModule = loader();
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
/* __library_route_view_16957140427314052933, __preview_route_view_16461140826036237788 */
const __chunk_5 = makeLoad(new URL("./chunk_5.wasm", import.meta.url), []);
/* __library_route_view_16957140427314052933, __preview_route_view_16461140826036237788, __settings_route_view_17963179042528677915 */
const __chunk_6 = makeLoad(new URL("./chunk_6.wasm", import.meta.url), []);
/* __library_route_view_16957140427314052933, __preview_route_view_16461140826036237788, __settings_route_view_17963179042528677915, __upload_route_view_6063885457500064581 */
const __chunk_7 = makeLoad(new URL("./chunk_7.wasm", import.meta.url), []);
/* __library_route_view_16957140427314052933, __preview_route_view_16461140826036237788, __upload_route_view_6063885457500064581 */
const __chunk_8 = makeLoad(new URL("./chunk_8.wasm", import.meta.url), []);
/* __library_route_view_16957140427314052933, __settings_route_view_17963179042528677915 */
const __chunk_9 = makeLoad(new URL("./chunk_9.wasm", import.meta.url), []);
/* __library_route_view_16957140427314052933, __settings_route_view_17963179042528677915, __upload_route_view_6063885457500064581 */
const __chunk_10 = makeLoad(new URL("./chunk_10.wasm", import.meta.url), []);
/* __library_route_view_16957140427314052933, __upload_route_view_6063885457500064581 */
const __chunk_11 = makeLoad(new URL("./chunk_11.wasm", import.meta.url), []);
/* __preview_route_view_16461140826036237788, __settings_route_view_17963179042528677915, __upload_route_view_6063885457500064581 */
const __chunk_12 = makeLoad(new URL("./chunk_12.wasm", import.meta.url), []);
/* __preview_route_view_16461140826036237788, __upload_route_view_6063885457500064581 */
const __chunk_13 = makeLoad(new URL("./chunk_13.wasm", import.meta.url), []);
/* __settings_route_view_17963179042528677915, __upload_route_view_6063885457500064581 */
const __chunk_14 = makeLoad(new URL("./chunk_14.wasm", import.meta.url), []);
export const __wasm_split_load___upload_route_view_6063885457500064581 = wrapAsyncCb(makeLoad(new URL("./split___upload_route_view_6063885457500064581.wasm", import.meta.url), [__chunk_7, __chunk_8, __chunk_10, __chunk_11, __chunk_12, __chunk_13, __chunk_14]));
export const __wasm_split_load___settings_route_view_17963179042528677915 = wrapAsyncCb(makeLoad(new URL("./split___settings_route_view_17963179042528677915.wasm", import.meta.url), [__chunk_6, __chunk_7, __chunk_9, __chunk_10, __chunk_12, __chunk_14]));
export const __wasm_split_load___preview_route_view_16461140826036237788 = wrapAsyncCb(makeLoad(new URL("./split___preview_route_view_16461140826036237788.wasm", import.meta.url), [__chunk_5, __chunk_6, __chunk_7, __chunk_8, __chunk_12, __chunk_13]));
export const __wasm_split_load___library_route_view_16957140427314052933 = wrapAsyncCb(makeLoad(new URL("./split___library_route_view_16957140427314052933.wasm", import.meta.url), [__chunk_5, __chunk_6, __chunk_7, __chunk_8, __chunk_9, __chunk_10, __chunk_11]));
