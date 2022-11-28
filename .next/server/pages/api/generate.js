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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = `\nWrite me a compliment on the person below. Please make sure the compliment is genuine and in-depth with detail to show that the person complimenting did their research\n\nPerson: \n`;\nconst generateAction = async (req, res)=>{\n    // Run first prompt\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        prompt: `${basePromptPrefix}${req.body.userInput}\\n`,\n        temperature: 0.7,\n        max_tokens: 250\n    });\n    // For example, if there wasn't /n — GPT-3 would start writing directly after my title on the same line, so it might try and autocomplete my title instead of writing my actual blog post!\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    // I build Prompt #2.\n    const secondPrompt = `\nFirst, repeat the compliment below on the Person and add a couple of emojis that describe the compliment\n\n  Person: ${req.body.userInput}\n\n  Compliment: ${basePromptOutput.text}\n\n  Explanation:\n  `;\n    // I call the OpenAI API a second time with Prompt #2\n    const secondPromptCompletion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        prompt: `${secondPrompt}\\n`,\n        // I set a higher temperature to get more creative results\n        temperature: 0.4,\n        // I also increased max_tokens to get more text\n        max_tokens: 1200\n    });\n    // I get the output from the second prompt\n    const secondPromptOutput = secondPromptCompletion.data.choices.pop();\n    // Send over the Prompt #2 output to the frontend instead of Prompt #1\n    res.status(200).json({\n        output: secondPromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsTUFBTU0sbUJBQW1CLENBQUM7Ozs7QUFJMUIsQ0FBQztBQUNELE1BQU1DLGlCQUFpQixPQUFPQyxLQUFLQyxNQUFRO0lBQ3pDLG1CQUFtQjtJQUNuQkMsUUFBUUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFTCxpQkFBaUIsRUFBRUUsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUUzRCxNQUFNQyxpQkFBaUIsTUFBTVQsT0FBT1UsZ0JBQWdCLENBQUM7UUFDbkRDLE9BQU87UUFDUEMsUUFBUSxDQUFDLEVBQUVYLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDcERLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBQ0EsMExBQTBMO0lBRTFMLE1BQU1DLG1CQUFtQk4sZUFBZU8sSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUc7SUFFeEQscUJBQXFCO0lBQ3JCLE1BQU1DLGVBQWUsQ0FBQzs7O1VBR2QsRUFBRWhCLElBQUlJLElBQUksQ0FBQ0MsU0FBUyxDQUFDOztjQUVqQixFQUFFTyxpQkFBaUJLLElBQUksQ0FBQzs7O0VBR3BDLENBQUM7SUFFRCxxREFBcUQ7SUFDckQsTUFBTUMseUJBQXlCLE1BQU1yQixPQUFPVSxnQkFBZ0IsQ0FBQztRQUMzREMsT0FBTztRQUNQQyxRQUFRLENBQUMsRUFBRU8sYUFBYSxFQUFFLENBQUM7UUFDM0IsMERBQTBEO1FBQzFETixhQUFhO1FBQ2IsK0NBQStDO1FBQy9DQyxZQUFZO0lBQ2Q7SUFFQSwwQ0FBMEM7SUFDMUMsTUFBTVEscUJBQXFCRCx1QkFBdUJMLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHO0lBRWxFLHNFQUFzRTtJQUN0RWQsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUUg7SUFBbUI7QUFDcEQ7QUFFQSxpRUFBZXBCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhdGNocGFkLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5jb25zdCBiYXNlUHJvbXB0UHJlZml4ID0gYFxuV3JpdGUgbWUgYSBjb21wbGltZW50IG9uIHRoZSBwZXJzb24gYmVsb3cuIFBsZWFzZSBtYWtlIHN1cmUgdGhlIGNvbXBsaW1lbnQgaXMgZ2VudWluZSBhbmQgaW4tZGVwdGggd2l0aCBkZXRhaWwgdG8gc2hvdyB0aGF0IHRoZSBwZXJzb24gY29tcGxpbWVudGluZyBkaWQgdGhlaXIgcmVzZWFyY2hcblxuUGVyc29uOiBcbmA7XG5jb25zdCBnZW5lcmF0ZUFjdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyBSdW4gZmlyc3QgcHJvbXB0XG4gIGNvbnNvbGUubG9nKGBBUEk6ICR7YmFzZVByb21wdFByZWZpeH0ke3JlcS5ib2R5LnVzZXJJbnB1dH1gKTtcblxuICBjb25zdCBiYXNlQ29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogJ3RleHQtZGF2aW5jaS0wMDInLFxuICAgIHByb21wdDogYCR7YmFzZVByb21wdFByZWZpeH0ke3JlcS5ib2R5LnVzZXJJbnB1dH1cXG5gLFxuICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgbWF4X3Rva2VuczogMjUwLFxuICB9KTtcbiAgLy8gRm9yIGV4YW1wbGUsIGlmIHRoZXJlIHdhc24ndCAvbiDigJQgR1BULTMgd291bGQgc3RhcnQgd3JpdGluZyBkaXJlY3RseSBhZnRlciBteSB0aXRsZSBvbiB0aGUgc2FtZSBsaW5lLCBzbyBpdCBtaWdodCB0cnkgYW5kIGF1dG9jb21wbGV0ZSBteSB0aXRsZSBpbnN0ZWFkIG9mIHdyaXRpbmcgbXkgYWN0dWFsIGJsb2cgcG9zdCFcblxuICBjb25zdCBiYXNlUHJvbXB0T3V0cHV0ID0gYmFzZUNvbXBsZXRpb24uZGF0YS5jaG9pY2VzLnBvcCgpO1xuXG4gIC8vIEkgYnVpbGQgUHJvbXB0ICMyLlxuICBjb25zdCBzZWNvbmRQcm9tcHQgPSBgXG5GaXJzdCwgcmVwZWF0IHRoZSBjb21wbGltZW50IGJlbG93IG9uIHRoZSBQZXJzb24gYW5kIGFkZCBhIGNvdXBsZSBvZiBlbW9qaXMgdGhhdCBkZXNjcmliZSB0aGUgY29tcGxpbWVudFxuXG4gIFBlcnNvbjogJHtyZXEuYm9keS51c2VySW5wdXR9XG5cbiAgQ29tcGxpbWVudDogJHtiYXNlUHJvbXB0T3V0cHV0LnRleHR9XG5cbiAgRXhwbGFuYXRpb246XG4gIGA7XG5cbiAgLy8gSSBjYWxsIHRoZSBPcGVuQUkgQVBJIGEgc2Vjb25kIHRpbWUgd2l0aCBQcm9tcHQgIzJcbiAgY29uc3Qgc2Vjb25kUHJvbXB0Q29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogJ3RleHQtZGF2aW5jaS0wMDInLFxuICAgIHByb21wdDogYCR7c2Vjb25kUHJvbXB0fVxcbmAsXG4gICAgLy8gSSBzZXQgYSBoaWdoZXIgdGVtcGVyYXR1cmUgdG8gZ2V0IG1vcmUgY3JlYXRpdmUgcmVzdWx0c1xuICAgIHRlbXBlcmF0dXJlOiAwLjQsXG4gICAgLy8gSSBhbHNvIGluY3JlYXNlZCBtYXhfdG9rZW5zIHRvIGdldCBtb3JlIHRleHRcbiAgICBtYXhfdG9rZW5zOiAxMjAwLFxuICB9KTtcblxuICAvLyBJIGdldCB0aGUgb3V0cHV0IGZyb20gdGhlIHNlY29uZCBwcm9tcHRcbiAgY29uc3Qgc2Vjb25kUHJvbXB0T3V0cHV0ID0gc2Vjb25kUHJvbXB0Q29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cbiAgLy8gU2VuZCBvdmVyIHRoZSBQcm9tcHQgIzIgb3V0cHV0IHRvIHRoZSBmcm9udGVuZCBpbnN0ZWFkIG9mIFByb21wdCAjMVxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG91dHB1dDogc2Vjb25kUHJvbXB0T3V0cHV0IH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVBY3Rpb247XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJiYXNlUHJvbXB0UHJlZml4IiwiZ2VuZXJhdGVBY3Rpb24iLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInVzZXJJbnB1dCIsImJhc2VDb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiYmFzZVByb21wdE91dHB1dCIsImRhdGEiLCJjaG9pY2VzIiwicG9wIiwic2Vjb25kUHJvbXB0IiwidGV4dCIsInNlY29uZFByb21wdENvbXBsZXRpb24iLCJzZWNvbmRQcm9tcHRPdXRwdXQiLCJzdGF0dXMiLCJqc29uIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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