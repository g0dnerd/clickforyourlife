/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bigly_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bigly-numbers */ \"../pkg/bigly_numbers.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bigly_numbers__WEBPACK_IMPORTED_MODULE_0__]);\nbigly_numbers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst wealthAmount = document.getElementById(\"current-worth\");\nconst wealthChangeToast = document.getElementById(\"worth-change-toast\");\nconst growthRate = document.getElementById(\"current-growth\");\nconst buttonOfJoy = document.getElementById(\"button-of-joy\");\nconst buttonOfWork = document.getElementById(\"button-of-work\");\nconst joyAlert = document.getElementsByClassName(\"buttons joy alert\")[0];\nconst workAlert = document.getElementsByClassName(\"buttons work alert\")[0];\n\nbuttonOfJoy.addEventListener(\"click\", feelJoy);\nbuttonOfWork.addEventListener(\"click\", workHarder);\n\nlet player = bigly_numbers__WEBPACK_IMPORTED_MODULE_0__.Player.new();\nlet joyCooldown = 3600000;\nlet joyLimited = false;\nsetInterval(tick, 1000);\nrequestAnimationFrame(renderLoop);\n\nfunction tick() {\n  player.tick();\n}\n\nfunction feelJoy() {\n  buttonOfJoy.disabled = true;\n  joyLimited = true;\n  joyAlert.textContent =\n    \"Your hourly joy limit has been reached. Your supervisor will contact you shortly to schedule a performance review.\";\n  wealthChangeToast.textContent = \"-5\";\n  wealthChangeToast.className = \"wealth-o-meter status worth-toast active\";\n  setTimeout(\n    () =>\n      (wealthChangeToast.className =\n        \"wealth-o-meter status worth-toast inactive\"),\n    1000,\n  );\n  player.bump(5.0);\n  setInterval(() => countdownJoy(10), 10);\n}\n\nfunction workHarder() {\n  workAlert.textContent = \"The corporation thanks you for your contribution.\";\n  player.increase_rate(0.01);\n  setTimeout(() => (workAlert.textContent = \"\"), 4000);\n}\n\nfunction clearJoy() {\n  joyLimited = false;\n  joyCooldown = 3600000;\n  joyAlert.textContent = \"\";\n  buttonOfJoy.textContent = \"Feel joy\";\n  buttonOfJoy.disabled = false;\n}\n\nfunction countdownJoy(amount) {\n  joyCooldown -= amount;\n  let minutes = Math.floor(joyCooldown / 60000);\n  let seconds = Math.floor((joyCooldown % 60000) / 1000);\n  let milliseconds = joyCooldown % 1000;\n  let formattedTime = `${minutes.toString().padStart(2, \"0\")}:${seconds.toString().padStart(2, \"0\")}:${milliseconds.toString().slice(0, 2).padStart(2, \"0\")}`;\n  buttonOfJoy.textContent = formattedTime;\n  if (joyCooldown <= 0) {\n    clearJoy();\n  }\n}\n\nfunction renderLoop() {\n  const wealth = player.render();\n  const growth = player.render_rate();\n  wealthAmount.textContent = `You are currently worth ${wealth} currency.`;\n  growthRate.textContent = `Your net worth is increasing by ${growth} currency per second.`;\n  requestAnimationFrame(renderLoop);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = \"html {\\n  --flow-small: 10px;\\n  --flow-medium: 20px;\\n  --black: #161b27;\\n  --true-black: #111;\\n  --main-color: #00a5d6;\\n  --secondary-color: #273582;\\n  --text-gray: #4a5056;\\n  --gray: #9da4b2;\\n  --yellow: #ffce00;\\n  --green: limegreen;\\n  --red: red;\\n  --border: 1px solid RGBA(0, 0, 0, 0.2);\\n  --radius: 5px;\\n  --inner-padding: 5px;\\n  background: #252525;\\n}\\n\\n.open-sans-variable {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-weight: 200 700;\\n  font-display: swap;\\n  font-style: normal;\\n}\\n\\nbody.big-number {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n}\\n\\n.big-number.darkmode {\\n  background: #252525;\\n  color: white;\\n  --border: 1px solid RGBA(255, 255, 255, 0.2);\\n}\\n\\n.container {\\n  justify-content: center;\\n  align-items: center;\\n  display: flex;\\n  flex-flow: column wrap;\\n}\\n\\n.container > * {\\n  text-align: center;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-flow: column;\\n  h1 {\\n    font-size: 1.8em;\\n    border-bottom: 1px solid white;\\n    padding-bottom: 5px;\\n    margin-top: 0.3em;\\n    font-weight: 600;\\n    margin-block-end: 0em;\\n  }\\n  h4.subtitle {\\n    margin-block-start: 0.2em;\\n    font-size: 0.8em;\\n    text-transform: uppercase;\\n    color: var(--gray);\\n    font-weight: 400;\\n  }\\n}\\n\\n.wealth-o-meter {\\n  margin-block-start: 0.5em;\\n  display: flex;\\n  flex-flow: column;\\n  text-align: center;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.wealth-o-meter.status {\\n  display: flex;\\n  flex-flow: column;\\n  position: relative;\\n}\\n.wealth-o-meter.status.worth {\\n  font-size: 1.2em;\\n  margin-bottom: 0px;\\n}\\n.wealth-o-meter.status.worth-toast.inactive {\\n  display: none;\\n  opacity: 0;\\n}\\n.wealth-o-meter.status.worth-toast.active {\\n  display: absolute;\\n  position: absolute;\\n  bottom: 2rem;\\n  left: 65%;\\n  font-size: 0.9rem;\\n  color: red;\\n  opacity: 1;\\n  animation: fadeOut 2.5s forwards;\\n}\\n.wealth-o-meter.status.growth {\\n  margin-top: 0px;\\n  color: var(--gray);\\n}\\n\\n@keyframes fadeOut {\\n  0% {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n  100% {\\n    opacity: 0;\\n    transform: translateY(-20px);\\n  }\\n}\\n\\n.buttons {\\n  width: 50%;\\n  display: flex;\\n  flex-flow: column wrap;\\n  p {\\n    margin-top: 0px;\\n    width: 100%;\\n  }\\n}\\n\\nbutton {\\n  margin-top: 1em;\\n  font-weight: 500;\\n  text-align: center;\\n  text-decoration: none;\\n  color: white;\\n  background-color: var(--main-color);\\n  padding: 7px 5px;\\n  font-size: 1.2em;\\n}\\n\\nbutton:hover {\\n  background-color: white;\\n  color: var(--main-color);\\n}\\n\\nbutton:disabled {\\n  pointer-events: none;\\n  color: #ccc;\\n  background: transparent;\\n  border: var(--border);\\n}\\n\\n.footer {\\n  position: fixed;\\n  width: 100%;\\n  margin: auto;\\n  bottom: 0;\\n  font-size: 0.7rem;\\n  font-weight: 200;\\n  color: var(--gray);\\n  p {\\n    text-align: center;\\n  }\\n}\\n\";\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "../pkg/bigly_numbers.js":
/*!*******************************!*\
  !*** ../pkg/bigly_numbers.js ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.Player),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bigly_numbers_bg.wasm */ \"../pkg/bigly_numbers_bg.wasm\");\n/* harmony import */ var _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigly_numbers_bg.js */ \"../pkg/bigly_numbers_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_start();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../pkg/bigly_numbers.js?");

/***/ }),

/***/ "../pkg/bigly_numbers_bg.js":
/*!**********************************!*\
  !*** ../pkg/bigly_numbers_bg.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nconst PlayerFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_player_free(ptr >>> 0, 1));\n\nclass Player {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(Player.prototype);\n        obj.__wbg_ptr = ptr;\n        PlayerFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        PlayerFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_player_free(ptr, 0);\n    }\n    /**\n     * @returns {Player}\n     */\n    static new() {\n        const ret = wasm.player_new();\n        return Player.__wrap(ret);\n    }\n    tick() {\n        wasm.player_tick(this.__wbg_ptr);\n    }\n    /**\n     * @param {number} amount\n     */\n    bump(amount) {\n        wasm.player_bump(this.__wbg_ptr, amount);\n    }\n    /**\n     * @param {number} amount\n     */\n    increase_rate(amount) {\n        wasm.player_increase_rate(this.__wbg_ptr, amount);\n    }\n    /**\n     * @returns {string}\n     */\n    render() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const ret = wasm.player_render(this.__wbg_ptr);\n            deferred1_0 = ret[0];\n            deferred1_1 = ret[1];\n            return getStringFromWasm0(ret[0], ret[1]);\n        } finally {\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n    /**\n     * @returns {string}\n     */\n    render_rate() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const ret = wasm.player_render_rate(this.__wbg_ptr);\n            deferred1_0 = ret[0];\n            deferred1_1 = ret[1];\n            return getStringFromWasm0(ret[0], ret[1]);\n        } finally {\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n}\n\nfunction __wbindgen_init_externref_table() {\n    const table = wasm.__wbindgen_export_0;\n    const offset = table.grow(4);\n    table.set(0, undefined);\n    table.set(offset + 0, undefined);\n    table.set(offset + 1, null);\n    table.set(offset + 2, true);\n    table.set(offset + 3, false);\n    ;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/bigly_numbers_bg.js?");

/***/ }),

/***/ "../pkg/bigly_numbers_bg.wasm":
/*!************************************!*\
  !*** ../pkg/bigly_numbers_bg.wasm ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./bigly_numbers_bg.js */ \"../pkg/bigly_numbers_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"1fd009628aa46dac5bf6\", {\n\t\"./bigly_numbers_bg.js\": {\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\"__wbindgen_init_externref_table\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table\n\t}\n});\n\n//# sourceURL=webpack:///../pkg/bigly_numbers_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 		
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./style.css");
/******/ 	
/******/ })()
;