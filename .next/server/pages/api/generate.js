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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = `\nWrite me a compliment on the person below. Please make sure the compliment is genuine and in-depth with detail to show that the person complimenting did their research\n\nPerson: \n`;\nconst generateAction = async (req, res)=>{\n    // Run first prompt\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        prompt: `${basePromptPrefix}${req.body.userInput}`,\n        temperature: 0.8,\n        max_tokens: 250\n    });\n    // For example, if there wasn't /n — GPT-3 would start writing directly after my title on the same line, so it might try and autocomplete my title instead of writing my actual blog post!\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    // I build Prompt #2.\n    const secondPrompt = `\nFirst, repeat the compliment below on the Person and add a couple of emojis that describe the compliment\n\n  Person: ${req.body.userInput}\n\n  Compliment: ${basePromptOutput.text}\n\n  Explanation:\n  `;\n    // I call the OpenAI API a second time with Prompt #2\n    const secondPromptCompletion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        prompt: `${secondPrompt}\\n`,\n        // I set a higher temperature to get more creative results\n        temperature: 0.4,\n        // I also increased max_tokens to get more text\n        max_tokens: 1200\n    });\n    // I get the output from the second prompt\n    const secondPromptOutput = secondPromptCompletion.data.choices.pop();\n    // Send over the Prompt #2 output to the frontend instead of Prompt #1\n    res.status(200).json({\n        output: secondPromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsTUFBTU0sbUJBQW1CLENBQUM7Ozs7QUFJMUIsQ0FBQztBQUNELE1BQU1DLGlCQUFpQixPQUFPQyxLQUFLQyxNQUFRO0lBQ3pDLG1CQUFtQjtJQUNuQkMsUUFBUUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFTCxpQkFBaUIsRUFBRUUsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUUzRCxNQUFNQyxpQkFBaUIsTUFBTVQsT0FBT1UsZ0JBQWdCLENBQUM7UUFDbkRDLE9BQU87UUFDUEMsUUFBUSxDQUFDLEVBQUVYLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xESyxhQUFhO1FBQ2JDLFlBQVk7SUFDZDtJQUNBLDBMQUEwTDtJQUUxTCxNQUFNQyxtQkFBbUJOLGVBQWVPLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHO0lBRXhELHFCQUFxQjtJQUNyQixNQUFNQyxlQUFlLENBQUM7OztVQUdkLEVBQUVoQixJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQzs7Y0FFakIsRUFBRU8saUJBQWlCSyxJQUFJLENBQUM7OztFQUdwQyxDQUFDO0lBRUQscURBQXFEO0lBQ3JELE1BQU1DLHlCQUF5QixNQUFNckIsT0FBT1UsZ0JBQWdCLENBQUM7UUFDM0RDLE9BQU87UUFDUEMsUUFBUSxDQUFDLEVBQUVPLGFBQWEsRUFBRSxDQUFDO1FBQzNCLDBEQUEwRDtRQUMxRE4sYUFBYTtRQUNiLCtDQUErQztRQUMvQ0MsWUFBWTtJQUNkO0lBRUEsMENBQTBDO0lBQzFDLE1BQU1RLHFCQUFxQkQsdUJBQXVCTCxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRztJQUVsRSxzRUFBc0U7SUFDdEVkLElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLFFBQVFIO0lBQW1CO0FBQ3BEO0FBRUEsaUVBQWVwQixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NyYXRjaHBhZC8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gJ29wZW5haSc7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuY29uc3QgYmFzZVByb21wdFByZWZpeCA9IGBcbldyaXRlIG1lIGEgY29tcGxpbWVudCBvbiB0aGUgcGVyc29uIGJlbG93LiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBjb21wbGltZW50IGlzIGdlbnVpbmUgYW5kIGluLWRlcHRoIHdpdGggZGV0YWlsIHRvIHNob3cgdGhhdCB0aGUgcGVyc29uIGNvbXBsaW1lbnRpbmcgZGlkIHRoZWlyIHJlc2VhcmNoXG5cblBlcnNvbjogXG5gO1xuY29uc3QgZ2VuZXJhdGVBY3Rpb24gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgLy8gUnVuIGZpcnN0IHByb21wdFxuICBjb25zb2xlLmxvZyhgQVBJOiAke2Jhc2VQcm9tcHRQcmVmaXh9JHtyZXEuYm9keS51c2VySW5wdXR9YCk7XG5cbiAgY29uc3QgYmFzZUNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgbW9kZWw6ICd0ZXh0LWRhdmluY2ktMDAyJyxcbiAgICBwcm9tcHQ6IGAke2Jhc2VQcm9tcHRQcmVmaXh9JHtyZXEuYm9keS51c2VySW5wdXR9YCxcbiAgICB0ZW1wZXJhdHVyZTogMC44LFxuICAgIG1heF90b2tlbnM6IDI1MCxcbiAgfSk7XG4gIC8vIEZvciBleGFtcGxlLCBpZiB0aGVyZSB3YXNuJ3QgL24g4oCUIEdQVC0zIHdvdWxkIHN0YXJ0IHdyaXRpbmcgZGlyZWN0bHkgYWZ0ZXIgbXkgdGl0bGUgb24gdGhlIHNhbWUgbGluZSwgc28gaXQgbWlnaHQgdHJ5IGFuZCBhdXRvY29tcGxldGUgbXkgdGl0bGUgaW5zdGVhZCBvZiB3cml0aW5nIG15IGFjdHVhbCBibG9nIHBvc3QhXG5cbiAgY29uc3QgYmFzZVByb21wdE91dHB1dCA9IGJhc2VDb21wbGV0aW9uLmRhdGEuY2hvaWNlcy5wb3AoKTtcblxuICAvLyBJIGJ1aWxkIFByb21wdCAjMi5cbiAgY29uc3Qgc2Vjb25kUHJvbXB0ID0gYFxuRmlyc3QsIHJlcGVhdCB0aGUgY29tcGxpbWVudCBiZWxvdyBvbiB0aGUgUGVyc29uIGFuZCBhZGQgYSBjb3VwbGUgb2YgZW1vamlzIHRoYXQgZGVzY3JpYmUgdGhlIGNvbXBsaW1lbnRcblxuICBQZXJzb246ICR7cmVxLmJvZHkudXNlcklucHV0fVxuXG4gIENvbXBsaW1lbnQ6ICR7YmFzZVByb21wdE91dHB1dC50ZXh0fVxuXG4gIEV4cGxhbmF0aW9uOlxuICBgO1xuXG4gIC8vIEkgY2FsbCB0aGUgT3BlbkFJIEFQSSBhIHNlY29uZCB0aW1lIHdpdGggUHJvbXB0ICMyXG4gIGNvbnN0IHNlY29uZFByb21wdENvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgbW9kZWw6ICd0ZXh0LWRhdmluY2ktMDAyJyxcbiAgICBwcm9tcHQ6IGAke3NlY29uZFByb21wdH1cXG5gLFxuICAgIC8vIEkgc2V0IGEgaGlnaGVyIHRlbXBlcmF0dXJlIHRvIGdldCBtb3JlIGNyZWF0aXZlIHJlc3VsdHNcbiAgICB0ZW1wZXJhdHVyZTogMC40LFxuICAgIC8vIEkgYWxzbyBpbmNyZWFzZWQgbWF4X3Rva2VucyB0byBnZXQgbW9yZSB0ZXh0XG4gICAgbWF4X3Rva2VuczogMTIwMCxcbiAgfSk7XG5cbiAgLy8gSSBnZXQgdGhlIG91dHB1dCBmcm9tIHRoZSBzZWNvbmQgcHJvbXB0XG4gIGNvbnN0IHNlY29uZFByb21wdE91dHB1dCA9IHNlY29uZFByb21wdENvbXBsZXRpb24uZGF0YS5jaG9pY2VzLnBvcCgpO1xuXG4gIC8vIFNlbmQgb3ZlciB0aGUgUHJvbXB0ICMyIG91dHB1dCB0byB0aGUgZnJvbnRlbmQgaW5zdGVhZCBvZiBQcm9tcHQgIzFcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBvdXRwdXQ6IHNlY29uZFByb21wdE91dHB1dCB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWN0aW9uO1xuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwiYmFzZVByb21wdFByZWZpeCIsImdlbmVyYXRlQWN0aW9uIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ1c2VySW5wdXQiLCJiYXNlQ29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsImJhc2VQcm9tcHRPdXRwdXQiLCJkYXRhIiwiY2hvaWNlcyIsInBvcCIsInNlY29uZFByb21wdCIsInRleHQiLCJzZWNvbmRQcm9tcHRDb21wbGV0aW9uIiwic2Vjb25kUHJvbXB0T3V0cHV0Iiwic3RhdHVzIiwianNvbiIsIm91dHB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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