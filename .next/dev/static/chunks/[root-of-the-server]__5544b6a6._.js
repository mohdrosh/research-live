(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [client] (ecmascript)");
;
;
;
function connect(param) {
    var addMessageListener = param.addMessageListener, sendMessage = param.sendMessage, _param_onUpdateError = param.onUpdateError, onUpdateError = _param_onUpdateError === void 0 ? console.error : _param_onUpdateError;
    addMessageListener(function(msg) {
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(var i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    var queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(param, 2), chunkPath = _param[0], callback = _param[1];
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = queued[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), chunkPath = _step_value[0], callback = _step_value[1];
                subscribeToChunkUpdate(chunkPath, sendMessage, callback);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
}
var updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({
        type: 'turbopack-subscribe'
    }, resource));
    return function() {
        sendJSON(sendMessage, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({
            type: 'turbopack-unsubscribe'
        }, resource));
    };
}
function handleSocketConnected(sendMessage) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = updateCallbackSets.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            subscribeToUpdates(sendMessage, JSON.parse(key));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
// we aggregate all pending updates until the issues are resolved
var chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    var key = resourceKey(msg.resource);
    var aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunkListsWithPendingUpdates.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var msg = _step.value;
            triggerUpdate(msg);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    var chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    var merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            var update = updateA.merged[0];
            for(var i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(var i1 = 0; i1 < updateB.merged.length; i1++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i1]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks: chunks,
        merged: merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    var chunks = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(chunksA)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), chunkPath = _step_value[0], chunkUpdateA = _step_value[1];
            var chunkUpdateB = chunksB[chunkPath];
            if (chunkUpdateB != null) {
                var mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
                if (mergedUpdate != null) {
                    chunks[chunkPath] = mergedUpdate;
                }
            } else {
                chunks[chunkPath] = chunkUpdateA;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = Object.entries(chunksB)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step1.value, 2), chunkPath1 = _step_value1[0], chunkUpdateB1 = _step_value1[1];
            if (chunks[chunkPath1] == null) {
                chunks[chunkPath1] = chunkUpdateB1;
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    var entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    var chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries: entries,
        chunks: chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, entriesA, entriesB);
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    var chunks = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(chunksA)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), chunkPath = _step_value[0], chunkUpdateA = _step_value[1];
            var chunkUpdateB = chunksB[chunkPath];
            if (chunkUpdateB != null) {
                var mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
                if (mergedUpdate != null) {
                    chunks[chunkPath] = mergedUpdate;
                }
            } else {
                chunks[chunkPath] = chunkUpdateA;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = Object.entries(chunksB)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step1.value, 2), chunkPath1 = _step_value1[0], chunkUpdateB1 = _step_value1[1];
            if (chunks[chunkPath1] == null) {
                chunks[chunkPath1] = chunkUpdateB1;
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        var added = [];
        var deleted = [];
        var _updateA_modules;
        var deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var _updateB_modules;
        var addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = addedModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var moduleId = _step.value;
                if (!deletedModules.has(moduleId)) {
                    added.push(moduleId);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = deletedModules[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var moduleId1 = _step1.value;
                if (!addedModules.has(moduleId1)) {
                    deleted.push(moduleId1);
                }
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added: added,
            deleted: deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added;
        var added1 = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : []).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : [])));
        var _updateA_deleted, _updateB_deleted;
        var deleted1 = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : []).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : [])));
        if (updateB.added != null) {
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = updateB.added[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var moduleId2 = _step2.value;
                    deleted1.delete(moduleId2);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
        if (updateB.deleted != null) {
            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
            try {
                for(var _iterator3 = updateB.deleted[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                    var moduleId3 = _step3.value;
                    added1.delete(moduleId3);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
        return {
            type: 'partial',
            added: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(added1),
            deleted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(deleted1)
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1;
        var modules = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : []).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : [])));
        var _updateB_deleted1;
        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
        try {
            for(var _iterator4 = ((_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : [])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var moduleId4 = _step4.value;
                modules.delete(moduleId4);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                }
            } finally{
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
        return {
            type: 'added',
            modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(modules)
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        var modules1 = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
            try {
                for(var _iterator5 = updateA.added[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                    var moduleId5 = _step5.value;
                    modules1.delete(moduleId5);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                        _iterator5.return();
                    }
                } finally{
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
        return {
            type: 'deleted',
            modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(modules1)
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
var CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    var aI = list.indexOf(a) + 1 || list.length;
    var bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
var chunksWithIssues = new Map();
function emitIssues() {
    var issues = [];
    var deduplicationSet = new Set();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunksWithIssues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), _ = _step_value[0], chunkIssues = _step_value[1];
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = chunkIssues[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var chunkIssue = _step1.value;
                    if (deduplicationSet.has(chunkIssue.formatted)) continue;
                    issues.push(chunkIssue);
                    deduplicationSet.add(chunkIssue.formatted);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    var key = resourceKey(msg.resource);
    var hasCriticalIssues = false;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = msg.issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var issue = _step.value;
            if (CRITICAL.includes(issue.severity)) {
                hasCriticalIssues = true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
var SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
var CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort(function(a, b) {
        var first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
var hooks = {
    beforeRefresh: function() {},
    refresh: function() {},
    buildOk: function() {},
    issues: function(_issues) {}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            var runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    var key = resourceKey(resource);
    var callbackSet;
    var existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return function() {
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    var key = resourceKey(msg.resource);
    var callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = callbackSet.callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var callback = _step.value;
            callback(msg);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/components/App.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.mjs [client] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.mjs [client] (ecmascript) <export default as Link2>");
;
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
var App = function() {
    var _getAdvancedSearchSuggestions;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('upload'), 2), currentView = _useState[0], setCurrentView = _useState[1]; // 'upload', 'form', 'search'
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), uploadedFile = _useState1[0], setUploadedFile = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isProcessing = _useState2[0], setIsProcessing = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), formData = _useState3[0], setFormData = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), searchQuery = _useState4[0], setSearchQuery = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        field: true,
        method: true,
        application: false,
        beamline: false,
        year: false
    }), 2), showFilters = _useState5[0], setShowFilters = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), showAdvancedSearch = _useState6[0], setShowAdvancedSearch = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), advancedSearchQuery = _useState7[0], setAdvancedSearchQuery = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), selectedPath = _useState8[0], setSelectedPath = _useState8[1];
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), currentBranch = _useState9[0], setCurrentBranch = _useState9[1];
    var _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            boolean: 'AND',
            term: '',
            field: 'all'
        }
    ]), 2), advancedSearchRows = _useState10[0], setAdvancedSearchRows = _useState10[1];
    var _useState11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), selectedDisciplines = _useState11[0], setSelectedDisciplines = _useState11[1];
    var _useState12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), dateFrom = _useState12[0], setDateFrom = _useState12[1];
    var _useState13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), dateTo = _useState13[0], setDateTo = _useState13[1];
    var _useState14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), selectedItemTypes = _useState14[0], setSelectedItemTypes = _useState14[1];
    var _useState15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        field: [],
        method: [],
        application: [],
        beamline: [],
        year: []
    }), 2), selectedFilters = _useState15[0], setSelectedFilters = _useState15[1];
    var _useState16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), viewingPaper = _useState16[0], setViewingPaper = _useState16[1];
    var _useState17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), papers = _useState17[0], setPapers = _useState17[1];
    var _useState18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), selectedRelatedPapers = _useState18[0], setSelectedRelatedPapers = _useState18[1];
    var _useState19 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), pdfText = _useState19[0], setPdfText = _useState19[1];
    // AI Analysis Function
    var analyzePDF = function(base64Data, filename) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var response, errorText, data, error;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            5,
                            ,
                            6
                        ]);
                        console.log('Starting PDF analysis...');
                        console.log('PDF filename:', filename);
                        return [
                            4,
                            fetch('/api/analyze-pdf', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    base64Data: base64Data
                                })
                            })
                        ];
                    case 1:
                        response = _state.sent();
                        console.log('API response status:', response.status);
                        if (!!response.ok) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            response.text()
                        ];
                    case 2:
                        errorText = _state.sent();
                        console.error('API error response:', errorText);
                        throw new Error("API error: ".concat(response.status));
                    case 3:
                        return [
                            4,
                            response.json()
                        ];
                    case 4:
                        data = _state.sent();
                        console.log('Successfully received analysis:', data);
                        return [
                            2,
                            data
                        ];
                    case 5:
                        error = _state.sent();
                        console.error('Detailed error in analyzePDF:', error);
                        throw new Error("PDF分析エラー: ".concat(error.message));
                    case 6:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var relationshipTypes = [
        'Cited',
        'Builds upon',
        'Contradicts',
        'Extends',
        'Similar method',
        'Different approach',
        'Complements'
    ];
    // サンプル研究データ (Sample Research Data)
    var samplePapersInitial = [
        {
            id: 1,
            title: '高エネルギーX線回折による新規触媒材料の構造解析',
            titleEn: 'Structural Analysis of Novel Catalyst Materials using High-Energy X-ray Diffraction',
            authors: 'Hatsui, T., Takeshita, K.',
            year: 2024,
            field: '材料科学 (Materials Science)',
            method: 'X線回折 (X-ray Diffraction)',
            beamline: 'BL19B2',
            application: '自動車産業 (Automotive)',
            mainConclusion: '新規Pt-Co合金触媒の原子配列構造を解明し、触媒活性が30%向上することを実証',
            industrialApplication: '自動車用燃料電池の効率向上、環境触媒技術',
            crossDomain: '化学工学、エネルギー工学への応用可能',
            failedApproach: '従来のTEM観察では動的変化を捉えられなかった'
        },
        {
            id: 2,
            title: 'タンパク質結晶構造解析による創薬ターゲット同定',
            titleEn: 'Drug Target Identification through Protein Crystal Structure Analysis',
            authors: 'Yamamoto, M., Tanaka, Y.',
            year: 2024,
            field: '生命科学 (Life Sciences)',
            method: 'X線結晶構造解析 (X-ray Crystallography)',
            beamline: 'BL41XU',
            application: '製薬・医療 (Pharmaceutical)',
            mainConclusion: '新規抗がん剤標的タンパク質の活性部位構造を原子レベルで解明',
            industrialApplication: '製薬業界における新薬開発、個別化医療',
            crossDomain: '構造生物学、計算化学への展開',
            failedApproach: '低温凍結条件では生理的構造が維持できなかった'
        },
        {
            id: 3,
            title: 'ナノ材料の時間分解分光による電子状態ダイナミクス研究',
            titleEn: 'Electronic State Dynamics of Nanomaterials via Time-Resolved Spectroscopy',
            authors: 'Sato, K., Nakamura, H.',
            year: 2023,
            field: 'ナノサイエンス (Nanoscience)',
            method: '時間分解分光 (Time-Resolved Spectroscopy)',
            beamline: 'BL43IR',
            application: 'エネルギー産業 (Energy)',
            mainConclusion: '量子ドットの励起状態寿命が表面修飾により10倍延長可能',
            industrialApplication: '高効率太陽電池、量子コンピュータ素子開発',
            crossDomain: '半導体工学、光エレクトロニクス',
            failedApproach: '室温測定では熱揺らぎの影響が大きすぎた'
        },
        {
            id: 4,
            title: '高分子材料の放射光X線小角散乱による階層構造解析',
            titleEn: 'Hierarchical Structure Analysis of Polymer Materials by Synchrotron SAXS',
            authors: 'Kobayashi, R., Ishida, M.',
            year: 2023,
            field: '高分子科学 (Polymer Science)',
            method: '小角X線散乱 (SAXS)',
            beamline: 'BL40B2',
            application: '化学産業 (Chemical)',
            mainConclusion: '新規生分解性プラスチックのナノ構造制御により強度が2倍向上',
            industrialApplication: '環境対応型プラスチック製品、包装材料の高性能化',
            crossDomain: '材料工学、環境科学への応用',
            failedApproach: '従来のDSC測定では階層構造の詳細が不明瞭だった'
        },
        {
            id: 5,
            title: '磁性材料のX線磁気円二色性による電子状態観察',
            titleEn: 'Electronic State Observation of Magnetic Materials by XMCD',
            authors: 'Fujimoto, S., Watanabe, K.',
            year: 2024,
            field: '物性物理学 (Condensed Matter Physics)',
            method: 'X線磁気円二色性 (XMCD)',
            beamline: 'BL25SU',
            application: 'エレクトロニクス (Electronics)',
            mainConclusion: 'スピントロニクス材料の磁気異方性起源を原子レベルで解明',
            industrialApplication: '次世代ハードディスク、磁気メモリの高密度化',
            crossDomain: '情報工学、量子技術への展開',
            failedApproach: 'SQUID測定では局所的な磁気構造が観測できなかった'
        },
        {
            id: 6,
            title: '半導体デバイスの高速X線イメージングによる動作解析',
            titleEn: 'Operational Analysis of Semiconductor Devices by High-Speed X-ray Imaging',
            authors: 'Suzuki, H., Ito, T.',
            year: 2022,
            field: '半導体工学 (Semiconductor Engineering)',
            method: '高速X線イメージング (High-Speed X-ray Imaging)',
            beamline: 'BL20XU',
            application: 'エレクトロニクス (Electronics)',
            mainConclusion: '次世代パワー半導体の熱応力分布をリアルタイムで可視化',
            industrialApplication: '電気自動車用パワーデバイスの信頼性向上',
            crossDomain: '電気工学、熱工学への応用',
            failedApproach: '可視光観察では内部構造の変化が観測不可能だった'
        },
        {
            id: 7,
            title: '文化財の非破壊X線分析による製作技法の解明',
            titleEn: 'Non-Destructive X-ray Analysis for Understanding Cultural Heritage Production Techniques',
            authors: 'Nakamura, Y., Kimura, A.',
            year: 2023,
            field: '文化財科学 (Cultural Heritage Science)',
            method: 'X線蛍光分析 (XRF)',
            beamline: 'BL08W',
            application: '文化・芸術 (Culture & Arts)',
            mainConclusion: '江戸時代の陶磁器の釉薬組成と焼成温度を非破壊で特定',
            industrialApplication: '文化財保存技術、伝統工芸の復元',
            crossDomain: '考古学、歴史学への応用',
            failedApproach: '従来の顕微鏡観察では内部構造が分からなかった'
        },
        {
            id: 8,
            title: '地球深部物質の高圧X線回折実験',
            titleEn: 'High-Pressure X-ray Diffraction Experiments on Deep Earth Materials',
            authors: 'Takahashi, N., Mori, D.',
            year: 2024,
            field: '地球科学 (Earth Science)',
            method: '高圧X線回折 (High-Pressure XRD)',
            beamline: 'BL10XU',
            application: '資源探査 (Resource Exploration)',
            mainConclusion: 'マントル遷移層の鉱物相転移圧力を精密決定し、地震波速度異常を説明',
            industrialApplication: '鉱物資源探査、地震予測技術への貢献',
            crossDomain: '地震学、鉱物学への展開',
            failedApproach: '常圧実験では高圧相の構造が再現できなかった'
        },
        {
            id: 9,
            title: '食品成分の放射光赤外分光による分子構造解析',
            titleEn: 'Molecular Structure Analysis of Food Components by Synchrotron Infrared Spectroscopy',
            authors: 'Tanaka, M., Saito, E.',
            year: 2023,
            field: '食品科学 (Food Science)',
            method: '赤外分光 (Infrared Spectroscopy)',
            beamline: 'BL43IR',
            application: '食品産業 (Food Industry)',
            mainConclusion: '発酵食品中のタンパク質構造変化と風味の相関を解明',
            industrialApplication: '機能性食品開発、発酵プロセス最適化',
            crossDomain: '栄養学、微生物学への応用',
            failedApproach: '通常の赤外分光では微量成分の検出が困難だった'
        }
    ];
    // Initialize papers on first render
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "App.useEffect": function() {
            if (papers.length === 0) {
                setPapers(samplePapersInitial);
            }
        }
    }["App.useEffect"], []);
    // 学術分野データ (Academic Disciplines Data)
    var disciplines = {
        'Materials Science': {
            label: '材料科学 (Materials Science)',
            journals: [
                'Advanced Materials Research',
                'Journal of Materials Chemistry',
                'Materials Science and Engineering',
                'Acta Materialia',
                'Scripta Materialia'
            ]
        },
        'Life Sciences': {
            label: '生命科学 (Life Sciences)',
            journals: [
                'Cell',
                'Nature Structural & Molecular Biology',
                'Journal of Biological Chemistry',
                'Protein Science',
                'FEBS Letters'
            ]
        },
        'Nanoscience': {
            label: 'ナノサイエンス (Nanoscience)',
            journals: [
                'Nature Nanotechnology',
                'Nano Letters',
                'ACS Nano',
                'Small',
                'Nanoscale'
            ]
        },
        'Polymer Science': {
            label: '高分子科学 (Polymer Science)',
            journals: [
                'Macromolecules',
                'Polymer',
                'Journal of Polymer Science',
                'Polymer Chemistry',
                'European Polymer Journal'
            ]
        },
        'Condensed Matter Physics': {
            label: '物性物理学 (Condensed Matter Physics)',
            journals: [
                'Physical Review B',
                'Journal of Physics: Condensed Matter',
                'Applied Physics Letters',
                'Physical Review Letters',
                'Nature Physics'
            ]
        },
        'Semiconductor Engineering': {
            label: '半導体工学 (Semiconductor Engineering)',
            journals: [
                'IEEE Transactions on Electron Devices',
                'Journal of Applied Physics',
                'Semiconductor Science and Technology',
                'Applied Physics Express',
                'Solid-State Electronics'
            ]
        },
        'Cultural Heritage Science': {
            label: '文化財科学 (Cultural Heritage Science)',
            journals: [
                'Journal of Cultural Heritage',
                'Studies in Conservation',
                'Archaeometry',
                'Heritage Science',
                'Journal of Archaeological Science'
            ]
        },
        'Earth Science': {
            label: '地球科学 (Earth Science)',
            journals: [
                'Earth and Planetary Science Letters',
                'Geology',
                'Geophysical Research Letters',
                'Journal of Geophysical Research',
                'Nature Geoscience'
            ]
        },
        'Food Science': {
            label: '食品科学 (Food Science)',
            journals: [
                'Food Chemistry',
                'Journal of Agricultural and Food Chemistry',
                'Food Research International',
                'Trends in Food Science & Technology',
                'Food Hydrocolloids'
            ]
        },
        'Chemistry': {
            label: '化学 (Chemistry)',
            journals: [
                'Journal of the American Chemical Society',
                'Angewandte Chemie',
                'Chemical Reviews',
                'Analytical Chemistry',
                'Inorganic Chemistry'
            ]
        }
    };
    // 高度検索ナレッジツリー (Advanced Search Knowledge Tree)
    var searchKnowledgeTree = {
        'x線': {
            type: 'category',
            label: 'X線技術 (X-ray Technology)',
            branches: {
                'x線回折': {
                    type: 'category',
                    label: 'X線回折 (X-ray Diffraction)',
                    branches: {
                        '高エネルギー': {
                            type: 'subcategory',
                            label: '高エネルギーX線回折 (High-Energy XRD)',
                            papers: [
                                1
                            ]
                        },
                        '高圧': {
                            type: 'subcategory',
                            label: '高圧X線回折 (High-Pressure XRD)',
                            papers: [
                                8
                            ]
                        },
                        '一般': {
                            type: 'subcategory',
                            label: '一般X線回折 (General XRD)',
                            papers: [
                                1
                            ]
                        }
                    }
                },
                'x線結晶構造解析': {
                    type: 'subcategory',
                    label: 'X線結晶構造解析 (X-ray Crystallography)',
                    papers: [
                        2
                    ]
                },
                'x線散乱': {
                    type: 'category',
                    label: 'X線散乱 (X-ray Scattering)',
                    branches: {
                        '小角散乱': {
                            type: 'subcategory',
                            label: '小角X線散乱 (SAXS)',
                            papers: [
                                4
                            ]
                        }
                    }
                },
                'x線分光': {
                    type: 'category',
                    label: 'X線分光 (X-ray Spectroscopy)',
                    branches: {
                        '磁気円二色性': {
                            type: 'subcategory',
                            label: 'X線磁気円二色性 (XMCD)',
                            papers: [
                                5
                            ]
                        },
                        '蛍光分析': {
                            type: 'subcategory',
                            label: 'X線蛍光分析 (XRF)',
                            papers: [
                                7
                            ]
                        }
                    }
                },
                'x線イメージング': {
                    type: 'subcategory',
                    label: 'X線イメージング (X-ray Imaging)',
                    papers: [
                        6
                    ]
                }
            }
        },
        '分光': {
            type: 'category',
            label: '分光技術 (Spectroscopy)',
            branches: {
                '時間分解': {
                    type: 'subcategory',
                    label: '時間分解分光 (Time-Resolved Spectroscopy)',
                    papers: [
                        3
                    ]
                },
                '赤外分光': {
                    type: 'subcategory',
                    label: '赤外分光 (Infrared Spectroscopy)',
                    papers: [
                        9
                    ]
                }
            }
        },
        '触媒': {
            type: 'category',
            label: '触媒研究 (Catalyst Research)',
            branches: {
                '合金触媒': {
                    type: 'subcategory',
                    label: '合金触媒 (Alloy Catalysts)',
                    papers: [
                        1
                    ]
                },
                '構造解析': {
                    type: 'subcategory',
                    label: '触媒構造解析 (Catalyst Structure Analysis)',
                    papers: [
                        1
                    ]
                }
            }
        },
        'タンパク質': {
            type: 'category',
            label: 'タンパク質研究 (Protein Research)',
            branches: {
                '結晶構造': {
                    type: 'subcategory',
                    label: 'タンパク質結晶構造 (Protein Crystal Structure)',
                    papers: [
                        2
                    ]
                },
                '創薬': {
                    type: 'subcategory',
                    label: '創薬ターゲット (Drug Targets)',
                    papers: [
                        2
                    ]
                }
            }
        },
        'ナノ材料': {
            type: 'category',
            label: 'ナノ材料 (Nanomaterials)',
            branches: {
                '量子ドット': {
                    type: 'subcategory',
                    label: '量子ドット (Quantum Dots)',
                    papers: [
                        3
                    ]
                },
                '電子状態': {
                    type: 'subcategory',
                    label: '電子状態解析 (Electronic State Analysis)',
                    papers: [
                        3,
                        5
                    ]
                }
            }
        },
        '高分子': {
            type: 'category',
            label: '高分子材料 (Polymer Materials)',
            branches: {
                '生分解性': {
                    type: 'subcategory',
                    label: '生分解性プラスチック (Biodegradable Plastics)',
                    papers: [
                        4
                    ]
                },
                '階層構造': {
                    type: 'subcategory',
                    label: '階層構造解析 (Hierarchical Structure)',
                    papers: [
                        4
                    ]
                }
            }
        },
        '磁性材料': {
            type: 'category',
            label: '磁性材料 (Magnetic Materials)',
            branches: {
                'スピントロニクス': {
                    type: 'subcategory',
                    label: 'スピントロニクス (Spintronics)',
                    papers: [
                        5
                    ]
                }
            }
        },
        '半導体': {
            type: 'category',
            label: '半導体 (Semiconductors)',
            branches: {
                'パワーデバイス': {
                    type: 'subcategory',
                    label: 'パワー半導体 (Power Semiconductors)',
                    papers: [
                        6
                    ]
                },
                '熱応力解析': {
                    type: 'subcategory',
                    label: '熱応力解析 (Thermal Stress Analysis)',
                    papers: [
                        6
                    ]
                }
            }
        },
        '文化財': {
            type: 'category',
            label: '文化財 (Cultural Heritage)',
            branches: {
                '非破壊分析': {
                    type: 'subcategory',
                    label: '非破壊分析 (Non-Destructive Analysis)',
                    papers: [
                        7
                    ]
                },
                '陶磁器': {
                    type: 'subcategory',
                    label: '陶磁器分析 (Ceramic Analysis)',
                    papers: [
                        7
                    ]
                }
            }
        },
        '地球科学': {
            type: 'category',
            label: '地球科学 (Earth Science)',
            branches: {
                '高圧実験': {
                    type: 'subcategory',
                    label: '高圧実験 (High-Pressure Experiments)',
                    papers: [
                        8
                    ]
                },
                'マントル': {
                    type: 'subcategory',
                    label: 'マントル研究 (Mantle Research)',
                    papers: [
                        8
                    ]
                }
            }
        },
        '食品': {
            type: 'category',
            label: '食品科学 (Food Science)',
            branches: {
                '発酵食品': {
                    type: 'subcategory',
                    label: '発酵食品 (Fermented Foods)',
                    papers: [
                        9
                    ]
                },
                'タンパク質構造': {
                    type: 'subcategory',
                    label: '食品タンパク質 (Food Proteins)',
                    papers: [
                        9
                    ]
                }
            }
        },
        '産業応用': {
            type: 'category',
            label: '産業応用 (Industrial Applications)',
            branches: {
                '自動車': {
                    type: 'subcategory',
                    label: '自動車産業 (Automotive)',
                    papers: [
                        1,
                        6
                    ]
                },
                '製薬': {
                    type: 'subcategory',
                    label: '製薬・医療 (Pharmaceutical)',
                    papers: [
                        2
                    ]
                },
                'エネルギー': {
                    type: 'subcategory',
                    label: 'エネルギー (Energy)',
                    papers: [
                        3
                    ]
                },
                '化学': {
                    type: 'subcategory',
                    label: '化学産業 (Chemical)',
                    papers: [
                        4
                    ]
                },
                'エレクトロニクス': {
                    type: 'subcategory',
                    label: 'エレクトロニクス (Electronics)',
                    papers: [
                        5,
                        6
                    ]
                }
            }
        }
    };
    // 高度検索でマッチする項目を取得 (Get matching items for advanced search)
    var getAdvancedSearchSuggestions = function(query) {
        if (!query) return null;
        var lowerQuery = query.toLowerCase().trim();
        var matches = [];
        Object.keys(searchKnowledgeTree).forEach(function(key) {
            if (key.includes(lowerQuery) || searchKnowledgeTree[key].label.toLowerCase().includes(lowerQuery)) {
                matches.push({
                    key: key,
                    data: searchKnowledgeTree[key],
                    path: [
                        key
                    ]
                });
            }
        });
        return matches;
    };
    // MDRCG質問項目 (MDRCG Question Items)
    var mdrcgQuestions = [
        {
            id: 'mainConclusion',
            label: '主な結論 (Main Conclusion)',
            placeholder: 'この研究で明らかになった最も重要な発見を1-2文で記述してください',
            type: 'textarea',
            required: true,
            aiDraft: 'SPring-8-II第四世代光源用に340台のボタン型BPMシステムを開発し、0.1 nC入射バンチで100 μm標準偏差以下のシングルパス分解能、COD分解能1 μm標準偏差以下、数週間で5 μm以内の長期安定性、電気中心変位150 μm標準偏差以下を達成し、コミッショニングと運用要件を完全に満たすことを実証しました。'
        },
        {
            id: 'priorWork',
            label: '先行研究との関係 (Relationship to Prior Work)',
            placeholder: 'この研究が基づいている3-5つの重要な先行研究を挙げてください',
            type: 'textarea',
            required: true,
            aiDraft: '1) SPring-8の既存BPMシステムと放射線損傷ケーブルの湿度感度問題に関する研究\n2) NanoTerasu 3 GeV光源用BPM実装（2020-2024年）でほぼ同一のシステム設計を採用\n3) SPring-8の高速ヘリシティ切替ビームラインの適応フィードフォワード補正用MicroTCA.4ベース電子回路開発\n4) 菱形形状への変更前の元の圧縮八角形ビームパイプ設計\n5) 加速器コンポーネント用CST Studio RF シミュレーションとANSYS熱解析技術'
        },
        {
            id: 'novelty',
            label: '新規性 (Novelty)',
            placeholder: 'この研究の独自の貢献は何ですか？',
            type: 'textarea',
            required: true,
            aiDraft: '第四世代光源応用において、耐放射線性PEEKインシュレーター同軸ケーブルとMicroTCA.4プラットフォームの包括的統合を初めて実現。異なる放射線ゾーンに最適化された新規3ケーブルシステム（A/B/Cケーブル）の開発。電極設計においてスプリング材料を排除した逆極性SMAコネクタの先駆的使用。八角形から菱形ビームパイプ断面へのBPMヘッド設計の適応を性能仕様を維持しながら実現。極限放射線環境下でのリアルタイムゲインドリフト監視用パイロットトーン生成器の実装。'
        },
        {
            id: 'unknownQuestions',
            label: '未解明の課題 (Remaining Unknown Questions)',
            placeholder: 'この研究では答えられなかった2-3の具体的な疑問',
            type: 'textarea',
            required: false,
            aiDraft: '1) 数年間の運転を超える長期的な電磁加熱が電極材料に与える影響\n2) 様々なバンチフィルパターンに対する最適な冷却水流量と冷却チャンネル配置\n3) 測定された放射線被曝レベルを超えるPEEKケーブル劣化曲線の挙動\n4) 未試験の極端なバンチパターン（406バンチ以上）での性能\n5) サブミクロン位置安定性要件に対する機械的振動の影響'
        },
        {
            id: 'failedApproach',
            label: '失敗したアプローチ (Failed Approaches)',
            placeholder: 'うまくいかなかった手法とその理由',
            type: 'textarea',
            required: false,
            aiDraft: '当初の八角形ビームパイプ設計では、高い抵抗壁インピーダンスのためステンレス鋼内面への銅メッキが必要で、製造の複雑さとコストが増加しました。標準フレキシブルケーブルは高放射線ゾーンで湿度感度により故障し、環境条件との相関が測定に現れました。水冷なしの室温動作では10°C以上の温度上昇と10 μm以上の熱変位が発生し、安定性要件を超過しました。スプリング材料を含む従来のSMAコネクタは、放射線被曝下での電極接続において信頼性の問題を経験しました。'
        },
        {
            id: 'crossDomain',
            label: '異分野翻訳レイヤー (Cross-Domain Translation)',
            placeholder: '他分野での類似問題や応用可能性',
            type: 'textarea',
            required: true,
            aiDraft: '素粒子物理学：サブミクロン軌道安定性を要する将来円形衝突型加速器（FCC、CEPC）の精密ビーム診断への応用\n医学物理学：がん治療用小型放射光源の信頼性の高いビーム位置モニタリング\n自由電子レーザー：コヒーレントX線生成のための超安定電子ビーム軌道制御\n産業用イオン注入装置：半導体製造用高精度ビームステアリング\n宇宙技術：衛星計測用耐放射線電子回路設計原理\n量子コンピューティング：量子ビット読み出しシステムに適用可能な極低温センサー開発技術'
        },
        {
            id: 'industrialPain',
            label: '産業応用可能性 (Industrial Application Potential)',
            placeholder: 'この研究が解決できる具体的な産業課題',
            type: 'textarea',
            required: true,
            aiDraft: '世界中の放射光施設：100倍の輝度向上を必要とする既存第三世代光源のアップグレードプロジェクトへの直接適用（ESRF-EBS、APS-U、PETRA IV）\n半導体産業：次世代チップ製造のための先進リソグラフィーと材料キャラクタリゼーションを可能にする超精密ビーム位置制御\n製薬研究開発：創薬におけるタイムリゾルブドタンパク質結晶構造解析に必要な安定X線ビーム\n材料科学：材料加工中の原子レベル現象のその場観察にはサブミクロンビーム安定性が必要\n自動車産業：放射光ベースのオペランド分光法による触媒コンバーター最適化\n航空宇宙：高輝度X線源を使用した重要部品の非破壊検査'
        },
        {
            id: 'abstractPrinciple',
            label: '抽象化された原理 (Abstracted Principle - 5th Grade Level)',
            placeholder: '小学5年生でも理解できるように説明してください',
            type: 'textarea',
            required: true,
            aiDraft: '巨大な円形トラック（レースカーのトラックみたいだけど、電子用だよ！）の周りを超高速で回る小さな粒を撮影する超高速カメラがあると想像してね。この電子はとても小さくて目では見えないんだ。BPM（ビーム位置モニター）は、トラック全体にセンサーがあって、電子がどこにいるかを正確に教えてくれるんだ。小さな粒子用のGPSみたいなもの！なぜそんなに正確に知る必要があるかというと（髪の毛よりも細く！）、この走っている電子が特別なX線の光を作り出して、科学者たちがそれを使って物質の内側を見るんだ。お医者さんがX線であなたの骨を見るのと同じようにね。電子がほんの少しでも揺れると、X線の写真がぼやけちゃうんだ。私たちの新しいシステムはとても正確で、鉛筆が髪の毛の幅より小さく動いたかどうかを測るようなものなんだよ！'
        },
        {
            id: 'experimentalReason',
            label: '実験設計の理由 (Experimental Design Rationale)',
            placeholder: 'なぜこのパラメータ・手法を選んだのか',
            type: 'textarea',
            required: false,
            aiDraft: 'RF周波数508.76 MHzの選択理由：SPring-8-IIの加速RF周波数に同期し、バンチ信号を正確に抽出可能\nサンプリングレート363.40 MHz（RF周波数の5/7）の選択：アンダーサンプリング方式により145.36 MHzの中間周波数を得て、FPGAでの高速処理を実現\n7次多項式変換の採用理由：ビーム位置の非線形性を高精度で補正し、広範囲での位置測定精度を確保\nPEEK絶縁同軸ケーブルの選択：高放射線環境下での長期耐久性と湿度非感受性を両立\n水冷19インチキャビネットの採用：±0.1°Cの温度安定性により長期ドリフトを5 μm以内に抑制\nモリブデン電極材料の選択：ステンレス鋼より優れた電気伝導性により電磁加熱を分散し、温度上昇を緩和'
        },
        {
            id: 'scalingPossibility',
            label: 'スケーリング可能性 (Scaling Possibilities)',
            placeholder: 'この技術は異なるスケールで機能しますか？',
            type: 'textarea',
            required: false,
            aiDraft: 'エネルギースケール：3 GeV（NanoTerasu）から6 GeV（SPring-8-II）、さらに高エネルギー衝突型加速器まで適用可能。電極直径とビームパイプ寸法をスケーリングすることで異なるビームエネルギーに対応。\n施設規模：周長約500 mのコンパクト光源から数kmの大型施設まで、BPM数を10台から数千台まで拡張可能。MicroTCA.4プラットフォームの拡張性により大規模展開に対応。\nビーム電流：0.1 nC（シングルパス）から数百mA（蓄積電流）まで、ステップアッテネーターとアンプの調整により広範囲をカバー。\n時間分解能：ターンバイターン（208.85 kHz）から10 Hzスローデータまで、異なるタイムスケールでの軌道監視を並列実行可能。'
        },
        {
            id: 'combinationPotential',
            label: '組み合わせ可能性 (Combination Potential)',
            placeholder: '他の技術と組み合わせる可能性',
            type: 'textarea',
            required: false,
            aiDraft: '機械学習との組合せ：ターンバイターンBPMデータ（208.85 kHz）をリアルタイム解析し、ビーム不安定性の予測と自動補正が可能。AIによる軌道補正アルゴリズム開発により、コミッショニング時間を大幅短縮。\nフィードバックシステムとの統合：高速10 kHzデータを用いた適応型フィードフォワード制御により、アンジュレータの高速ヘリシティ切替による軌道擾乱を5 μm以内に抑制。\nビームベースアライメント：BPMと四極磁石の磁気中心変位測定により、150 μm標準偏差以内での精密アライメントを実現。\nデジタルツイン技術：BPMリアルタイムデータと加速器シミュレーションを統合し、仮想加速器モデルで運転最適化と故障予測を実現。\n量子センサー技術：極低温BPM電子回路の開発知見を量子ビット読み出し回路に応用可能。\nIoT監視システム：パイロットトーン生成器による自己診断機能を拡張し、予防保全と遠隔監視を実現。'
        }
    ];
    var _useState20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDragging = _useState20[0], setIsDragging = _useState20[1];
    // PDF answer mappings - add more PDFs here
    var pdfAnswerMappings = {
        'TUP16': {
            mainConclusion: 'SPring-8-II第四世代光源用に340台のボタン型BPMシステムを開発し、0.1 nC入射バンチで100 μm標準偏差以下のシングルパス分解能、COD分解能1 μm標準偏差以下、数週間で5 μm以内の長期安定性、電気中心変位150 μm標準偏差以下を達成し、コミッショニングと運用要件を完全に満たすことを実証しました。',
            priorWork: '1) SPring-8の既存BPMシステムと放射線損傷ケーブルの湿度感度問題に関する研究\n2) NanoTerasu 3 GeV光源用BPM実装（2020-2024年）でほぼ同一のシステム設計を採用\n3) SPring-8の高速ヘリシティ切替ビームラインの適応フィードフォワード補正用MicroTCA.4ベース電子回路開発\n4) 菱形形状への変更前の元の圧縮八角形ビームパイプ設計\n5) 加速器コンポーネント用CST Studio RF シミュレーションとANSYS熱解析技術',
            novelty: '第四世代光源応用において、耐放射線性PEEKインシュレーター同軸ケーブルとMicroTCA.4プラットフォームの包括的統合を初めて実現。異なる放射線ゾーンに最適化された新規3ケーブルシステム（A/B/Cケーブル）の開発。電極設計においてスプリング材料を排除した逆極性SMAコネクタの先駆的使用。八角形から菱形ビームパイプ断面へのBPMヘッド設計の適応を性能仕様を維持しながら実現。極限放射線環境下でのリアルタイムゲインドリフト監視用パイロットトーン生成器の実装。',
            unknownQuestions: '1) 数年間の運転を超える長期的な電磁加熱が電極材料に与える影響\n2) 様々なバンチフィルパターンに対する最適な冷却水流量と冷却チャンネル配置\n3) 測定された放射線被曝レベルを超えるPEEKケーブル劣化曲線の挙動\n4) 未試験の極端なバンチパターン（406バンチ以上）での性能\n5) サブミクロン位置安定性要件に対する機械的振動の影響',
            failedApproach: '当初の八角形ビームパイプ設計では、高い抵抗壁インピーダンスのためステンレス鋼内面への銅メッキが必要で、製造の複雑さとコストが増加しました。標準フレキシブルケーブルは高放射線ゾーンで湿度感度により故障し、環境条件との相関が測定に現れました。水冷なしの室温動作では10°C以上の温度上昇と10 μm以上の熱変位が発生し、安定性要件を超過しました。スプリング材料を含む従来のSMAコネクタは、放射線被曝下での電極接続において信頼性の問題を経験しました。',
            crossDomain: '素粒子物理学：サブミクロン軌道安定性を要する将来円形衝突型加速器（FCC、CEPC）の精密ビーム診断への応用\n医学物理学：がん治療用小型放射光源の信頼性の高いビーム位置モニタリング\n自由電子レーザー：コヒーレントX線生成のための超安定電子ビーム軌道制御\n産業用イオン注入装置：半導体製造用高精度ビームステアリング\n宇宙技術：衛星計測用耐放射線電子回路設計原理\n量子コンピューティング：量子ビット読み出しシステムに適用可能な極低温センサー開発技術',
            industrialPain: '世界中の放射光施設：100倍の輝度向上を必要とする既存第三世代光源のアップグレードプロジェクトへの直接適用（ESRF-EBS、APS-U、PETRA IV）\n半導体産業：次世代チップ製造のための先進リソグラフィーと材料キャラクタリゼーションを可能にする超精密ビーム位置制御\n製薬研究開発：創薬におけるタイムリゾルブドタンパク質結晶構造解析に必要な安定X線ビーム\n材料科学：材料加工中の原子レベル現象のその場観察にはサブミクロンビーム安定性が必要\n自動車産業：放射光ベースのオペランド分光法による触媒コンバーター最適化\n航空宇宙：高輝度X線源を使用した重要部品の非破壊検査',
            abstractPrinciple: '巨大な円形トラック（レースカーのトラックみたいだけど、電子用だよ！）の周りを超高速で回る小さな粒を撮影する超高速カメラがあると想像してね。この電子はとても小さくて目では見えないんだ。BPM（ビーム位置モニター）は、トラック全体にセンサーがあって、電子がどこにいるかを正確に教えてくれるんだ。小さな粒子用のGPSみたいなもの！なぜそんなに正確に知る必要があるかというと（髪の毛よりも細く！）、この走っている電子が特別なX線の光を作り出して、科学者たちがそれを使って物質の内側を見るんだ。お医者さんがX線であなたの骨を見るのと同じようにね。電子がほんの少しでも揺れると、X線の写真がぼやけちゃうんだ。私たちの新しいシステムはとても正確で、鉛筆が髪の毛の幅より小さく動いたかどうかを測るようなものなんだよ！',
            experimentalReason: 'RF周波数508.76 MHzの選択理由：SPring-8-IIの加速RF周波数に同期し、バンチ信号を正確に抽出可能\nサンプリングレート363.40 MHz（RF周波数の5/7）の選択：アンダーサンプリング方式により145.36 MHzの中間周波数を得て、FPGAでの高速処理を実現\n7次多項式変換の採用理由：ビーム位置の非線形性を高精度で補正し、広範囲での位置測定精度を確保\nPEEK絶縁同軸ケーブルの選択：高放射線環境下での長期耐久性と湿度非感受性を両立\n水冷19インチキャビネットの採用：±0.1°Cの温度安定性により長期ドリフトを5 μm以内に抑制\nモリブデン電極材料の選択：ステンレス鋼より優れた電気伝導性により電磁加熱を分散し、温度上昇を緩和',
            scalingPossibility: 'エネルギースケール：3 GeV（NanoTerasu）から6 GeV（SPring-8-II）、さらに高エネルギー衝突型加速器まで適用可能。電極直径とビームパイプ寸法をスケーリングすることで異なるビームエネルギーに対応。\n施設規模：周長約500 mのコンパクト光源から数kmの大型施設まで、BPM数を10台から数千台まで拡張可能。MicroTCA.4プラットフォームの拡張性により大規模展開に対応。\nビーム電流：0.1 nC（シングルパス）から数百mA（蓄積電流）まで、ステップアッテネーターとアンプの調整により広範囲をカバー。\n時間分解能：ターンバイターン（208.85 kHz）から10 Hzスローデータまで、異なるタイムスケールでの軌道監視を並列実行可能。',
            combinationPotential: '機械学習との組合せ：ターンバイターンBPMデータ（208.85 kHz）をリアルタイム解析し、ビーム不安定性の予測と自動補正が可能。AIによる軌道補正アルゴリズム開発により、コミッショニング時間を大幅短縮。\nフィードバックシステムとの統合：高速10 kHzデータを用いた適応型フィードフォワード制御により、アンジュレータの高速ヘリシティ切替による軌道擾乱を5 μm以内に抑制。\nビームベースアライメント：BPMと四極磁石の磁気中心変位測定により、150 μm標準偏差以内での精密アライメントを実現。\nデジタルツイン技術：BPMリアルタイムデータと加速器シミュレーションを統合し、仮想加速器モデルで運転最適化と故障予測を実現。\n量子センサー技術：極低温BPM電子回路の開発知見を量子ビット読み出し回路に応用可能。\nIoT監視システム：パイロットトーン生成器による自己診断機能を拡張し、予防保全と遠隔監視を実現。'
        },
        'PhysRevAccelBeams': {
            mainConclusion: 'NanoTerasuは、周長349 mのコンパクトな4ベンドアクロマット格子を持つ3 GeV放射光施設として2024年4月にユーザー運用を開始しました。半年間のコミッショニングで、設計値1.14 nm radの水平エミッタンス、ベータトロンチューン(28.17, 9.23)、200 mAの蓄積電流を達成し、モデルと整合性のあるリング光学系を確立しました。初年度運用では160 mA安定運転を実現し、99.4%のユーザーサービス時間を達成しました。',
            priorWork: '1) MAX-IV (2016年)、ESRF-EBS (2020年)、Sirius (2021年)における多ベンドアクロマット格子の先行実装\n2) SPring-8での加速器技術開発：TM020モードHOM減衰空洞、オフアクシス入射システム\n3) Cバンド線形加速器技術：42 MV/m加速勾配とSLED技術の応用\n4) グリッド付き熱陰極電子銃による低エミッタンスビーム生成技術\n5) レーザートラッカーと振動ワイヤー法を用いた50 μm以下の精密磁石アライメント技術',
            novelty: 'コンパクト施設（周長349 m）で4ベンドアクロマット格子を採用し、軟X線から tender X線領域で10²¹の輝度を実現。110 m長の全エネルギー入射Cバンドライナック（42 MV/m）により施設の大幅な小型化を達成。B-Q複合型偏向磁石を用いた4ベンドアクロマット設計で、各セルに挿入光源用長直線部2本を確保。TM020モード空洞にHOM減衰器を内蔵し、0.5 m長で0.9 MV加速を実現（従来HOM減衰空洞比で高加速勾配）。真空内オフアクシス入射システムにより、7.5 mm局所バンプと10 μm以下の蓄積ビーム擾乱でトップアップ運転を実現。',
            unknownQuestions: '1) 400 mA蓄積電流達成に向けた230 mA以上での結合バンチ不安定性の原因解明と対策\n2) TM020空洞のHOM減衰器を追加してもビームサイズ拡大が改善されなかった物理機構\n3) 28挿入光源フル運転時（平均9 kW×28台）での蓄積リング真空とビーム寿命への影響\n4) 建屋と地盤の季節変動（最大0.2 mm）が長期的なビーム安定性と光学系に与える影響\n5) 2%結合定数を設計値1%まで低減した場合のTouschekビーム寿命と垂直エミッタンスのトレードオフ',
            failedApproach: '初期のHOM減衰器配置では、結合器ポート近傍の減衰器がTM020基本モードを0.3-0.5%吸収し、フェライトの自己加熱によりキュリー温度超過のリスクがあったため除去。標準的なフレキシブル同軸ケーブルは高放射線エリアで湿度感度により故障したため、PEEK絶縁ケーブルに変更。水冷なしの室温動作では電極が10°C以上上昇し10 μm以上の熱変位が発生したため、±0.1°C温度安定化水冷システムを導入。HOM減衰器を空洞2、3、4に追加（各14個）したが、230 mA以上での不安定性閾値電流は大幅には改善せず、さらなる対策が必要。',
            crossDomain: '次世代放射光施設：ESRF-EBS、APS-U、PETRA IVなど既存第三世代光源アップグレードへの4ベンドアクロマット設計の適用\n将来円形衝突型加速器：FCC、CEPCでのサブミクロン軌道安定性を要する精密ビーム診断技術\n小型医療用放射光源：コンパクト設計技術のがん治療用放射光源への応用\n軟X線自由電子レーザー：線形加速器ビームライン拡張による将来FEL計画\n高エネルギー物理実験：低エミッタンス入射器技術の粒子加速器への応用\n半導体製造：先進リソグラフィーと材料評価のための超高輝度軟X線源\n産業材料分析：オペランド分光法による触媒・電池材料のリアルタイム観察',
            industrialPain: '軟X線ユーザーコミュニティ：1-3 keVフォトンエネルギー範囲で10²¹輝度とコヒーレンス比8.1%を提供し、SPring-8の硬X線を補完\n材料科学・ナノサイエンス：1-3 keVの高輝度軟X線による先端材料のin-situ観察と時間分解分光\n半導体産業：次世代チップのための先進リソグラフィーと欠陥評価\n製薬・生命科学：タンパク質結晶構造解析と創薬ターゲット同定\n触媒研究：自動車・化学産業向け環境触媒のオペランド観察\n建設コスト削減：コンパクト設計により放射光施設建設の初期投資を大幅削減\n運用効率：110 m Cバンドライナックと真空内入射により保守性向上とダウンタイム削減',
            abstractPrinciple: '電子を超高速で回す巨大なドーナツ型のトラックを想像してね。NanoTerasuは、このトラックを普通の施設より小さく作ったんだ（周りの長さが349メートル）。電子はほぼ光の速さで走っていて、曲がるときに特別な光（X線）を出すんだ。この光で、科学者たちは物質の中を見ることができるんだよ。電子銃から出た電子は、110メートルの長い直線の道（加速器）で超高速まで加速されてから、ドーナツ型のトラックに入るんだ。トラックには曲がり角が64個もあって（16個のセルに4つずつ）、各曲がり角で電子はX線を出すんだ。この施設は小学校の体育館くらいの大きさに収まるくらいコンパクトだから、街中に作ることもできるんだよ！',
            experimentalReason: '4ベンドアクロマット格子の選択理由：コンパクトな周長349 mで1.14 nm radの低エミッタンスを実現し、軟X線ユーザー要求を満たす\nCバンド加速器（42 MV/m）の採用：110 m長で3 GeV全エネルギー入射を実現し、施設全体を小型化\nB-Q複合型偏向磁石の設計：補助電源なしで全偏向磁石を直列接続し、減衰分配数Jx=1.389を実現\nTM020空洞の開発理由：0.5 m長で0.9 MV加速を達成し、5.44 m直線部に4台設置可能\nオフアクシス入射方式：7.5 mm局所バンプと10 μm以下の蓄積ビーム擾乱でトップアップ運転を実現\n508.76 MHz加速周波数：592ハーモニクス数で適切なバンチ長2.92 mm（設計値）を実現\n50 μm磁石アライメント精度：線形光学応答を保証し、光学補正の収束を確保',
            scalingPossibility: 'エネルギースケール：3 GeV（軟X線）から6 GeV級（SPring-8-II）への拡張が可能。Cバンド加速器の段数追加で対応。\n周長スケール：349 m（NanoTerasu）から500 m超の中型施設、さらに1-2 kmの大型施設まで4ベンドアクロマット設計を適用可能。\n挿入光源数：現在10ビームライン（初年度）から最大28ビームライン（長直線14本、短直線14本）まで拡張可能。\n蓄積電流：現在200 mA安定運転から設計値400 mAへの増強、将来的には500 mA超も可能。\n自由電子レーザー拡張：線形加速器ビームラインを延長し、軟X線FEL施設として機能拡張が計画中。',
            combinationPotential: '機械学習ビーム診断：7×16=112台のBPMデータをリアルタイムAI解析し、軌道予測制御とコミッショニング時間短縮を実現。\nデジタルツイン技術：実測BPMデータと加速器モデルシミュレーションを統合し、仮想加速器での運転最適化と予測保守を実現。\nアダプティブ光学系：ベータ関数・分散関数の自動補正により、挿入光源運転中も光学系を動的に最適化。\nビームベースアライメント：BPMと四極磁石の磁気中心を精密測定し、機械アライメント50 μmをさらに改善。\n高度フィードバック制御：バンチバイバンチフィードバックとアンジュレータ補正の統合により、10 μm以下の軌道安定性を実現。\n量子技術への応用：低エミッタンスビーム生成技術を量子ビーム源や量子情報処理への展開。\nAI故障予測：真空圧力、RF反射、ビーム寿命などの統合監視により、ダウンタイムを最小化。'
        }
    };
    var processFile = function(file) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var base64Data, analysis, error;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(file && file.type === 'application/pdf')) return [
                            3,
                            6
                        ];
                        setUploadedFile(file);
                        setIsProcessing(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4,
                            new Promise(function(resolve, reject) {
                                var reader = new FileReader();
                                reader.onload = function() {
                                    return resolve(reader.result.split(',')[1]);
                                };
                                reader.onerror = function() {
                                    return reject(new Error('Failed to read file'));
                                };
                                reader.readAsDataURL(file);
                            })
                        ];
                    case 2:
                        base64Data = _state.sent();
                        return [
                            4,
                            analyzePDF(base64Data, file.name)
                        ];
                    case 3:
                        analysis = _state.sent();
                        setFormData(analysis);
                        setIsProcessing(false);
                        setCurrentView('form');
                        return [
                            3,
                            5
                        ];
                    case 4:
                        error = _state.sent();
                        console.error('PDF analysis error:', error);
                        alert('PDF分析中にエラーが発生しました: ' + error.message);
                        setIsProcessing(false);
                        return [
                            3,
                            5
                        ];
                    case 5:
                        return [
                            3,
                            7
                        ];
                    case 6:
                        alert('PDFファイルのみアップロード可能です');
                        _state.label = 7;
                    case 7:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var handleFileUpload = function(e) {
        var file = e.target.files[0];
        processFile(file);
    };
    var handleDragOver = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    var handleDragLeave = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    var handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        var file = e.dataTransfer.files[0];
        processFile(file);
    };
    var handleInputChange = function(id, value) {
        setFormData(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, id, value));
        });
    };
    var handleSubmit = function() {
        // Create new paper from form data
        var newPaper = {
            id: Date.now(),
            title: uploadedFile ? uploadedFile.name.replace('.pdf', '') : '新規論文',
            titleEn: 'New Research Paper',
            authors: 'Kitagawa, H.',
            year: new Date().getFullYear(),
            field: '材料科学 (Materials Science)',
            method: 'X線回折 (X-ray Diffraction)',
            beamline: 'BL19B2',
            application: '自動車産業 (Automotive)',
            mainConclusion: formData.mainConclusion || '新しく登録された研究論文です',
            industrialApplication: formData.industrialPain || '産業応用の詳細',
            crossDomain: formData.crossDomain || '異分野応用の可能性',
            failedApproach: formData.failedApproach || '',
            uploadedFile: uploadedFile,
            formData: formData,
            relatedPapers: selectedRelatedPapers,
            pdfText: pdfText
        };
        // Add to papers state
        setPapers(function(prevPapers) {
            return [
                newPaper
            ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(prevPapers));
        });
        // Reset form and go to search
        setFormData({});
        setUploadedFile(null);
        setSelectedRelatedPapers([]);
        setPdfText('');
        setCurrentView('search');
    };
    var toggleFilter = function(category, value) {
        setSelectedFilters(function(prev) {
            var current = prev[category];
            var updated = current.includes(value) ? current.filter(function(v) {
                return v !== value;
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(current).concat([
                value
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, category, updated));
        });
    };
    var filteredPapers = papers.filter(function(paper) {
        var matchesSearch = searchQuery === '' || paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || paper.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) || paper.mainConclusion.toLowerCase().includes(searchQuery.toLowerCase()) || paper.industrialApplication.toLowerCase().includes(searchQuery.toLowerCase()) || paper.crossDomain.toLowerCase().includes(searchQuery.toLowerCase()) || paper.field.toLowerCase().includes(searchQuery.toLowerCase()) || paper.method.toLowerCase().includes(searchQuery.toLowerCase());
        var matchesField = selectedFilters.field.length === 0 || selectedFilters.field.includes(paper.field);
        var matchesMethod = selectedFilters.method.length === 0 || selectedFilters.method.includes(paper.method);
        var matchesApplication = selectedFilters.application.length === 0 || selectedFilters.application.includes(paper.application);
        var matchesBeamline = selectedFilters.beamline.length === 0 || selectedFilters.beamline.includes(paper.beamline);
        var matchesYear = selectedFilters.year.length === 0 || selectedFilters.year.includes(paper.year);
        return matchesSearch && matchesField && matchesMethod && matchesApplication && matchesBeamline && matchesYear;
    });
    // アップロードビュー (Upload View)
    if (currentView === 'upload') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-full mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "SPring-8 研究データベース"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 862,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setCurrentView('search');
                                            },
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "検索"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 866,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 872,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 865,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 861,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 860,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-serif text-gray-900 mb-2",
                                        children: "研究論文アップロード"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 882,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "多次元研究コンテキストグラフシステム"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 883,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 881,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border-2 border-gray-300 rounded-lg p-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onDragOver: handleDragOver,
                                        onDragLeave: handleDragLeave,
                                        onDrop: handleDrop,
                                        className: "border-4 border-dashed rounded-lg p-16 text-center transition-all ".concat(isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "w-20 h-20 mx-auto mb-6 transition-colors ".concat(isDragging ? 'text-blue-500' : 'text-gray-400')
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 897,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold text-gray-800 mb-3",
                                                children: isDragging ? 'ここにドロップしてください' : '研究論文をアップロード'
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 900,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 mb-8 max-w-2xl mx-auto",
                                                children: isDragging ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600 font-semibold",
                                                    children: "ファイルをドロップ"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 905,
                                                    columnNumber: 21
                                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "PDFファイルをドラッグ&ドロップ、またはクリックしてアップロード",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 908,
                                                            columnNumber: 56
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: "(Drag & drop or click to upload PDF)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 909,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 903,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "inline-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".pdf",
                                                        onChange: handleFileUpload,
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 915,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-8 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold cursor-pointer inline-block",
                                                        children: "PDFファイルを選択"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 921,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 914,
                                                columnNumber: 17
                                            }, _this),
                                            uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 inline-flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-6 h-6 text-red-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 928,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-800",
                                                        children: uploadedFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 929,
                                                        columnNumber: 21
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 927,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 887,
                                        columnNumber: 15
                                    }, _this),
                                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                className: "w-16 h-16 mx-auto animate-spin text-red-800 mb-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 936,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-semibold text-gray-800 mb-2",
                                                children: "AIが論文を解析中..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 937,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "MDRCG情報を自動生成しています"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 940,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 935,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 886,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-gray-900 mb-3",
                                        children: "アップロード後の流れ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 949,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 952,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "AIが研究論文を分析し、重要な情報を抽出します"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 953,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 951,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 956,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "自動生成されたMDRCGフォームを確認・編集できます"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 957,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 955,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "あなたの研究が多次元で検索可能になります"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 961,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 959,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600 mt-1",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 964,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "異分野との関連性が自動的に特定されます"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 965,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 950,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 948,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 880,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 858,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 857,
            columnNumber: 7
        }, _this);
    }
    // フォームビュー (Form View)
    if (currentView === 'form') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-full mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "SPring-8 研究データベース"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 983,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setCurrentView('search');
                                            },
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "検索"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 987,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 993,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 986,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 982,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 981,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-300 rounded-lg p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold text-gray-800 mb-2",
                                            children: "MDRCG 情報入力フォーム"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1004,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Research Context Information Form"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1007,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1003,
                                    columnNumber: 13
                                }, _this),
                                papers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                    className: "w-5 h-5 text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1014,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold text-gray-800",
                                                    children: "関連論文の選択 (Related Papers)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1015,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1013,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-4",
                                            children: "この論文と関連する既存の論文を選択し、関係性を指定してください"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1019,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 max-h-64 overflow-y-auto",
                                            children: papers.map(function(paper) {
                                                var existingRelation = selectedRelatedPapers.find(function(r) {
                                                    return r.paperId === paper.id;
                                                });
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 p-3 bg-white rounded border border-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: !!existingRelation,
                                                            onChange: function(e) {
                                                                if (e.target.checked) {
                                                                    setSelectedRelatedPapers((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(selectedRelatedPapers).concat([
                                                                        {
                                                                            paperId: paper.id,
                                                                            relationshipType: 'Cited'
                                                                        }
                                                                    ]));
                                                                } else {
                                                                    setSelectedRelatedPapers(selectedRelatedPapers.filter(function(r) {
                                                                        return r.paperId !== paper.id;
                                                                    }));
                                                                }
                                                            },
                                                            className: "w-4 h-4 accent-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1027,
                                                            columnNumber: 25
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-800",
                                                                    children: paper.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1043,
                                                                    columnNumber: 27
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: [
                                                                        paper.authors,
                                                                        " (",
                                                                        paper.year,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1044,
                                                                    columnNumber: 27
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1042,
                                                            columnNumber: 25
                                                        }, _this),
                                                        existingRelation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: existingRelation.relationshipType,
                                                            onChange: function(e) {
                                                                setSelectedRelatedPapers(selectedRelatedPapers.map(function(r) {
                                                                    return r.paperId === paper.id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, r), {
                                                                        relationshipType: e.target.value
                                                                    }) : r;
                                                                }));
                                                            },
                                                            className: "px-3 py-1 border-2 border-gray-300 rounded text-sm font-medium",
                                                            children: relationshipTypes.map(function(type) {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: type,
                                                                    children: type
                                                                }, type, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1057,
                                                                    columnNumber: 31
                                                                }, _this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1047,
                                                            columnNumber: 27
                                                        }, _this)
                                                    ]
                                                }, paper.id, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1026,
                                                    columnNumber: 23
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1022,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1012,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 max-h-[600px] overflow-y-auto pr-4",
                                    children: mdrcgQuestions.map(function(question) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b pb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block mb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg font-semibold text-gray-800",
                                                        children: [
                                                            question.label,
                                                            question.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 ml-1",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1074,
                                                                columnNumber: 45
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1072,
                                                        columnNumber: 21
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1071,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData[question.id] || '',
                                                    onChange: function(e) {
                                                        return handleInputChange(question.id, e.target.value);
                                                    },
                                                    placeholder: question.placeholder,
                                                    className: "w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none min-h-[120px] bg-yellow-50",
                                                    required: question.required
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1077,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "💡 AIが生成した内容です。必要に応じて修正してください"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1084,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, question.id, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1070,
                                            columnNumber: 17
                                        }, _this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1068,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setCurrentView('upload');
                                            },
                                            className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                            children: "← 戻る"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1092,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            className: "flex-1 px-6 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                            children: "登録して公開"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1098,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1091,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1002,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1001,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 979,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 978,
            columnNumber: 7
        }, _this);
    }
    // 高度検索ビュー (Advanced Search View)
    if (currentView === 'advancedSearch') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-serif text-gray-900",
                                        children: "高度検索"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1120,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: function() {
                                            return setCurrentView('search');
                                        },
                                        className: "text-sm text-blue-700 hover:text-blue-900 underline",
                                        children: "← 簡易検索に戻る"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1121,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1119,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-sm text-blue-700 hover:underline",
                                children: "検索ヘルプ"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1128,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1118,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b-2 border-gray-300 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 text-sm font-semibold border-b-4 border-black -mb-0.5",
                                children: "全コンテンツ"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1133,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 text-sm text-gray-600 hover:text-gray-900",
                                children: "画像"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1136,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1132,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-300 p-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-serif text-gray-900 mb-6",
                                children: "検索クエリを構築"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1143,
                                columnNumber: 13
                            }, _this),
                            advancedSearchRows.map(function(row, index) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-12 gap-4 items-start",
                                        children: [
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "論理演算子"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1150,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: row.boolean,
                                                        onChange: function(e) {
                                                            var newRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(advancedSearchRows);
                                                            newRows[index].boolean = e.target.value;
                                                            setAdvancedSearchRows(newRows);
                                                        },
                                                        className: "w-full px-3 py-2 border border-gray-400 rounded text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "AND",
                                                                children: "AND"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1160,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "OR",
                                                                children: "OR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1161,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "NOT",
                                                                children: "NOT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1162,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 5",
                                                                children: "NEAR 5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1163,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 10",
                                                                children: "NEAR 10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1164,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "NEAR 25",
                                                                children: "NEAR 25"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1165,
                                                                columnNumber: 25
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1151,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1149,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: index === 0 ? 'col-span-6' : 'col-span-5',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "検索語句"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1171,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: row.term,
                                                        onChange: function(e) {
                                                            var newRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(advancedSearchRows);
                                                            newRows[index].term = e.target.value;
                                                            setAdvancedSearchRows(newRows);
                                                        },
                                                        className: "w-full px-3 py-2 border border-gray-400 rounded text-sm",
                                                        placeholder: "検索キーワードを入力..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1172,
                                                        columnNumber: 21
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1170,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-semibold text-gray-700 mb-1",
                                                        children: "検索フィールド"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1186,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: row.field,
                                                        onChange: function(e) {
                                                            var newRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(advancedSearchRows);
                                                            newRows[index].field = e.target.value;
                                                            setAdvancedSearchRows(newRows);
                                                        },
                                                        className: "w-full px-3 py-2 border border-gray-400 rounded text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: "全フィールド"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1196,
                                                                columnNumber: 23
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "title",
                                                                children: "タイトル"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1197,
                                                                columnNumber: 23
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "author",
                                                                children: "著者"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1198,
                                                                columnNumber: 23
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "abstract",
                                                                children: "要旨"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1199,
                                                                columnNumber: 23
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "caption",
                                                                children: "説明"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1200,
                                                                columnNumber: 23
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1187,
                                                        columnNumber: 21
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1185,
                                                columnNumber: 19
                                            }, _this),
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-1 pt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: function() {
                                                        setAdvancedSearchRows(advancedSearchRows.filter(function(r) {
                                                            return r.id !== row.id;
                                                        }));
                                                    },
                                                    className: "text-gray-600 hover:text-red-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1212,
                                                        columnNumber: 25
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1206,
                                                    columnNumber: 23
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1205,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1147,
                                        columnNumber: 17
                                    }, _this)
                                }, row.id, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1146,
                                    columnNumber: 15
                                }, _this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: function() {
                                    setAdvancedSearchRows((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(advancedSearchRows).concat([
                                        {
                                            id: Date.now(),
                                            boolean: 'AND',
                                            term: '',
                                            field: 'all'
                                        }
                                    ]));
                                },
                                className: "mt-4 px-4 py-2 text-sm border border-gray-400 rounded hover:bg-gray-50 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1229,
                                        columnNumber: 15
                                    }, _this),
                                    " 行を追加"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1220,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-700 mb-2",
                                        children: "アクセスタイプを選択"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1234,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-80 px-3 py-2 border border-gray-400 rounded text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "すべて"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1236,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "アクセス可能なコンテンツ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1237,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1235,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1233,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: function() {
                                    // Apply advanced search and go back to results
                                    setCurrentView('search');
                                },
                                className: "mt-6 px-8 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                children: "高度検索を実行"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1241,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1142,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-300 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-serif text-gray-900 mb-6",
                                children: "検索結果を絞り込む"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1254,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "アイテムタイプ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1258,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            '論文',
                                            '研究報告',
                                            'レビュー',
                                            'その他',
                                            '書籍'
                                        ].map(function(type) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-sm cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedItemTypes.includes(type),
                                                        onChange: function() {
                                                            setSelectedItemTypes(function(prev) {
                                                                return prev.includes(type) ? prev.filter(function(t) {
                                                                    return t !== type;
                                                                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(prev).concat([
                                                                    type
                                                                ]);
                                                            });
                                                        },
                                                        className: "w-4 h-4 accent-red-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1262,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: type
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1272,
                                                        columnNumber: 21
                                                    }, _this)
                                                ]
                                            }, type, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1261,
                                                columnNumber: 19
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1259,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1257,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "出版日"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1280,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-gray-600 mb-1",
                                                        children: "開始日"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1283,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: dateFrom,
                                                        onChange: function(e) {
                                                            return setDateFrom(e.target.value);
                                                        },
                                                        placeholder: "yyyy/mm/dd",
                                                        className: "w-32 px-3 py-2 border border-gray-400 rounded text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1284,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1282,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "〜"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1293,
                                                    columnNumber: 19
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1292,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs text-gray-600 mb-1",
                                                        children: " "
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1296,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: dateTo,
                                                        onChange: function(e) {
                                                            return setDateTo(e.target.value);
                                                        },
                                                        placeholder: "yyyy/mm/dd",
                                                        className: "w-32 px-3 py-2 border border-gray-400 rounded text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1297,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1295,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1281,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1279,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 mb-3",
                                        children: "学術分野で絞り込む"
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1310,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 max-h-96 overflow-y-auto border border-gray-300 rounded p-4",
                                        children: Object.entries(disciplines).map(function(param) {
                                            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], discipline = _param[1];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedDisciplines.includes(key),
                                                            onChange: function() {
                                                                setSelectedDisciplines(function(prev) {
                                                                    return prev.includes(key) ? prev.filter(function(d) {
                                                                        return d !== key;
                                                                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(prev).concat([
                                                                        key
                                                                    ]);
                                                                });
                                                            },
                                                            className: "w-4 h-4 mt-0.5 accent-red-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1315,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: discipline.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1326,
                                                                    columnNumber: 25
                                                                }, _this),
                                                                selectedDisciplines.includes(key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ml-6 mt-2 space-y-1",
                                                                    children: discipline.journals.map(function(journal) {
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-blue-700 hover:underline cursor-pointer",
                                                                            children: journal
                                                                        }, journal, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1330,
                                                                            columnNumber: 31
                                                                        }, _this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1328,
                                                                    columnNumber: 27
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1325,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1314,
                                                    columnNumber: 21
                                                }, _this)
                                            }, key, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1313,
                                                columnNumber: 19
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1311,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1309,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: function() {
                                    setCurrentView('search');
                                },
                                className: "px-8 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                children: "高度検索を実行"
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1343,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1253,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 1116,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 1115,
            columnNumber: 7
        }, _this);
    }
    // 論文詳細ビュー (Paper Detail View)
    if (currentView === 'search' && viewingPaper) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-full mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "SPring-8 研究データベース"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1365,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setViewingPaper(null);
                                            },
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "← 検索結果に戻る"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "ログイン"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1375,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1368,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1364,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1363,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-gray-300 rounded-lg p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-600 uppercase tracking-wide",
                                                children: "学術論文"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1387,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-serif text-gray-900 mt-2 mb-4",
                                                children: viewingPaper.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1388,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl text-gray-600 mb-4",
                                                children: viewingPaper.titleEn
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1391,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 mb-2",
                                                children: [
                                                    "著者: ",
                                                    viewingPaper.authors
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1392,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm italic text-gray-600",
                                                children: [
                                                    "SPring-8 Research Journal, Vol. ",
                                                    viewingPaper.id,
                                                    ", No. 1 (",
                                                    viewingPaper.year,
                                                    "), pp. 1-20"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1393,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1386,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 mb-8 pb-8 border-b border-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: function() {
                                                    if (viewingPaper.uploadedFile) {
                                                        var fileURL = URL.createObjectURL(viewingPaper.uploadedFile);
                                                        window.open(fileURL, '_blank');
                                                    } else {
                                                        alert('この論文のPDFファイルは利用できません');
                                                    }
                                                },
                                                className: "px-6 py-3 bg-red-800 text-white rounded hover:bg-red-900 font-semibold",
                                                children: "PDFを開く"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1400,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                                children: "保存"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1413,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                                children: "引用"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1416,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1399,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-6 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "研究分野"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1424,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.field
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1425,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1423,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "測定手法"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1428,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.method
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1429,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1427,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "ビームライン"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1432,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.beamline
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1433,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1431,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-gray-700 mb-2",
                                                        children: "産業応用"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1436,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-900",
                                                        children: viewingPaper.application
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1437,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1435,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1422,
                                        columnNumber: 15
                                    }, _this),
                                    viewingPaper.formData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300",
                                                children: "MDRCG 詳細情報"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1444,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "主な結論"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1449,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.mainConclusion
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1450,
                                                        columnNumber: 21
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1448,
                                                columnNumber: 19
                                            }, _this),
                                            viewingPaper.formData.priorWork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "先行研究との関係"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1455,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed whitespace-pre-line",
                                                        children: viewingPaper.formData.priorWork
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1456,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1454,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.formData.novelty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "新規性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1462,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.novelty
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1463,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1461,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.formData.unknownQuestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "未解明の課題"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1469,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed whitespace-pre-line",
                                                        children: viewingPaper.formData.unknownQuestions
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1470,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1468,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.failedApproach && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "失敗したアプローチ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1476,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.failedApproach
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1477,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1475,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.crossDomain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "異分野翻訳レイヤー"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1483,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.crossDomain
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1484,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1482,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.industrialApplication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "産業応用可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1490,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.industrialApplication
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1491,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1489,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.formData.abstractPrinciple && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "抽象化された原理（小学5年生レベル）"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1497,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.abstractPrinciple
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1498,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1496,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.formData.experimentalReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "実験設計の理由"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1504,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.experimentalReason
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1505,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1503,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.formData.scalingPossibility && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "スケーリング可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1511,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.scalingPossibility
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1512,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1510,
                                                columnNumber: 21
                                            }, _this),
                                            viewingPaper.formData.combinationPotential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-800 mb-2",
                                                        children: "組み合わせ可能性"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1518,
                                                        columnNumber: 23
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed",
                                                        children: viewingPaper.formData.combinationPotential
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1519,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1517,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1443,
                                        columnNumber: 17
                                    }, _this),
                                    viewingPaper.relatedPapers && viewingPaper.relatedPapers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-8 border-t-2 border-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                        className: "w-6 h-6 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1529,
                                                        columnNumber: 21
                                                    }, _this),
                                                    "関連論文 (Related Papers)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1528,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: viewingPaper.relatedPapers.map(function(relation) {
                                                    var relatedPaper = papers.find(function(p) {
                                                        return p.id === relation.paperId;
                                                    });
                                                    return relatedPaper ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-blue-50 border-l-4 border-blue-500 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-gray-900",
                                                                            children: relatedPaper.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1539,
                                                                            columnNumber: 31
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-600 mt-1",
                                                                            children: [
                                                                                relatedPaper.authors,
                                                                                " (",
                                                                                relatedPaper.year,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1540,
                                                                            columnNumber: 31
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1538,
                                                                    columnNumber: 29
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full",
                                                                    children: relation.relationshipType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1542,
                                                                    columnNumber: 29
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1537,
                                                            columnNumber: 27
                                                        }, _this)
                                                    }, relation.paperId, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1536,
                                                        columnNumber: 25
                                                    }, _this) : null;
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1532,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1527,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1384,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: function() {
                                        return setViewingPaper(null);
                                    },
                                    className: "px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-50 font-semibold",
                                    children: "← 検索結果に戻る"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1556,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/components/App.js",
                                lineNumber: 1555,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.js",
                        lineNumber: 1383,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.js",
                lineNumber: 1361,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 1360,
            columnNumber: 7
        }, _this);
    }
    // 検索ビュー (Search View)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-full mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-b border-gray-200 px-8 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "SPring-8 Research Database"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1576,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setCurrentView('upload');
                                            },
                                            className: "px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium",
                                            children: "論文登録 (Upload)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1580,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm bg-red-800 text-white rounded hover:bg-red-900 font-medium",
                                            children: "Log in"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1586,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1579,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1575,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: searchQuery,
                                            onChange: function(e) {
                                                return setSearchQuery(e.target.value);
                                            },
                                            placeholder: "キーワード、産業応用、異分野応用などで検索...",
                                            className: "w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded focus:border-gray-400 focus:outline-none text-base"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1594,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "absolute right-3 top-3 text-gray-600 hover:text-gray-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1602,
                                                columnNumber: 17
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1601,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1593,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: function() {
                                        return setCurrentView('advancedSearch');
                                    },
                                    className: "mt-2 text-sm text-blue-700 hover:text-blue-900 underline",
                                    children: "高度検索"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1605,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1592,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/App.js",
                    lineNumber: 1574,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-64 border-r border-gray-200 bg-gray-50 p-6 min-h-screen",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-900 mb-4",
                                    children: "Refine Results"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1618,
                                    columnNumber: 13
                                }, _this),
                                showAdvancedSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-2xl font-bold",
                                                                    children: "高度検索 (Advanced Search)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1627,
                                                                    columnNumber: 23
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm mt-1",
                                                                    children: "階層的なナレッジツリーで探索 (Explore through hierarchical knowledge tree)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1628,
                                                                    columnNumber: 23
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1626,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: function() {
                                                                setShowAdvancedSearch(false);
                                                                setAdvancedSearchQuery('');
                                                                setSelectedPath([]);
                                                                setCurrentBranch(null);
                                                            },
                                                            className: "text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-6 h-6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1639,
                                                                columnNumber: 23
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1630,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1625,
                                                    columnNumber: 19
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1624,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: [
                                                    selectedPath.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 flex items-center gap-2 text-sm text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: function() {
                                                                    setSelectedPath([]);
                                                                    setCurrentBranch(null);
                                                                },
                                                                className: "hover:text-blue-600",
                                                                children: "ホーム (Home)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1648,
                                                                columnNumber: 23
                                                            }, _this),
                                                            selectedPath.map(function(pathItem, index) {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "→"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1659,
                                                                            columnNumber: 27
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: function() {
                                                                                setSelectedPath(selectedPath.slice(0, index + 1));
                                                                                // Navigate to this level
                                                                                var branch = searchKnowledgeTree;
                                                                                for(var i = 0; i <= index; i++){
                                                                                    branch = branch[selectedPath[i]];
                                                                                }
                                                                                setCurrentBranch(branch);
                                                                            },
                                                                            className: "hover:text-blue-600 font-semibold",
                                                                            children: pathItem
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1660,
                                                                            columnNumber: 27
                                                                        }, _this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1658,
                                                                    columnNumber: 25
                                                                }, _this);
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1647,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "absolute left-4 top-4 text-gray-400 w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1681,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: advancedSearchQuery,
                                                                onChange: function(e) {
                                                                    return setAdvancedSearchQuery(e.target.value);
                                                                },
                                                                placeholder: "キーワードを入力... (Enter keywords...)",
                                                                className: "w-full pl-12 pr-4 py-4 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg",
                                                                autoFocus: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1682,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1680,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-[400px] overflow-y-auto",
                                                        children: advancedSearchQuery === '' && selectedPath.length === 0 ? // Show top level categories
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 mb-4",
                                                                    children: "カテゴリーを選択するか、キーワードを入力してください (Select a category or enter keywords)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1697,
                                                                    columnNumber: 25
                                                                }, _this),
                                                                Object.keys(searchKnowledgeTree).map(function(key) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: function() {
                                                                            setSelectedPath([
                                                                                key
                                                                            ]);
                                                                            setCurrentBranch(searchKnowledgeTree[key]);
                                                                        },
                                                                        className: "p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 cursor-pointer transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                            className: "font-bold text-gray-800",
                                                                                            children: searchKnowledgeTree[key].label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1709,
                                                                                            columnNumber: 33
                                                                                        }, _this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-500 mt-1",
                                                                                            children: searchKnowledgeTree[key].branches ? "".concat(Object.keys(searchKnowledgeTree[key].branches).length, " サブカテゴリー") : '論文を表示'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1710,
                                                                                            columnNumber: 33
                                                                                        }, _this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1708,
                                                                                    columnNumber: 31
                                                                                }, _this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1716,
                                                                                    columnNumber: 31
                                                                                }, _this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1707,
                                                                            columnNumber: 29
                                                                        }, _this)
                                                                    }, key, false, {
                                                                        fileName: "[project]/components/App.js",
                                                                        lineNumber: 1699,
                                                                        columnNumber: 27
                                                                    }, _this);
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1696,
                                                            columnNumber: 23
                                                        }, _this) : advancedSearchQuery !== '' ? // Show search suggestions
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: ((_getAdvancedSearchSuggestions = getAdvancedSearchSuggestions(advancedSearchQuery)) === null || _getAdvancedSearchSuggestions === void 0 ? void 0 : _getAdvancedSearchSuggestions.length) > 0 ? getAdvancedSearchSuggestions(advancedSearchQuery).map(function(match, index) {
                                                                var _match_data_papers;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: function() {
                                                                        setSelectedPath(match.path);
                                                                        setCurrentBranch(match.data);
                                                                        setAdvancedSearchQuery('');
                                                                    },
                                                                    className: "p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 cursor-pointer transition-all",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                        className: "font-bold text-gray-800",
                                                                                        children: match.data.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1737,
                                                                                        columnNumber: 35
                                                                                    }, _this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-500 mt-1",
                                                                                        children: match.data.branches ? "".concat(Object.keys(match.data.branches).length, " サブカテゴリー") : "".concat(((_match_data_papers = match.data.papers) === null || _match_data_papers === void 0 ? void 0 : _match_data_papers.length) || 0, " 件の論文")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1738,
                                                                                        columnNumber: 35
                                                                                    }, _this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/App.js",
                                                                                lineNumber: 1736,
                                                                                columnNumber: 33
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/App.js",
                                                                                lineNumber: 1744,
                                                                                columnNumber: 33
                                                                            }, _this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/App.js",
                                                                        lineNumber: 1735,
                                                                        columnNumber: 31
                                                                    }, _this)
                                                                }, index, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1726,
                                                                    columnNumber: 29
                                                                }, _this);
                                                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-center text-gray-500 py-8",
                                                                children: "該当する結果が見つかりませんでした (No results found)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1749,
                                                                columnNumber: 27
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1723,
                                                            columnNumber: 23
                                                        }, _this) : currentBranch ? // Show current branch contents
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                currentBranch.branches && Object.keys(currentBranch.branches).map(function(key) {
                                                                    var _currentBranch_branches_key_papers;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: function() {
                                                                            setSelectedPath((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(selectedPath).concat([
                                                                                key
                                                                            ]));
                                                                            setCurrentBranch(currentBranch.branches[key]);
                                                                        },
                                                                        className: "p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 cursor-pointer transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                            className: "font-bold text-gray-800",
                                                                                            children: currentBranch.branches[key].label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1766,
                                                                                            columnNumber: 33
                                                                                        }, _this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs text-gray-500 mt-1",
                                                                                            children: currentBranch.branches[key].branches ? "".concat(Object.keys(currentBranch.branches[key].branches).length, " サブカテゴリー") : "".concat(((_currentBranch_branches_key_papers = currentBranch.branches[key].papers) === null || _currentBranch_branches_key_papers === void 0 ? void 0 : _currentBranch_branches_key_papers.length) || 0, " 件の論文")
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/App.js",
                                                                                            lineNumber: 1767,
                                                                                            columnNumber: 33
                                                                                        }, _this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1765,
                                                                                    columnNumber: 31
                                                                                }, _this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    className: "w-5 h-5 text-gray-400 transform -rotate-90"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/App.js",
                                                                                    lineNumber: 1773,
                                                                                    columnNumber: 31
                                                                                }, _this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1764,
                                                                            columnNumber: 29
                                                                        }, _this)
                                                                    }, key, false, {
                                                                        fileName: "[project]/components/App.js",
                                                                        lineNumber: 1756,
                                                                        columnNumber: 27
                                                                    }, _this);
                                                                }),
                                                                currentBranch.papers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3 mt-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-bold text-gray-700 border-t pt-4",
                                                                            children: "関連論文 (Related Papers)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/App.js",
                                                                            lineNumber: 1779,
                                                                            columnNumber: 29
                                                                        }, _this),
                                                                        currentBranch.papers.map(function(paperId) {
                                                                            var paper = papers.find(function(p) {
                                                                                return p.id === paperId;
                                                                            });
                                                                            return paper ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                onClick: function() {
                                                                                    var // Scroll to paper in main view
                                                                                    _document_getElementById;
                                                                                    setShowAdvancedSearch(false);
                                                                                    (_document_getElementById = document.getElementById("paper-".concat(paper.id))) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                                                                                        behavior: 'smooth'
                                                                                    });
                                                                                },
                                                                                className: "p-4 border-2 border-blue-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "font-bold text-gray-800",
                                                                                        children: paper.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1792,
                                                                                        columnNumber: 35
                                                                                    }, _this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-600 mt-1",
                                                                                        children: paper.titleEn
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1793,
                                                                                        columnNumber: 35
                                                                                    }, _this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-500 mt-2",
                                                                                        children: [
                                                                                            paper.authors,
                                                                                            " (",
                                                                                            paper.year,
                                                                                            ")"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/App.js",
                                                                                        lineNumber: 1794,
                                                                                        columnNumber: 35
                                                                                    }, _this)
                                                                                ]
                                                                            }, paper.id, true, {
                                                                                fileName: "[project]/components/App.js",
                                                                                lineNumber: 1783,
                                                                                columnNumber: 33
                                                                            }, _this) : null;
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1778,
                                                                    columnNumber: 27
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1754,
                                                            columnNumber: 23
                                                        }, _this) : null
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1693,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1644,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1623,
                                        columnNumber: 15
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1622,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setShowFilters((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, showFilters), {
                                                    field: !showFilters.field
                                                }));
                                            },
                                            className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "研究分野 (Research Field)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1814,
                                                    columnNumber: 17
                                                }, _this),
                                                showFilters.field ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1815,
                                                    columnNumber: 38
                                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1815,
                                                    columnNumber: 74
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1810,
                                            columnNumber: 15
                                        }, _this),
                                        showFilters.field && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                '材料科学 (Materials Science)',
                                                '生命科学 (Life Sciences)',
                                                'ナノサイエンス (Nanoscience)',
                                                '高分子科学 (Polymer Science)',
                                                '物性物理学 (Condensed Matter Physics)'
                                            ].map(function(field) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedFilters.field.includes(field),
                                                            onChange: function() {
                                                                return toggleFilter('field', field);
                                                            },
                                                            className: "mt-0.5 w-4 h-4 accent-red-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1821,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: field.split(' (')[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1827,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, field, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1820,
                                                    columnNumber: 21
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1818,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1809,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setShowFilters((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, showFilters), {
                                                    method: !showFilters.method
                                                }));
                                            },
                                            className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "測定手法 (Method)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1840,
                                                    columnNumber: 17
                                                }, _this),
                                                showFilters.method ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1841,
                                                    columnNumber: 39
                                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1841,
                                                    columnNumber: 75
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1836,
                                            columnNumber: 15
                                        }, _this),
                                        showFilters.method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                'X線回折 (X-ray Diffraction)',
                                                'X線結晶構造解析 (X-ray Crystallography)',
                                                '時間分解分光 (Time-Resolved Spectroscopy)',
                                                '小角X線散乱 (SAXS)'
                                            ].map(function(method) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedFilters.method.includes(method),
                                                            onChange: function() {
                                                                return toggleFilter('method', method);
                                                            },
                                                            className: "mt-0.5 w-4 h-4 accent-red-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1847,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: method.split(' (')[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1853,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, method, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1846,
                                                    columnNumber: 21
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1844,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1835,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setShowFilters((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, showFilters), {
                                                    application: !showFilters.application
                                                }));
                                            },
                                            className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "産業応用 (Application)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1866,
                                                    columnNumber: 17
                                                }, _this),
                                                showFilters.application ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1867,
                                                    columnNumber: 44
                                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1867,
                                                    columnNumber: 80
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1862,
                                            columnNumber: 15
                                        }, _this),
                                        showFilters.application && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                '自動車産業 (Automotive)',
                                                '製薬・医療 (Pharmaceutical)',
                                                'エネルギー産業 (Energy)',
                                                '化学産業 (Chemical)'
                                            ].map(function(app) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedFilters.application.includes(app),
                                                            onChange: function() {
                                                                return toggleFilter('application', app);
                                                            },
                                                            className: "mt-0.5 w-4 h-4 accent-red-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1873,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: app.split(' (')[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1879,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, app, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1872,
                                                    columnNumber: 21
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1870,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1861,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: function() {
                                                return setShowFilters((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, showFilters), {
                                                    year: !showFilters.year
                                                }));
                                            },
                                            className: "flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "年度 (Year)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1892,
                                                    columnNumber: 17
                                                }, _this),
                                                showFilters.year ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1893,
                                                    columnNumber: 37
                                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1893,
                                                    columnNumber: 73
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1888,
                                            columnNumber: 15
                                        }, _this),
                                        showFilters.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                2024,
                                                2023,
                                                2022
                                            ].map(function(year) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-start gap-2 text-sm cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedFilters.year.includes(year),
                                                            onChange: function() {
                                                                return toggleFilter('year', year);
                                                            },
                                                            className: "mt-0.5 w-4 h-4 accent-red-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1899,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: year
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1905,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, year, true, {
                                                    fileName: "[project]/components/App.js",
                                                    lineNumber: 1898,
                                                    columnNumber: 21
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1896,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1887,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1617,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: filteredPapers.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1917,
                                                columnNumber: 17
                                            }, _this),
                                            " 件の結果"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/App.js",
                                        lineNumber: 1916,
                                        columnNumber: 15
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1915,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: filteredPapers.map(function(paper) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "paper-".concat(paper.id),
                                            className: "border-b border-gray-200 pb-6 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            className: "w-4 h-4 mt-1 accent-red-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/App.js",
                                                            lineNumber: 1926,
                                                            columnNumber: 21
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1925,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-600 uppercase tracking-wide",
                                                                    children: "学術論文"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/App.js",
                                                                    lineNumber: 1931,
                                                                    columnNumber: 23
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1930,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                onClick: function() {
                                                                    return setViewingPaper(paper);
                                                                },
                                                                className: "text-xl font-serif text-gray-900 mb-2 hover:underline cursor-pointer",
                                                                children: paper.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1934,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-700 mb-2",
                                                                children: paper.authors
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1941,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm italic text-gray-600 mb-3",
                                                                children: [
                                                                    "SPring-8 Research Journal, Vol. ",
                                                                    paper.id,
                                                                    ", No. 1 (",
                                                                    paper.year,
                                                                    "), pp. 1-20"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1943,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-800 leading-relaxed mb-3",
                                                                children: [
                                                                    "...",
                                                                    paper.mainConclusion.substring(0, 150),
                                                                    "..."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1947,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: function() {
                                                                    return setViewingPaper(paper);
                                                                },
                                                                className: "text-sm text-blue-700 hover:underline font-medium",
                                                                children: "詳細を表示"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1951,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1929,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 flex flex-col gap-2 w-32",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: function() {
                                                                    if (paper.uploadedFile) {
                                                                        var fileURL = URL.createObjectURL(paper.uploadedFile);
                                                                        window.open(fileURL, '_blank');
                                                                    } else {
                                                                        alert('この論文のPDFファイルは利用できません');
                                                                    }
                                                                },
                                                                className: "px-4 py-2 bg-red-800 text-white text-sm rounded hover:bg-red-900 font-medium",
                                                                children: "オンライン閲覧"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1960,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 font-medium",
                                                                children: "保存"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1973,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 font-medium",
                                                                children: "引用"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1976,
                                                                columnNumber: 21
                                                            }, _this),
                                                            paper.uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: function() {
                                                                    if (window.confirm('この論文を削除しますか？')) {
                                                                        setPapers(function(prevPapers) {
                                                                            return prevPapers.filter(function(p) {
                                                                                return p.id !== paper.id;
                                                                            });
                                                                        });
                                                                    }
                                                                },
                                                                className: "px-4 py-2 border border-red-300 text-red-700 text-sm rounded hover:bg-red-50 font-medium",
                                                                children: "削除"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/App.js",
                                                                lineNumber: 1980,
                                                                columnNumber: 23
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/App.js",
                                                        lineNumber: 1959,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/App.js",
                                                lineNumber: 1924,
                                                columnNumber: 17
                                            }, _this)
                                        }, paper.id, false, {
                                            fileName: "[project]/components/App.js",
                                            lineNumber: 1923,
                                            columnNumber: 15
                                        }, _this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/App.js",
                                    lineNumber: 1921,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.js",
                            lineNumber: 1914,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/App.js",
                    lineNumber: 1615,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/App.js",
            lineNumber: 1572,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/components/App.js",
        lineNumber: 1571,
        columnNumber: 5
    }, _this);
};
_s(App, "bQzg0O/6RdhR+1+Af/oCk+tQgqM=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$App$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/App.js [client] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$App$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/index.js",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    function() {
        return __turbopack_context__.r("[project]/pages/index.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/index\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5544b6a6._.js.map