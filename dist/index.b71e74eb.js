// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aHFy6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _buffer = require("./plugins/buffer");
var _bufferLine = require("./plugins/buffer-line");
var _commandBar = require("./plugins/command-bar");
var _vim = require("./vim");
var _buffer1 = require("./vim/buffers/buffer");
var _renderer = require("./vim/renderer");
const create_canvas = ()=>{
    const canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    return canvas;
};
const canvas = create_canvas();
const rendering_context = canvas.getContext("2d");
if (!rendering_context) throw new Error("Could not get rendering context");
const vim = new (0, _vim.Vim)(rendering_context);
vim.set_dimension(window.innerHeight, window.innerWidth);
// Register Plugins
vim.register_plugin((0, _bufferLine.buffer_line)({
    bg_color: "#1f2335"
}));
vim.register_plugin((0, _buffer.buffer_renderer)({
    bg_color: "#1f2335"
}));
vim.register_plugin((0, _commandBar.command_bar)({
    bg_color: "#1f2335"
}));
const renderer = (0, _renderer.create_renderer)();
document.body.appendChild(canvas);
window.onresize = ()=>{
    const { innerWidth, innerHeight } = window;
    vim.set_dimension(innerHeight, innerWidth);
    canvas.height = innerHeight;
    canvas.width = innerWidth;
};
const loop = ()=>{
    window.requestAnimationFrame(()=>{
        renderer.render(vim);
        loop();
    });
};
window.requestAnimationFrame(()=>{
    loop();
});
setTimeout(()=>{
    const buffer1 = new (0, _buffer1.Buffer)("What is Lorem Ipsum?", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    const buffer2 = new (0, _buffer1.Buffer)("Why do we use it?", "\n");
    vim.buffers.add(buffer1);
    vim.buffers.add(buffer2);
    vim.buffers.set_active_buffer(0);
}, 0);

},{"./plugins/buffer":"kzoLm","./plugins/buffer-line":"5qqu2","./plugins/command-bar":"dIUwo","./vim":"01X2g","./vim/buffers/buffer":"fyGpp","./vim/renderer":"bCjGn"}],"kzoLm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buffer_renderer", ()=>buffer_renderer);
var _utils = require("../utils");
const buffer_renderer = (options)=>{
    return {
        render (vim) {
            const ctx = vim.get_canvas_context();
            const height = vim.config.height - 60;
            const width = vim.config.width;
            ctx.save();
            ctx.fillStyle = options.bg_color ?? "#3d3d3d";
            ctx.fillRect(0, 30, width, height);
            const active_buffer = vim.buffers.get_active_buffer();
            if (active_buffer) {
                let cursor = active_buffer.get_cursor_position();
                let lines = active_buffer.get_line_descriptors();
                for(let i = 0; i < lines.length; ++i){
                    let { start, end } = lines[i];
                    let substring = active_buffer.get_text().substring(start, end);
                    // draw line number
                    ctx.fillStyle = "#4967b9";
                    ctx.font = vim.get_font();
                    ctx.fillText(i + ".", 20, (i + 2) * 30);
                    ctx.fillStyle = "#ffffff";
                    ctx.fillText(substring, 100, (i + 2) * 30);
                    if (cursor >= start && cursor <= end) {
                        let position_text = active_buffer.get_text().substring(start, cursor);
                        let offset = (0, _utils.get_text_width)(position_text, vim);
                        ctx.fillStyle = "rgba(255,255,255,0.5)";
                        ctx.fillRect(offset + 100, 7.5 + (i + 1) * 30, (0, _utils.get_text_width)("a", vim), 30);
                    }
                }
            }
            ctx.restore();
        },
        setup (vim) {}
    };
};

},{"../utils":"6Mk9B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Mk9B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get_text_width", ()=>get_text_width);
const get_text_width = (text, vim)=>{
    const ctx = vim.get_canvas_context();
    let width = 0;
    let words = text.split(" ");
    words.map((t, index)=>{
        ctx.save();
        ctx.font = `${vim.config.font_size}px ${vim.config.font_family}`;
        width += ctx.measureText(t).width;
        if (index !== words.length - 1) width += ctx.measureText("a").width;
        ctx.restore();
    });
    return width;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5qqu2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buffer_line", ()=>buffer_line);
var _utils = require("../utils");
const buffer_line = (options)=>{
    return {
        setup (vim) {},
        render (vim) {
            const ctx = vim.get_canvas_context();
            const buffers = vim.buffers;
            const height = options?.height ?? 30;
            const bg_color = options?.bg_color ?? "#3d3d3d";
            const width = vim.config.width;
            ctx.save();
            ctx.fillStyle = bg_color;
            ctx.fillRect(0, 0, width, height);
            let start = 10;
            buffers.all().map((buffer, index)=>{
                let active = buffer === buffers.get_active_buffer();
                const buffer_width = (0, _utils.get_text_width)(buffer.get_name(), vim) + 60;
                ctx.font = (active ? "italic " : "") + vim.get_font();
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(start - 8, 0, 2, 30);
                ctx.fillStyle = active ? "#ffffff" : "#4a69bd";
                ctx.fillText(buffer.get_name(), start, 20);
                start += buffer_width;
            });
            ctx.restore();
        }
    };
};

},{"../utils":"6Mk9B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIUwo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "command_bar", ()=>command_bar);
var _utils = require("../utils");
const command_bar = (options)=>{
    return {
        setup (vim) {},
        render (vim) {
            const ctx = vim.get_canvas_context();
            const height = options?.height ?? 30;
            const bg_color = options?.bg_color ?? "#3d3d3d";
            const width = vim.config.width;
            ctx.save();
            ctx.fillStyle = bg_color;
            ctx.fillRect(0, vim.config.height - 30, width, height);
            const mode = vim.config.mode;
            const length = (0, _utils.get_text_width)(mode, vim);
            ctx.fillStyle = "#ffffff";
            ctx.font = vim.get_font();
            ctx.fillText(vim.input_buffer, 20, vim.config.height - 20);
            ctx.fillText(mode.toUpperCase(), vim.config.width - length - 20, vim.config.height - 20);
            ctx.restore();
        }
    };
};

},{"../utils":"6Mk9B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01X2g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vim", ()=>Vim);
var _collection = require("./buffers/collection");
var _config = require("./config");
var _keymaps = require("./keymaps");
class Vim {
    constructor(context){
        this.context = context;
        this.config = (0, _config.get_default_config)();
        this.buffers = new (0, _collection.BufferCollection)();
        this.keymap = (0, _keymaps.get_default_keymaps)();
        this.plugins = [];
        this.input_buffer = "";
        window.addEventListener("keydown", (e)=>{
            if (this.config.mode === (0, _config.Mode).Insert) {
                this.buffers.get_active_buffer()?.write(e);
                if (e.key !== "Escape") return;
            }
            if ([
                "Meta",
                "Alt",
                "Control",
                "Shift",
                "Tab"
            ].includes(e.key)) return;
            if (e.key === "Backspace") {
                this.input_buffer = "";
                return;
            }
            if (e.key === this.config.leader) this.input_buffer = "<leader>";
            else if (e.key === "Enter") this.input_buffer += "<CR>";
            else this.input_buffer += e.key;
            if (this.config.mode === (0, _config.Mode).Command && this.keymap.get((0, _config.Mode).Command, this.input_buffer) === null) {
                let _default = this.keymap.get((0, _config.Mode).Command, "default");
                if (_default !== null) {
                    if (_default(this)) this.input_buffer = "";
                    return;
                }
            }
            const callback = this.keymap.get(this.config.mode, this.input_buffer ?? "default");
            if (callback) {
                callback(this);
                this.input_buffer = "";
            } else if (e.key === "Enter") this.input_buffer = "";
            if (e.key === "Escape") this.input_buffer = "";
        });
    }
    set_dimension(h, w) {
        this.config.width = w;
        this.config.height = h;
        return this;
    }
    get_canvas_context() {
        return this.context;
    }
    register_plugin(plugin) {
        this.plugins.push(plugin);
        plugin.setup(this);
        return this;
    }
    get_font() {
        return `${this.config.font_size}px ${this.config.font_family}`;
    }
}

},{"./buffers/collection":"bE7Hp","./config":"kQih0","./keymaps":"jtKfA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bE7Hp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferCollection", ()=>BufferCollection);
class BufferCollection {
    constructor(){
        this.active = null;
        this.items = [];
    }
    get_active_buffer() {
        if (this.active === null) return null;
        return this.items[this.active];
    }
    set_active_buffer(bufnr) {
        if (this.items[bufnr]) this.active = bufnr;
    }
    prev_buffer() {
        if (this.active === null || this.active < 1) this.set_active_buffer(this.items.length - 1);
        else this.set_active_buffer(this.active - 1);
    }
    next_buffer() {
        console.log(this.active, this.items.length);
        if (this.active === null || this.active >= this.items.length - 1) this.set_active_buffer(0);
        else this.set_active_buffer(this.active + 1);
    }
    all() {
        return this.items;
    }
    add(buffer) {
        this.items.push(buffer);
    }
    bufnr() {
        return this.active;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kQih0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mode", ()=>Mode);
parcelHelpers.export(exports, "get_default_config", ()=>get_default_config);
var Mode;
(function(Mode) {
    Mode["Insert"] = "insert";
    Mode["Visual"] = "visual";
    Mode["Command"] = "command";
    Mode["Normal"] = "normal";
})(Mode || (Mode = {}));
const get_default_config = ()=>{
    const config = {
        font_family: "monospace",
        font_size: 18,
        height: 500,
        width: 500,
        mode: "normal",
        leader: " "
    };
    return config;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtKfA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Keymap", ()=>Keymap);
parcelHelpers.export(exports, "get_default_keymaps", ()=>get_default_keymaps);
var _config = require("../config");
class Keymap {
    constructor(){
        this.keys = {
            "insert": {
                "Escape": (vim)=>vim.config.mode = (0, _config.Mode).Normal
            },
            "command": {
                "Escape": (vim)=>vim.config.mode = (0, _config.Mode).Normal,
                default: (vim)=>{
                    let buffer = vim.input_buffer;
                    const reg = new RegExp("^[0-9]:[0-9]$");
                    if (reg.test(buffer)) {
                        let bufnr = vim.buffers.bufnr();
                        if (bufnr === null) return;
                        const parts = buffer.split(":");
                        const line = parts[0];
                        const char = parts[1] ?? null;
                        vim.buffers.items[bufnr]?.move_cursor_to_line(parseInt(line), char);
                        return true;
                    }
                    return false;
                }
            },
            "normal": {
                "i": (vim)=>vim.config.mode = (0, _config.Mode).Insert,
                ":": (vim)=>vim.config.mode = (0, _config.Mode).Command,
                "v": (vim)=>vim.config.mode = (0, _config.Mode).Visual,
                "<leader>bd<CR>": (vim)=>vim.buffers.items = vim.buffers.items.filter((buf)=>buf !== vim.buffers.get_active_buffer()),
                "ArrowLeft": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_left(),
                "ArrowRight": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_right(),
                "ArrowDown": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_down(),
                "ArrowUp": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_up(),
                "[b": (vim)=>vim.buffers.prev_buffer(),
                "]b": (vim)=>vim.buffers.next_buffer(),
                "h": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_left(),
                "j": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_down(),
                "k": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_up(),
                "l": (vim)=>vim.buffers.get_active_buffer()?.move_cursor_right(),
                "w": (vim)=>{
                    let buffer = vim.buffers.get_active_buffer();
                    let buffer_len = buffer?.get_text().length ?? 0;
                    let next_char = "";
                    do {
                        let current = vim.buffers.get_active_buffer()?.get_cursor_position() ?? 0;
                        if (current >= buffer_len) next_char = " ";
                        next_char = buffer?.get_text()[current + 1] ?? " ";
                        vim.buffers.get_active_buffer()?.move_cursor_right();
                    }while (next_char !== " ");
                },
                "W": (vim)=>{
                    let buffer = vim.buffers.get_active_buffer();
                    let buffer_len = buffer?.get_text().length ?? 0;
                    let next_char = "";
                    do {
                        let current = vim.buffers.get_active_buffer()?.get_cursor_position() ?? 0;
                        if (current <= 0) next_char = " ";
                        next_char = buffer?.get_text()[current - 1] ?? " ";
                        vim.buffers.get_active_buffer()?.move_cursor_left();
                    }while (next_char !== " ");
                }
            },
            "visual": {
                "Escape": (vim)=>vim.config.mode = (0, _config.Mode).Normal
            }
        };
    }
    set(mode, keys, callable) {
        this.keys[mode][keys] = callable;
        return this;
    }
    get(mode, keys) {
        if (!this.keys[mode]) return null;
        return this.keys[mode][keys] ?? null;
    }
}
const get_default_keymaps = ()=>{
    const keymap = new Keymap();
    return keymap;
};

},{"../config":"kQih0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fyGpp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Buffer", ()=>Buffer);
class Buffer {
    constructor(name, text){
        this.name = name;
        this.text = text;
        this.calc_line_descriptors();
        this.cursor = 0;
    }
    move_cursor_to_line(line, char) {
        this.calc_line_descriptors();
        if (line < 0 || line > this.lines.length) return;
        let pos = this.lines[line].start;
        if (char !== null) pos += parseInt(char);
        this.cursor = pos;
    }
    calc_line_descriptors() {
        let start = 0;
        let line_descriptors = [];
        let lines = this.text.split("\n");
        for(let i = 0; i < lines.length; i++){
            let line = {
                start,
                end: start + lines[i].length
            };
            line_descriptors.push(line);
            start += lines[i].length + 1;
        }
        this.lines = line_descriptors;
    }
    move_cursor_left() {
        if (this.cursor <= 0) {
            this.cursor = 0;
            return;
        }
        this.cursor -= 1;
    }
    move_cursor_right() {
        if (this.cursor >= this.text.length) {
            this.cursor = this.text.length;
            return;
        }
        this.cursor += 1;
    }
    move_cursor_up() {
        this.calc_line_descriptors();
        if (this.lines.length <= 1) return;
        for(let i = 1; i < this.lines.length; ++i){
            let { start, end } = this.lines[i];
            if (start <= this.cursor && end >= this.cursor) {
                let diff = this.cursor - start;
                let prev_line = this.lines[i - 1];
                if (diff <= prev_line.end - prev_line.start) {
                    this.cursor = prev_line.start + diff;
                    return;
                } else {
                    this.cursor = prev_line.end;
                    return;
                }
            }
        }
    }
    move_cursor_down() {
        this.calc_line_descriptors();
        if (this.cursor >= this.text.length) return;
        for(let i = 0; i < this.lines.length - 1; ++i){
            let { start, end } = this.lines[i];
            if (start <= this.cursor && end >= this.cursor) {
                let diff = this.cursor - start;
                let next_line = this.lines[i + 1];
                if (diff <= next_line.end - next_line.start) {
                    this.cursor = next_line.start + diff;
                    return;
                } else {
                    this.cursor = next_line.end;
                    return;
                }
            }
        }
    }
    get_name() {
        return this.name;
    }
    get_cursor_position() {
        return this.cursor;
    }
    get_text() {
        return this.text;
    }
    get_line_descriptors() {
        return this.lines;
    }
    write(e) {
        let text = this.text;
        let cursor = this.cursor;
        switch(e.key){
            case "Enter":
                this.text = text.substring(0, cursor) + "\n" + text.substring(cursor, text.length);
                this.move_cursor_right();
                this.calc_line_descriptors();
                break;
            case "Escape":
                break;
            case "ArrowLeft":
                this.move_cursor_left();
                break;
            case "ArrowRight":
                this.move_cursor_right();
                break;
            case "ArrowUp":
                this.move_cursor_up();
                break;
            case "ArrowDown":
                this.move_cursor_down();
                break;
            case "Backspace":
                this.text = text.substring(0, cursor - 1) + text.substring(cursor, text.length);
                this.move_cursor_left();
                this.calc_line_descriptors();
                break;
            case "Delete":
                this.text = text.substring(0, cursor) + text.substring(cursor + 1, text.length);
                this.cursor = this.cursor > text.length - 1 ? text.length - 1 : this.cursor;
                this.calc_line_descriptors();
                break;
            case "Shift":
            case "Alt":
            case "Control":
            case "Meta":
            case "Command":
                break;
            default:
                const key = e.key;
                this.text = text.substring(0, cursor) + key + text.substring(cursor, text.length);
                this.cursor += key.length;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCjGn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create_renderer", ()=>create_renderer);
const create_renderer = ()=>{
    const renderer = {
        items: [],
        render (vim) {
            this.items.map((item)=>{
                item.render(vim);
            });
            vim.plugins.map((plugin)=>{
                plugin.render(vim);
            });
        },
        queue (item) {
            this.items.push(item);
        }
    };
    return renderer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aHFy6","h7u1C"], "h7u1C", "parcelRequiree6c6")

//# sourceMappingURL=index.b71e74eb.js.map
