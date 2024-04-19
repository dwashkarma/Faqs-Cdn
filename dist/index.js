(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.accordian = factory(global.React));
})(this, (function (React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var MyComponent = function (_a) {
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("h1", null, "Hello")));
    };

    return MyComponent;

}));
//# sourceMappingURL=index.js.map
