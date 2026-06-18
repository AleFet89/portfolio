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
})({"kXTO7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
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
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
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
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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

},{}],"4pp4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cookieInformJs = require("./components/CookieInform.js");
var _cookieInformJsDefault = parcelHelpers.interopDefault(_cookieInformJs);
var _copyProtectJs = require("./components/CopyProtect.js");
var _copyProtectJsDefault = parcelHelpers.interopDefault(_copyProtectJs);
var _backgroundJs = require("./components/Background.js");
var _backgroundJsDefault = parcelHelpers.interopDefault(_backgroundJs);
var _openElementJs = require("./components/OpenElement.js");
var _openElementJsDefault = parcelHelpers.interopDefault(_openElementJs);
var _formJs = require("./components/form/Form.js");
var _formJsDefault = parcelHelpers.interopDefault(_formJs);
var _popupJs = require("./components/Popup.js");
var _popupJsDefault = parcelHelpers.interopDefault(_popupJs);
var _faqJs = require("./components/Faq.js");
var _faqJsDefault = parcelHelpers.interopDefault(_faqJs);
var _selectJs = require("./components/Select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _carouselJs = require("./components/Carousel.js");
var _carouselJsDefault = parcelHelpers.interopDefault(_carouselJs);
(0, _cookieInformJsDefault.default).inform({
    cookie: "cookieinform"
});
(0, _copyProtectJsDefault.default).protect({
    text: true,
    image: true
});
VMasker(document.querySelectorAll("[phone-mask]")).maskPattern("9 (999) 999-9999");
let popup = new (0, _popupJsDefault.default)();
popup.open();
(0, _formJsDefault.default).send(popup);
let openElement = new (0, _openElementJsDefault.default)("[element]");
openElement.open("element-show", "open");
(0, _faqJsDefault.default).start();
(0, _selectJsDefault.default).start();
let carousel = new (0, _carouselJsDefault.default)();
carousel.open();
window.onload = ()=>{
    // popup.confirm('#popup-success')
    (0, _backgroundJsDefault.default).render();
    (0, _backgroundJsDefault.default).renderImg();
};
window.onresize = ()=>{
    (0, _backgroundJsDefault.default).render();
    (0, _backgroundJsDefault.default).renderImg();
};

},{"./components/CookieInform.js":"lZw85","./components/CopyProtect.js":"4DJwC","./components/Background.js":"iYsfk","./components/OpenElement.js":"imwSB","./components/form/Form.js":"klRj7","./components/Popup.js":"jeOS7","./components/Faq.js":"1rEUJ","./components/Select.js":"eZAUA","./components/Carousel.js":"hSrRW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lZw85":[function(require,module,exports) {
// Сообщение об использовании файлов куки
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CookieInform {
    static getName(name) {
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    static inform(option) {
        if (typeof option != "object") return;
        let cookieInform = this.getName(option.cookie);
        let selectorBlock = option.open ? option.open : "#cookie-notice";
        let selectorClose = option.close ? option.close : "#cookie-close";
        let cookieNotice = document.querySelector(selectorBlock);
        let cookieClose = document.querySelector(selectorClose);
        if (cookieInform != "no" && cookieNotice) {
            cookieNotice.style.display = "block";
            cookieClose.addEventListener("click", ()=>{
                cookieNotice.style.display = "none";
                let date = new Date;
                date.setDate(date.getDate() + 1);
                document.cookie = option.cookie + "=no; sameSite=Lax; path=/; expires=" + date.toUTCString();
            });
        }
    }
}
exports.default = CookieInform;

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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"4DJwC":[function(require,module,exports) {
// Добавление названия сайта к копируемому тексту
// Dывод предупреждения при клике правой кнопкой мыши по изображению
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CopyProtect {
    static protect(option) {
        if (typeof option != "object") return;
        if (option.text === true) document.oncopy = ()=>{
            let body = document.getElementsByTagName("body")[0];
            let selection = window.getSelection();
            let div = document.createElement("div");
            div.style.position = "absolute";
            div.style.left = "-99999px";
            body.appendChild(div);
            div.innerHTML = selection + " Источник " + window.location.href;
            selection.selectAllChildren(div);
            window.setTimeout(()=>body.removeChild(div), 0);
        };
        if (option.image === true) document.oncontextmenu = (e)=>{
            let errorMsg = "Изображения на сайте защищены авторским правом";
            let clickedEl = e == null ? e.srcElement.tagName : e.target.tagName;
            if (clickedEl == "IMG") {
                alert(errorMsg);
                return false;
            }
        };
    }
}
exports.default = CopyProtect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYsfk":[function(require,module,exports) {
// Фоновое изображение в зависимости от разрешения экрана
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Background {
    static render() {
        let width = window.screen.width;
        let images = document.querySelectorAll("[render-bg]");
        if (!images) return;
        let attr;
        for(let i = 0; i < images.length; i++){
            let defaultBg = images[i].getAttribute("data-bg-desktop");
            if (width < 481) attr = images[i].getAttribute("data-bg-mobile");
            else if (width > 480 && width < 1024) attr = images[i].getAttribute("data-bg-tablet");
            else attr = images[i].getAttribute("data-bg-desktop");
            let image = attr ? attr : defaultBg;
            images[i].style.backgroundImage = "url(" + image + ")";
        }
    }
    static renderOption() {
        let width = window.screen.width;
        let images = document.querySelectorAll("[render-bg]");
        if (!images) return;
        let attr;
        for(let i = 0; i < images.length; i++){
            let defaultBg = images[i].getAttribute("data-bg-desktop");
            let style = images[i].getAttribute("render-bg");
            if (width < 481) attr = images[i].getAttribute("data-bg-mobile");
            else if (width > 480 && width < 1024) attr = images[i].getAttribute("data-bg-tablet");
            else attr = images[i].getAttribute("data-bg-desktop");
            let image = attr ? attr : defaultBg;
            images[i].style = style + ": url(" + image + ")";
        }
    }
    static renderImg() {
        let width = window.screen.width;
        let images = document.querySelectorAll("[render-option-bg]");
        if (!images) return;
        let attr;
        for(let i = 0; i < images.length; i++){
            let defaultBg = images[i].getAttribute("option-bg-desktop");
            if (width < 481) attr = images[i].getAttribute("option-bg-mobile");
            else if (width > 480 && width < 1024) attr = images[i].getAttribute("option-bg-tablet");
            else attr = images[i].getAttribute("option-bg-desktop");
            let image = attr ? attr : defaultBg;
            images[i].style.backgroundImage = "url(" + image + ")";
        }
        let splideArrows = document.querySelectorAll(".splide__arrow");
        if (!splideArrows) return;
        splideArrows.forEach((el)=>{
            el.style = "--faq-arrow: url(/img/faq-arrow.svg);--faq-arrow-hover: url(/img/faq-arrow-hover.svg);";
        });
    }
}
exports.default = Background;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"imwSB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class OpenElement {
    constructor(selector){
        this.selector = selector;
    }
    close(show, click, element) {
        document.addEventListener("click", (e)=>{
            let t = e.target;
            let content = document.querySelectorAll(`.${show}`);
            let button = document.querySelector("[button-element]");
            if (!button) return;
            content.forEach((el)=>{
                if (!el.contains(t) && !element.contains(t) && !button.contains(t)) {
                    if (el.classList.contains(show)) {
                        el.classList.remove(show);
                        element.classList.remove(click);
                    }
                }
            });
        });
    }
    open(show, click) {
        let array = document.querySelectorAll(this.selector);
        if (!array) return;
        array.forEach((el)=>{
            el.addEventListener("click", ()=>{
                let attr = el.getAttribute(this.selector.replace(/[\[\]']+/g, ""));
                let element = document.querySelector(`[${attr}]`);
                let content = document.querySelectorAll(`.${click}`);
                if (content) content.forEach((e)=>{
                    let elem = document.querySelector(`[${e.getAttribute(this.selector.replace(/[\[\]']+/g, ""))}]`);
                    if (!elem.matches(`[${attr}]`)) {
                        e.classList.remove(click);
                        elem.classList.remove(show);
                    }
                });
                element.classList.toggle(show);
                el.classList.toggle(click);
                this.close(show, click, el);
            });
        });
    }
}
exports.default = OpenElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"klRj7":[function(require,module,exports) {
// import CreateElement from '../CreateElement.js'
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkJs = require("./Check.js");
var _checkJsDefault = parcelHelpers.interopDefault(_checkJs);
var _fetchJs = require("./Fetch.js");
var _fetchJsDefault = parcelHelpers.interopDefault(_fetchJs);
var _tooltipJs = require("./Tooltip.js");
var _tooltipJsDefault = parcelHelpers.interopDefault(_tooltipJs);
var _textareaJs = require("./Textarea.js");
var _textareaJsDefault = parcelHelpers.interopDefault(_textareaJs);
class Form {
    static form(form, popup, ym) {
        const formData = new FormData(form);
        (0, _fetchJsDefault.default).request(formData).then((response)=>{
            let message;
            let resp = JSON.parse(response);
            if (resp.type == "none") {
                popup.confirm("#error-popup");
                setTimeout(()=>popup.closeConfirm(), 3000);
            } else if (resp.type == "error") {
                console.log(resp.message);
                for(let prop in resp.message){
                    message = form.querySelector(`[${resp.message[prop].name}]`);
                    message.classList.add("tooltip-visibile");
                    message.children[0].innerHTML = resp.message[prop].text;
                    message.previousElementSibling.classList.add("form-error-border");
                }
                (0, _tooltipJsDefault.default).closeOnFocus();
            } else if (resp.type == "yes") {
                form.reset();
                // if (resp.metrika) ym(62564929, "reachGoal", resp.metrika);
                popup.confirm("#popup-success");
                setTimeout(()=>popup.closeConfirm(), 3000);
            } else if (resp.type == "promo-recall") {
                // if (resp.metrika) ym(62564929, "reachGoal", resp.metrika);
                form.reset();
                window.location.href = "/promo-success";
            }
        }).catch((error)=>{
            console.log(error);
            popup.confirm("#server-popup");
            setTimeout(()=>popup.closeConfirm(), 3000);
        });
    }
    static send(popup, ym, selector = null) {
        let defaultSelector = selector !== null ? selector : "[form-container]";
        let formArray = document.querySelectorAll(defaultSelector);
        formArray.forEach((el)=>{
            (0, _textareaJsDefault.default).start();
            let formButton = el.querySelector("[btn-form-submit]");
            formButton.addEventListener("click", (e)=>{
                e.preventDefault();
                if (!(0, _checkJsDefault.default).validation(el)) return false;
                this.form(el, popup);
            });
        });
    }
}
exports.default = Form;

},{"./Check.js":"gOfhF","./Fetch.js":"86XNp","./Tooltip.js":"jJPXx","./Textarea.js":"1PFod","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOfhF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tooltipJs = require("./Tooltip.js");
var _tooltipJsDefault = parcelHelpers.interopDefault(_tooltipJs);
class Check {
    static validation(el) {
        (0, _tooltipJsDefault.default).closeOnFocus();
        let checkbox = el.querySelector("[checkbox-input]");
        if (checkbox.checked) return true;
        else {
            let err = el.querySelector("[checkbox-error]");
            err.classList.add("tooltip-visibile");
            let errField = el.querySelector(".checkbox-area");
            errField.classList.add("form-error-border");
            return false;
        }
    }
}
exports.default = Check;

},{"./Tooltip.js":"jJPXx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jJPXx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Tooltip {
    static close() {
        let tool = document.querySelectorAll(".tooltip-visibile");
        tool.forEach((el)=>el.classList.remove("tooltip-visibile"));
        let toolFocus = document.querySelectorAll("[tool-focus]");
        toolFocus.forEach((el)=>{
            if (el.classList.contains("form-error-border")) el.classList.remove("form-error-border");
            if (el.parentElement.classList.contains("form-error-border")) el.parentElement.classList.remove("form-error-border");
        });
    }
    static closeOnFocus() {
        let tool = document.querySelectorAll("[tool-focus]");
        tool.forEach((el)=>{
            el.addEventListener("focus", ()=>{
                if (el.nextElementSibling.classList.contains("tooltip-visibile")) el.nextElementSibling.classList.remove("tooltip-visibile");
                if (el.classList.contains("form-error-border")) el.classList.remove("form-error-border");
                if (el.parentElement.classList.contains("form-error-border")) el.parentElement.classList.remove("form-error-border");
            });
        });
    }
}
exports.default = Tooltip;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86XNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Fetch {
    static async request(formData) {
        let fetchResp = await fetch("/", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            body: formData
        });
        if (!fetchResp.ok) throw new Error(`Ошибка, статус ошибки ${fetchResp.status}`);
        return await fetchResp.text();
    }
}
exports.default = Fetch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1PFod":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Textarea {
    static start() {
        let textarea = document.querySelectorAll("textarea");
        textarea.forEach((el)=>{
            el.addEventListener("input", function(e) {
                e.target.style.height = e.target.scrollHeight + 2 + "px";
            });
        });
        let textareaDefault = document.querySelectorAll("[textarea-default]");
        textareaDefault.forEach((el)=>{
            el.addEventListener("input", function(e) {
                e.target.style.height = "auto";
            });
        });
    }
    static close() {
        let textarea = document.querySelectorAll("textarea");
        textarea.forEach((el)=>{
            el.value = "";
            el.setAttribute("style", "");
        });
        let textareaDefault = document.querySelectorAll("[textarea-default]");
        textareaDefault.forEach((el)=>{
            el.value = "";
            el.setAttribute("style", "");
        });
    }
}
exports.default = Textarea;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jeOS7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tooltipJs = require("./form/Tooltip.js");
var _tooltipJsDefault = parcelHelpers.interopDefault(_tooltipJs);
var _textareaJs = require("./form/Textarea.js");
var _textareaJsDefault = parcelHelpers.interopDefault(_textareaJs);
class Popup {
    open(selector = null) {
        selector = selector !== null ? selector : "[popup-open]";
        let link = document.querySelectorAll(selector);
        link.forEach((el)=>{
            el.addEventListener("click", (e)=>{
                e.preventDefault();
                let attr = el.getAttribute(selector.replace(/[\[\]']+/g, ""));
                let popupId = document.querySelector(`#${attr}`);
                this.openPopup(popupId);
            });
        });
        let bodyContainer = document.querySelector(".body-container");
        bodyContainer.classList.add("blur");
        this.close();
    }
    disableScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
    enableScroll() {
        window.onscroll = function() {};
    }
    openPopup(selector) {
        let parent = selector;
        parent.classList.add("open");
        let bodyContainer = document.querySelector(".body-container");
        /*body.classList.add('popup-enable'); */ this.disableScroll();
        bodyContainer.classList.add("blur");
    }
    closePopup() {
        let bodyContainer = document.querySelector(".body-container");
        /*body.classList.remove('popup-enable'); */ this.enableScroll();
        bodyContainer.classList.remove("blur");
        (0, _tooltipJsDefault.default).close();
        (0, _textareaJsDefault.default).close();
    }
    confirm(selector) {
        let popupId = document.querySelector(selector);
        popupId.classList.add("open");
        let bodyContainer = document.querySelector(".body-container");
        this.disableScroll();
        bodyContainer.classList.add("blur");
        this.close();
    }
    close() {
        let popupCloseBtns = document.querySelectorAll("[close-popup]");
        if (!popupCloseBtns) return;
        popupCloseBtns.forEach((btn)=>{
            btn.addEventListener("click", (evt)=>{
                evt.preventDefault();
                let popup = btn.closest(".popup");
                popup.classList.remove("open");
                this.closePopup();
            });
        });
        //Закрытие попапа при клике вне контента
        let popupBlocks = document.querySelectorAll(".popup-block");
        if (!popupBlocks) return;
        popupBlocks.forEach((block)=>{
            document.addEventListener("click", (evt)=>{
                let target = evt.target;
                let popup_target = target == block || block.contains(target);
                let popup_body = target == block.closest(".popup-body");
                let popupActive = block.closest(".popup.open");
                if (!popup_target && popupActive && popup_body) {
                    popupActive.classList.remove("open");
                    this.closePopup();
                }
            });
        });
    }
    closeConfirm() {
        let popups = document.querySelectorAll(".popup");
        popups.forEach((el)=>{
            el.classList.remove("open");
            this.closePopup();
        });
    }
}
exports.default = Popup;

},{"./form/Tooltip.js":"jJPXx","./form/Textarea.js":"1PFod","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rEUJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Faq {
    static start() {
        let faq_item = document.querySelectorAll("[faq-item]");
        if (!faq_item) return;
        faq_item.forEach((el)=>{
            el.addEventListener("click", ()=>{
                let question = el.querySelector(".faq-question");
                let answer = el.querySelector(".faq-answer");
                if (question.classList.contains("faq-active")) this.hideFaq(question, answer);
                else {
                    question.classList.add("faq-active");
                    question.nextElementSibling.style.height = question.nextElementSibling.scrollHeight + "px";
                }
            });
        });
    // let faq_block = document.getElementById('faq-block')
    // if (!faq_block) return
    // if (faq_block) {
    //     faq_block.addEventListener('click', (e) => {
    //        let faq = e.target.parentNode
    //        if (!faq.classList.contains('faq-question')) return
    //        if (faq.classList.contains('faq-active')) {
    //           this.hideFaq(faq_block)
    //        } else {
    //           this.hideFaq(faq_block)
    //           faq.classList.add('faq-active')
    //           faq.nextElementSibling.style.height = faq.nextElementSibling.scrollHeight + 'px'
    //        }
    //     })
    // }
    }
    static hideFaq(question, answer) {
        question.classList.remove("faq-active");
        answer.style.height = "0";
    // let question = faq_item.querySelectorAll('.faq-question')
    // let answer = faq_item.querySelectorAll('.faq-answer')
    // question.forEach((el) => el.classList.remove('faq-active'))
    // answer.forEach((el) => el.style.height = '0')
    }
}
exports.default = Faq;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZAUA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Select {
    static start() {
        let select_inputs = document.querySelectorAll(".select-input");
        let select_items = document.querySelectorAll(".select-item");
        select_inputs.forEach((el)=>{
            el.addEventListener("click", ()=>{
                let select = el.closest(".input-select-field");
                select.classList.toggle("active");
            });
        });
        select_items.forEach((el)=>{
            el.addEventListener("click", (evt)=>{
                evt.preventDefault();
                el.classList.toggle("selected");
            });
        });
    }
}
exports.default = Select;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSrRW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Carousel {
    constructor(){
        this.carousel;
    }
    start(carousel) {
        this.carousel = new Splide(carousel, {
            type: "loop",
            // perPage: 5,
            autoWidth: true,
            pagination: false,
            arrows: true,
            classes: {
                // Add classes for arrows.
                arrows: "splide__arrows carousel-buttons flex-row",
                arrow: "splide__arrow faq-arrow"
            },
            breakpoints: {
                480: {
                    arrows: true
                }
            }
        }).mount();
    }
    start2(carousel) {
        this.carousel = new Splide(carousel, {
            type: "loop",
            // perPage: 3,
            gap: "5.6rem",
            autoWidth: true,
            // height   : '10rem',
            rewind: true,
            pagination: false,
            arrows: true,
            classes: {
                // Add classes for arrows.
                arrows: "splide__arrows team-buttons flex-fl_between",
                arrow: "splide__arrow team-arrow"
            }
        }).mount();
    }
    open() {
        let carousels = document.querySelectorAll(".splide");
        if (!carousels) return;
        carousels.forEach((el)=>{
            if (el.classList.contains("splide-team")) this.start2(el);
            else this.start(el);
        });
    }
}
exports.default = Carousel;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kXTO7","4pp4s"], "4pp4s", "parcelRequire8e13")

//# sourceMappingURL=script.js.map
