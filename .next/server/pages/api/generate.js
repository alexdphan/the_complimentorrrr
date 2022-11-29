"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = `\nWrite me a compliment on the person below. Please make sure the compliment is genuine and in-depth with detail to show that the person complimenting did their research\n\nPerson: \n`;\nconst generateAction = async (req, res)=>{\n    // Run first prompt\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}`,\n        temperature: 0.8,\n        max_tokens: 250\n    });\n    // For example, if there wasn't /n — GPT-3 would start writing directly after my title on the same line, so it might try and autocomplete my title instead of writing my actual blog post!\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    // I build Prompt #2.\n    const secondPrompt = `\nFirst, repeat the compliment below on the Person and add a couple of emojis that describe the compliment\n\n  Person: ${req.body.userInput}\n\n  Compliment: ${basePromptOutput.text}\n\n  Explanation:\n  `;\n    // I call the OpenAI API a second time with Prompt #2\n    const secondPromptCompletion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        prompt: `${secondPrompt}\\n`,\n        // I set a higher temperature to get more creative results\n        temperature: 0.4,\n        // I also increased max_tokens to get more text\n        max_tokens: 1200\n    });\n    // I get the output from the second prompt\n    const secondPromptOutput = secondPromptCompletion.data.choices.pop();\n    // Send over the Prompt #2 output to the frontend instead of Prompt #1\n    res.status(200).json({\n        output: secondPromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ2xERSxvREFBd0I7QUFFeEIsTUFBTUUsZ0JBQWdCLElBQUlKLGlEQUFhQSxDQUFDO0lBQ3RDSyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEM7QUFFQSxNQUFNQyxTQUFTLElBQUlSLDZDQUFTQSxDQUFDRztBQUU3QixNQUFNTSxtQkFBbUIsQ0FBQzs7OztBQUkxQixDQUFDO0FBQ0QsTUFBTUMsaUJBQWlCLE9BQU9DLEtBQUtDLE1BQVE7SUFDekMsbUJBQW1CO0lBQ25CQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUVMLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBRTNELE1BQU1DLGlCQUFpQixNQUFNVCxPQUFPVSxnQkFBZ0IsQ0FBQztRQUNuREMsT0FBTztRQUNQQyxRQUFRLENBQUMsRUFBRVgsaUJBQWlCLEVBQUVFLElBQUlJLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7UUFDbERLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBQ0EsMExBQTBMO0lBRTFMLE1BQU1DLG1CQUFtQk4sZUFBZU8sSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUc7SUFFeEQscUJBQXFCO0lBQ3JCLE1BQU1DLGVBQWUsQ0FBQzs7O1VBR2QsRUFBRWhCLElBQUlJLElBQUksQ0FBQ0MsU0FBUyxDQUFDOztjQUVqQixFQUFFTyxpQkFBaUJLLElBQUksQ0FBQzs7O0VBR3BDLENBQUM7SUFFRCxxREFBcUQ7SUFDckQsTUFBTUMseUJBQXlCLE1BQU1yQixPQUFPVSxnQkFBZ0IsQ0FBQztRQUMzREMsT0FBTztRQUNQQyxRQUFRLENBQUMsRUFBRU8sYUFBYSxFQUFFLENBQUM7UUFDM0IsMERBQTBEO1FBQzFETixhQUFhO1FBQ2IsK0NBQStDO1FBQy9DQyxZQUFZO0lBQ2Q7SUFFQSwwQ0FBMEM7SUFDMUMsTUFBTVEscUJBQXFCRCx1QkFBdUJMLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHO0lBRWxFLHNFQUFzRTtJQUN0RWQsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUUg7SUFBbUI7QUFDcEQ7QUFFQSxpRUFBZXBCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhdGNocGFkLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmNvbnN0IGJhc2VQcm9tcHRQcmVmaXggPSBgXG5Xcml0ZSBtZSBhIGNvbXBsaW1lbnQgb24gdGhlIHBlcnNvbiBiZWxvdy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgY29tcGxpbWVudCBpcyBnZW51aW5lIGFuZCBpbi1kZXB0aCB3aXRoIGRldGFpbCB0byBzaG93IHRoYXQgdGhlIHBlcnNvbiBjb21wbGltZW50aW5nIGRpZCB0aGVpciByZXNlYXJjaFxuXG5QZXJzb246IFxuYDtcbmNvbnN0IGdlbmVyYXRlQWN0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIFJ1biBmaXJzdCBwcm9tcHRcbiAgY29uc29sZS5sb2coYEFQSTogJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fWApO1xuXG4gIGNvbnN0IGJhc2VDb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiAndGV4dC1kYXZpbmNpLTAwMycsXG4gICAgcHJvbXB0OiBgJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fWAsXG4gICAgdGVtcGVyYXR1cmU6IDAuOCxcbiAgICBtYXhfdG9rZW5zOiAyNTAsXG4gIH0pO1xuICAvLyBGb3IgZXhhbXBsZSwgaWYgdGhlcmUgd2Fzbid0IC9uIOKAlCBHUFQtMyB3b3VsZCBzdGFydCB3cml0aW5nIGRpcmVjdGx5IGFmdGVyIG15IHRpdGxlIG9uIHRoZSBzYW1lIGxpbmUsIHNvIGl0IG1pZ2h0IHRyeSBhbmQgYXV0b2NvbXBsZXRlIG15IHRpdGxlIGluc3RlYWQgb2Ygd3JpdGluZyBteSBhY3R1YWwgYmxvZyBwb3N0IVxuXG4gIGNvbnN0IGJhc2VQcm9tcHRPdXRwdXQgPSBiYXNlQ29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cbiAgLy8gSSBidWlsZCBQcm9tcHQgIzIuXG4gIGNvbnN0IHNlY29uZFByb21wdCA9IGBcbkZpcnN0LCByZXBlYXQgdGhlIGNvbXBsaW1lbnQgYmVsb3cgb24gdGhlIFBlcnNvbiBhbmQgYWRkIGEgY291cGxlIG9mIGVtb2ppcyB0aGF0IGRlc2NyaWJlIHRoZSBjb21wbGltZW50XG5cbiAgUGVyc29uOiAke3JlcS5ib2R5LnVzZXJJbnB1dH1cblxuICBDb21wbGltZW50OiAke2Jhc2VQcm9tcHRPdXRwdXQudGV4dH1cblxuICBFeHBsYW5hdGlvbjpcbiAgYDtcblxuICAvLyBJIGNhbGwgdGhlIE9wZW5BSSBBUEkgYSBzZWNvbmQgdGltZSB3aXRoIFByb21wdCAjMlxuICBjb25zdCBzZWNvbmRQcm9tcHRDb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiAndGV4dC1kYXZpbmNpLTAwMicsXG4gICAgcHJvbXB0OiBgJHtzZWNvbmRQcm9tcHR9XFxuYCxcbiAgICAvLyBJIHNldCBhIGhpZ2hlciB0ZW1wZXJhdHVyZSB0byBnZXQgbW9yZSBjcmVhdGl2ZSByZXN1bHRzXG4gICAgdGVtcGVyYXR1cmU6IDAuNCxcbiAgICAvLyBJIGFsc28gaW5jcmVhc2VkIG1heF90b2tlbnMgdG8gZ2V0IG1vcmUgdGV4dFxuICAgIG1heF90b2tlbnM6IDEyMDAsXG4gIH0pO1xuXG4gIC8vIEkgZ2V0IHRoZSBvdXRwdXQgZnJvbSB0aGUgc2Vjb25kIHByb21wdFxuICBjb25zdCBzZWNvbmRQcm9tcHRPdXRwdXQgPSBzZWNvbmRQcm9tcHRDb21wbGV0aW9uLmRhdGEuY2hvaWNlcy5wb3AoKTtcblxuICAvLyBTZW5kIG92ZXIgdGhlIFByb21wdCAjMiBvdXRwdXQgdG8gdGhlIGZyb250ZW5kIGluc3RlYWQgb2YgUHJvbXB0ICMxXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb3V0cHV0OiBzZWNvbmRQcm9tcHRPdXRwdXQgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUFjdGlvbjtcbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwicmVxdWlyZSIsImNvbmZpZyIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJiYXNlUHJvbXB0UHJlZml4IiwiZ2VuZXJhdGVBY3Rpb24iLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInVzZXJJbnB1dCIsImJhc2VDb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiYmFzZVByb21wdE91dHB1dCIsImRhdGEiLCJjaG9pY2VzIiwicG9wIiwic2Vjb25kUHJvbXB0IiwidGV4dCIsInNlY29uZFByb21wdENvbXBsZXRpb24iLCJzZWNvbmRQcm9tcHRPdXRwdXQiLCJzdGF0dXMiLCJqc29uIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();