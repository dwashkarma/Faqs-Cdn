(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.accordian = factory(global.React));
})(this, (function (React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var MyComponent = function (_a) {
        return (React__default["default"].createElement("div", null,
            React__default["default"].createElement("div", { className: "accordion", id: "accordionExample" },
                React__default["default"].createElement("div", { className: "accordion-item" },
                    React__default["default"].createElement("h2", { className: "accordion-header" },
                        React__default["default"].createElement("button", { className: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseOne", "aria-expanded": "true", "aria-controls": "collapseOne" }, "Accordion Item #1")),
                    React__default["default"].createElement("div", { id: "collapseOne", className: "accordion-collapse collapse show", "data-bs-parent": "#accordionExample" },
                        React__default["default"].createElement("div", { className: "accordion-body" },
                            React__default["default"].createElement("strong", null, "This is the first item's accordion body."),
                            " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                            React__default["default"].createElement("code", null, ".accordion-body"),
                            ", though the transition does limit overflow."))),
                React__default["default"].createElement("div", { className: "accordion-item" },
                    React__default["default"].createElement("h2", { className: "accordion-header" },
                        React__default["default"].createElement("button", { className: "accordion-button collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseTwo", "aria-expanded": "false", "aria-controls": "collapseTwo" }, "Accordion Item #2")),
                    React__default["default"].createElement("div", { id: "collapseTwo", className: "accordion-collapse collapse", "data-bs-parent": "#accordionExample" },
                        React__default["default"].createElement("div", { className: "accordion-body" },
                            React__default["default"].createElement("strong", null, "This is the second item's accordion body."),
                            " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                            React__default["default"].createElement("code", null, ".accordion-body"),
                            ", though the transition does limit overflow."))),
                React__default["default"].createElement("div", { className: "accordion-item" },
                    React__default["default"].createElement("h2", { className: "accordion-header" },
                        React__default["default"].createElement("button", { className: "accordion-button collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseThree", "aria-expanded": "false", "aria-controls": "collapseThree" }, "Accordion Item #3")),
                    React__default["default"].createElement("div", { id: "collapseThree", className: "accordion-collapse collapse", "data-bs-parent": "#accordionExample" },
                        React__default["default"].createElement("div", { className: "accordion-body" },
                            React__default["default"].createElement("strong", null, "This is the third item's accordion body."),
                            " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                            React__default["default"].createElement("code", null, ".accordion-body"),
                            ", though the transition does limit overflow."))))));
    };

    return MyComponent;

}));
//# sourceMappingURL=index.js.map
