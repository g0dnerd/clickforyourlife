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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bigly_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bigly-numbers */ \"../pkg/bigly_numbers.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bigly_numbers__WEBPACK_IMPORTED_MODULE_0__]);\nbigly_numbers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst workButton = document.getElementById(\"button-of-work\");\nconst joyButton = document.getElementById(\"button-of-joy\");\nconst greeting = document.getElementById(\"greeting\");\nconst worthCounter = document.getElementById(\"current-worth\");\nconst growthCounter = document.getElementById(\"current-growth\");\nconst purchase1 = document.getElementById(\"purchase-1\");\nconst purchase2 = document.getElementById(\"purchase-2\");\nconst purchase3 = document.getElementById(\"purchase-3\");\nconst purchase4 = document.getElementById(\"purchase-4\");\nconst purchase5 = document.getElementById(\"purchase-5\");\nconst purchase6 = document.getElementById(\"purchase-6\");\nconst purchase7 = document.getElementById(\"purchase-7\");\nconst purchase8 = document.getElementById(\"purchase-8\");\nconst purchase9 = document.getElementById(\"purchase-9\");\nconst infoPanel = document.getElementById(\"info-panel\");\nconst itemName = document.getElementById(\"item-name\");\nconst itemDescription = document.getElementById(\"item-description\");\n\nworkButton.addEventListener(\"click\", workHarder);\njoyButton.addEventListener(\"click\", feelJoy);\npurchase1.addEventListener(\"click\", () => purchase(1));\npurchase2.addEventListener(\"click\", () => purchase(2));\npurchase3.addEventListener(\"click\", () => purchase(3));\npurchase4.addEventListener(\"click\", () => purchase(4));\npurchase5.addEventListener(\"click\", () => purchase(5));\npurchase6.addEventListener(\"click\", () => purchase(6));\npurchase7.addEventListener(\"click\", () => purchase(7));\npurchase8.addEventListener(\"click\", () => purchase(8));\npurchase9.addEventListener(\"click\", () => purchase(9));\npurchase1.addEventListener(\"mouseover\", () => showItemInfo(1));\npurchase2.addEventListener(\"mouseover\", () => showItemInfo(2));\npurchase3.addEventListener(\"mouseover\", () => showItemInfo(3));\npurchase4.addEventListener(\"mouseover\", () => showItemInfo(4));\npurchase5.addEventListener(\"mouseover\", () => showItemInfo(5));\npurchase6.addEventListener(\"mouseover\", () => showItemInfo(6));\npurchase7.addEventListener(\"mouseover\", () => showItemInfo(7));\npurchase8.addEventListener(\"mouseover\", () => showItemInfo(8));\npurchase9.addEventListener(\"mouseover\", () => showItemInfo(9));\npurchase1.addEventListener(\"mouseout\", clearItemInfo);\npurchase2.addEventListener(\"mouseout\", clearItemInfo);\npurchase3.addEventListener(\"mouseout\", clearItemInfo);\npurchase4.addEventListener(\"mouseout\", clearItemInfo);\npurchase5.addEventListener(\"mouseout\", clearItemInfo);\npurchase6.addEventListener(\"mouseout\", clearItemInfo);\npurchase7.addEventListener(\"mouseout\", clearItemInfo);\npurchase8.addEventListener(\"mouseout\", clearItemInfo);\npurchase9.addEventListener(\"mouseout\", clearItemInfo);\n\nconst JOY_DURATION = 10000;\nconst JOY_COOLDOWN = 3600000;\nconst ITEM_NAMES = [\n  \"ErgoFlex™ Seating Solution\",\n  \"Productivity Surface Pro™\",\n  \"Sanitation Privilege Pass™\",\n  \"Luminance Access Plan™\",\n];\nconst ITEM_DESCRIPTIONS = [\n  \"Why stand all day when you could subscribe to comfort? With an affordable monthly plan, you can gain access to a company-approved seating apparatus, reducing unnecessary fatigue. Sitting: It’s no longer just for management!\",\n  \"Eliminate the hassle of balancing paperwork on your lap! This exclusive rental grants you access to a stable, level workspace for increased efficiency. Because working from the floor shouldn’t be your only option.\",\n  \"Enjoy exclusive restroom access at scheduled intervals! Without this essential plan, restroom visits may be difficult to arrange. Stay compliant and comfortable by securing your hygiene privileges today.\",\n];\n\nlet player = bigly_numbers__WEBPACK_IMPORTED_MODULE_0__.Player.new();\nlet exhaustionLevel = 0;\nlet lastJoyFelt = Date.now();\nlet joyCooldownStart = Date.now();\n\ngreeting.textContent = `Greetings, employee ${player.render_name()}.`;\n\nsetInterval(tick, 1000);\nrequestAnimationFrame(renderLoop);\n\nfunction renderLoop() {\n  const wealth = player.render();\n  const growth = player.render_rate();\n  worthCounter.textContent = `You are currently worth ${wealth} currency.`;\n  growthCounter.innerHTML = `Your net worth<span class=\"superscript\">1</span> is increasing by ${growth} currency per second.`;\n\n  requestAnimationFrame(renderLoop);\n}\n\nfunction workHarder() {\n  workButton.disabled = true;\n  setTimeout(() => (workButton.disabled = false), 4000);\n  player.increase_rate(0.01);\n  exhaustionLevel = player.work();\n  workButton.textContent = \"Thank you for your contribution\";\n  setTimeout(() => (workButton.textContent = \"Work harder\"), 4000);\n}\n\nfunction feelJoy() {\n  joyButton.disabled = true;\n  joyButton.className = \"buttons joy btn joyous\";\n  setTimeout(() => (joyButton.className = \"buttons joy btn\"), JOY_DURATION);\n\n  lastJoyFelt = Date.now();\n  countdownJoy();\n  const joyIntervalID = setInterval(countdownJoy, 10);\n  setTimeout(() => finishJoy(joyIntervalID), JOY_DURATION);\n\n  player.bump(5.0);\n}\n\nfunction tick() {\n  player.tick();\n}\n\nfunction countdownJoy() {\n  const now = Date.now();\n  const elapsed = now - lastJoyFelt;\n  const remainingTime = JOY_DURATION - elapsed;\n  const formattedTime = formatTimer(remainingTime, false);\n\n  joyButton.textContent = `Please feel joyous for ${formattedTime} more seconds.`;\n}\n\nfunction finishJoy(intervalID) {\n  clearInterval(intervalID);\n  joyButton.className = \"buttons joy btn cooldown\";\n  setTimeout(() => (joyButton.className = \"buttons joy btn\"), JOY_COOLDOWN);\n\n  cooldownJoy();\n  const cooldownIntervalID = setInterval(cooldownJoy, 10);\n  setTimeout(() => finishJoyCooldown(cooldownIntervalID), JOY_COOLDOWN);\n}\n\nfunction cooldownJoy() {\n  const now = Date.now();\n  const elapsed = now - joyCooldownStart;\n  const remainingTime = JOY_COOLDOWN - elapsed;\n  const formattedTime = formatTimer(remainingTime, true);\n\n  joyButton.textContent = `Your hourly joy limit has been reached: ${formattedTime}`;\n}\n\nfunction finishJoyCooldown(intervalID) {\n  clearInterval(intervalID);\n  joyButton.textContent = \"Feel joy\";\n  joyButton.style.fontFamily = \"Open Sans\";\n  joyButton.style.fontSize = \"1.5rem\";\n  joyButton.disabled = false;\n}\n\nfunction formatTimer(timer, showMinutes) {\n  const pad = (num) => num.toString().padStart(2, \"0\");\n\n  const secs = Math.floor((timer % 60000) / 1000);\n  const millis = Math.floor((timer % 1000) / 10);\n  if (showMinutes) {\n    const mins = Math.floor(timer / 60000);\n    return `${pad(mins)}:${pad(secs)}:${pad(millis)}`;\n  }\n\n  return `${pad(secs)}:${pad(millis)}`;\n}\n\nfunction purchase(itemIndex) {\n  const success = player.attempt_purchase(itemIndex);\n  const callerName = `purchase-${itemIndex}`;\n  const caller = document.getElementById(callerName);\n  const oldName = caller.textContent;\n  if (!success) {\n    caller.className = \"store purchase item failure\";\n    caller.textContent = \"You possess insufficient currency\";\n    caller.disabled = true;\n    setTimeout(() => (caller.className = \"store purchase item\"), 3000);\n    setTimeout(() => (caller.textContent = oldName), 3000);\n    setTimeout(() => (caller.disabled = false), 3000);\n  } else {\n    caller.className = \"store purchase item success\";\n    setTimeout(() => (caller.className = \"store purchase item\"), 3000);\n    caller.textContent = \"Thank you for your subscription\";\n    const newPrice = player.get_item_price(itemIndex);\n    const newName = `${ITEM_NAMES[itemIndex - 1]} (${newPrice})`;\n    setTimeout(() => (caller.textContent = newName), 3000);\n  }\n}\n\nfunction showItemInfo(itemIndex) {\n  infoPanel.className = \"info-panel\";\n  const price = player.get_item_price(itemIndex);\n  itemName.textContent = `${ITEM_NAMES[itemIndex - 1]} (${price})`;\n  itemDescription.textContent = ITEM_DESCRIPTIONS[itemIndex - 1];\n}\n\nfunction clearItemInfo() {\n  infoPanel.className = \"info-panel inactive\";\n  itemName.textContent = \"\";\n  itemDescription.textContent = \"\";\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = \"html {\\n  --flow-small: 10px;\\n  --flow-medium: 20px;\\n  --black: #161b27;\\n  --true-black: #111;\\n  --main-color: #00a5d6;\\n  --secondary-color: #273582;\\n  --text-gray: #4a5056;\\n  --gray: #9da4b2;\\n  --yellow: #ffce00;\\n  --green: limegreen;\\n  --red: red;\\n  --border: 2px solid RGBA(0, 0, 0, 0.4);\\n  --radius: 5px;\\n  --inner-padding: 5px;\\n  background: #252525;\\n  font-size: 1.8em;\\n}\\n\\n.open-sans-variable {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-optical-sizing: auto;\\n  font-weight: 200;\\n  font-display: swap;\\n  font-style: normal;\\n  font-variation-settings: \\\"wdth\\\" 100;\\n}\\n\\n@font-face {\\n  font-family: \\\"Courier New\\\";\\n  font-weight: 200;\\n  font-display: swap;\\n  font-style: normal;\\n}\\n\\n.container {\\n  display: grid;\\n  gap: 0 2rem;\\n  grid-template-columns: 1fr 1fr 1fr;\\n}\\n\\nbody.app {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n}\\n\\nbody.darkmode {\\n  background: #252525;\\n  color: white;\\n  --border: 1px solid RGBA(255, 255, 255, 0.2);\\n}\\n\\nh1 {\\n  text-align: center;\\n  font-size: 1.2rem;\\n  border-bottom: 1px solid white;\\n  padding-bottom: 5px;\\n  margin-top: 0.3em;\\n  font-weight: 600;\\n}\\n\\nh4 {\\n  text-align: center;\\n  margin-top: -1em;\\n  font-size: 0.5rem;\\n  text-transform: uppercase;\\n  color: var(--gray);\\n  font-weight: 400;\\n  margin-block-end: 3em;\\n}\\n\\nh5 {\\n  text-align: center;\\n}\\n\\n.wealth-o-meter.panel-header {\\n  grid-column-start: 1;\\n  grid-column-end: 2;\\n}\\n\\n.panel-header {\\n  margin: 0;\\n  text-align: center;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n}\\n\\n.panel-header.intro {\\n  font-size: 0.5rem;\\n  color: var(--gray);\\n  display: inline-block;\\n}\\n\\n.panel-header.title {\\n  color: white;\\n  font-size: 1rem;\\n}\\n\\n.panel-header.subtitle {\\n  font-size: 0.5rem;\\n  color: var(--gray);\\n  margin-bottom: 1rem;\\n}\\n\\n@keyframes fadeOut {\\n  0% {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n  100% {\\n    opacity: 0;\\n    transform: translateY(-40px);\\n  }\\n}\\n\\n.interaction-pane {\\n  grid-column-start: 1;\\n  grid-column-end: 2;\\n  grid-row-start: 2;\\n  grid-row-end: 7;\\n  display: flex;\\n  flex-flow: column;\\n}\\n\\n.buttons {\\n  text-align: center;\\n}\\n\\nbutton {\\n  background: transparent;\\n  width: 100%;\\n  min-width: 10em;\\n  max-width: 500px;\\n  max-height: 3.2rem;\\n  margin: 0 0.3em 0.3em 0;\\n  display: inline-block;\\n  box-sizing: border-box;\\n  text-transform: uppercase;\\n  font-weight: 500;\\n  text-decoration: none;\\n  color: white;\\n  padding: 0.8rem 1.2em;\\n  font-size: 0.8rem;\\n  border: var(--border);\\n  border-radius: var(--radius);\\n  transition: all 0.2s;\\n  line-height: 1rem;\\n  justify-content: center;\\n}\\n\\n@media all and (max-width: 30em) {\\n  button {\\n    display: block;\\n    margin: 0.4em auto;\\n  }\\n}\\n\\nbutton:hover {\\n  background-color: white;\\n  color: var(--main-color);\\n}\\nbutton:active {\\n  color: #bbbbbb;\\n  border-color: #bbbbbb;\\n}\\n\\nbutton.joy:disabled {\\n  pointer-events: none;\\n  color: #ccc;\\n  background: transparent;\\n  border-color: red;\\n}\\n\\nbutton.joy.joyous {\\n  font-family: \\\"Courier New\\\";\\n  font-size: 0.7rem;\\n  border-color: green;\\n}\\nbutton.joy.cooldown {\\n  font-family: \\\"Courier New\\\";\\n  font-size: 0.7rem;\\n}\\n\\nbutton.work:disabled {\\n  pointer-events: none;\\n  color: #ccc;\\n  background: transparent;\\n  border-color: green;\\n}\\n\\n.store {\\n  grid-column-start: 2;\\n  grid-column-end: 3;\\n}\\n\\n.store.panel-header {\\n  word-wrap: break-word;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n  text-align: center;\\n}\\n\\n.store.purchase {\\n  display: flex;\\n  flex-flow: column wrap;\\n  align-items: center;\\n  grid-row-start: 2;\\n  grid-row-end: 7;\\n}\\n\\n.store.purchase.item.failure {\\n  border-color: red;\\n}\\n\\n.store.purchase.item.success {\\n  border-color: green;\\n}\\n\\nbutton.store {\\n  min-height: 2rem;\\n  max-height: 2rem;\\n  font-size: 0.5rem;\\n}\\n\\nbutton.store.inactive {\\n  pointer-events: none;\\n  color: #ccc;\\n  background: transparent;\\n  border-color: red;\\n  opacity: 0%;\\n}\\n\\nbutton.store:disabled {\\n  pointer-events: none;\\n  color: #ccc;\\n  background: transparent;\\n  border-color: red;\\n}\\n\\nspan.superscript {\\n  font-size: 50%;\\n  vertical-align: super;\\n}\\n\\n.info-panel {\\n  grid-row-start: 2;\\n  grid-row-end: 7;\\n  grid-column-start: 3;\\n  grid-column-end: 4;\\n  margin: 0;\\n  padding: 0 1rem 0 1rem;\\n}\\n\\n.info-panel.inactive {\\n  opacity: 0%;\\n}\\n\\n.info-panel.name {\\n  font-size: 0.6rem;\\n  margin-bottom: 0.3rem;\\n}\\n\\n.info-panel.description {\\n  padding: 0.2rem 1rem 0.2rem 1rem;\\n  font-size: 0.5rem;\\n  border: var(--border);\\n  border-radius: var(--radius);\\n  border-color: var(--gray);\\n}\\n\\n.footer {\\n  position: fixed;\\n  bottom: 0;\\n  font-size: 0.7rem;\\n  font-weight: 200;\\n  color: var(--gray);\\n}\\n\\nul.footnote {\\n  list-style-type: none;\\n  padding: 0.2rem;\\n  text-align: left;\\n  margin-top: 0;\\n  font-size: 0.3rem;\\n  counter-increment: section;\\n}\\n\";\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "../pkg/bigly_numbers.js":
/*!*******************************!*\
  !*** ../pkg/bigly_numbers.js ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.Player),\n/* harmony export */   Supervisor: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.Supervisor),\n/* harmony export */   __wbg_getRandomValues_78e016fdd1d721cf: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getRandomValues_78e016fdd1d721cf),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bigly_numbers_bg.wasm */ \"../pkg/bigly_numbers_bg.wasm\");\n/* harmony import */ var _bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigly_numbers_bg.js */ \"../pkg/bigly_numbers_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_bigly_numbers_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n_bigly_numbers_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_start();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../pkg/bigly_numbers.js?");

/***/ }),

/***/ "../pkg/bigly_numbers_bg.js":
/*!**********************************!*\
  !*** ../pkg/bigly_numbers_bg.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Supervisor: () => (/* binding */ Supervisor),\n/* harmony export */   __wbg_getRandomValues_78e016fdd1d721cf: () => (/* binding */ __wbg_getRandomValues_78e016fdd1d721cf),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction addToExternrefTable0(obj) {\n    const idx = wasm.__externref_table_alloc();\n    wasm.__wbindgen_export_2.set(idx, obj);\n    return idx;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        const idx = addToExternrefTable0(e);\n        wasm.__wbindgen_exn_store(idx);\n    }\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nconst PlayerFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_player_free(ptr >>> 0, 1));\n\nclass Player {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(Player.prototype);\n        obj.__wbg_ptr = ptr;\n        PlayerFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        PlayerFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_player_free(ptr, 0);\n    }\n    /**\n     * @returns {Player}\n     */\n    static new() {\n        const ret = wasm.player_new();\n        return Player.__wrap(ret);\n    }\n    tick() {\n        wasm.player_tick(this.__wbg_ptr);\n    }\n    /**\n     * @param {number} amount\n     */\n    bump(amount) {\n        wasm.player_bump(this.__wbg_ptr, amount);\n    }\n    /**\n     * @returns {string}\n     */\n    render_name() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const ret = wasm.player_render_name(this.__wbg_ptr);\n            deferred1_0 = ret[0];\n            deferred1_1 = ret[1];\n            return getStringFromWasm0(ret[0], ret[1]);\n        } finally {\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n    /**\n     * @param {number} amount\n     */\n    increase_rate(amount) {\n        wasm.player_increase_rate(this.__wbg_ptr, amount);\n    }\n    /**\n     * @returns {number}\n     */\n    work() {\n        const ret = wasm.player_work(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n     * @param {number} item_index\n     * @returns {number}\n     */\n    get_item_price(item_index) {\n        const ret = wasm.player_get_item_price(this.__wbg_ptr, item_index);\n        return ret >>> 0;\n    }\n    /**\n     * @param {number} item_index\n     * @returns {number}\n     */\n    get_owned_amount(item_index) {\n        const ret = wasm.player_get_owned_amount(this.__wbg_ptr, item_index);\n        return ret >>> 0;\n    }\n    /**\n     * @param {number} item_index\n     * @returns {boolean}\n     */\n    attempt_purchase(item_index) {\n        const ret = wasm.player_attempt_purchase(this.__wbg_ptr, item_index);\n        return ret !== 0;\n    }\n    /**\n     * @returns {string}\n     */\n    render() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const ret = wasm.player_render(this.__wbg_ptr);\n            deferred1_0 = ret[0];\n            deferred1_1 = ret[1];\n            return getStringFromWasm0(ret[0], ret[1]);\n        } finally {\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n    /**\n     * @returns {string}\n     */\n    render_rate() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const ret = wasm.player_render_rate(this.__wbg_ptr);\n            deferred1_0 = ret[0];\n            deferred1_1 = ret[1];\n            return getStringFromWasm0(ret[0], ret[1]);\n        } finally {\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n}\n\nconst SupervisorFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_supervisor_free(ptr >>> 0, 1));\n\nclass Supervisor {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(Supervisor.prototype);\n        obj.__wbg_ptr = ptr;\n        SupervisorFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        SupervisorFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_supervisor_free(ptr, 0);\n    }\n    /**\n     * @returns {Supervisor}\n     */\n    static new() {\n        const ret = wasm.supervisor_new();\n        return Supervisor.__wrap(ret);\n    }\n    /**\n     * @returns {number}\n     */\n    get_alert_level() {\n        const ret = wasm.supervisor_get_alert_level(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n     * @param {number} change\n     */\n    modify_alert_level(change) {\n        wasm.supervisor_modify_alert_level(this.__wbg_ptr, change);\n    }\n}\n\nfunction __wbg_getRandomValues_78e016fdd1d721cf() { return handleError(function (arg0, arg1) {\n    globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));\n}, arguments) };\n\nfunction __wbindgen_init_externref_table() {\n    const table = wasm.__wbindgen_export_2;\n    const offset = table.grow(4);\n    table.set(0, undefined);\n    table.set(offset + 0, undefined);\n    table.set(offset + 1, null);\n    table.set(offset + 2, true);\n    table.set(offset + 3, false);\n    ;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/bigly_numbers_bg.js?");

/***/ }),

/***/ "../pkg/bigly_numbers_bg.wasm":
/*!************************************!*\
  !*** ../pkg/bigly_numbers_bg.wasm ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./bigly_numbers_bg.js */ \"../pkg/bigly_numbers_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"7277981687b5566b1588\", {\n\t\"./bigly_numbers_bg.js\": {\n\t\t\"__wbg_getRandomValues_78e016fdd1d721cf\": WEBPACK_IMPORTED_MODULE_0.__wbg_getRandomValues_78e016fdd1d721cf,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\"__wbindgen_init_externref_table\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table\n\t}\n});\n\n//# sourceURL=webpack:///../pkg/bigly_numbers_bg.wasm?");

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