import React from 'react';

var MyComponent = function (_a) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "accordion", id: "accordionExample" },
            React.createElement("div", { className: "accordion-item" },
                React.createElement("h2", { className: "accordion-header" },
                    React.createElement("button", { className: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseOne", "aria-expanded": "true", "aria-controls": "collapseOne" }, "Accordion Item #1")),
                React.createElement("div", { id: "collapseOne", className: "accordion-collapse collapse show", "data-bs-parent": "#accordionExample" },
                    React.createElement("div", { className: "accordion-body" },
                        React.createElement("strong", null, "This is the first item's accordion body."),
                        " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                        React.createElement("code", null, ".accordion-body"),
                        ", though the transition does limit overflow."))),
            React.createElement("div", { className: "accordion-item" },
                React.createElement("h2", { className: "accordion-header" },
                    React.createElement("button", { className: "accordion-button collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseTwo", "aria-expanded": "false", "aria-controls": "collapseTwo" }, "Accordion Item #2")),
                React.createElement("div", { id: "collapseTwo", className: "accordion-collapse collapse", "data-bs-parent": "#accordionExample" },
                    React.createElement("div", { className: "accordion-body" },
                        React.createElement("strong", null, "This is the second item's accordion body."),
                        " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                        React.createElement("code", null, ".accordion-body"),
                        ", though the transition does limit overflow."))),
            React.createElement("div", { className: "accordion-item" },
                React.createElement("h2", { className: "accordion-header" },
                    React.createElement("button", { className: "accordion-button collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapseThree", "aria-expanded": "false", "aria-controls": "collapseThree" }, "Accordion Item #3")),
                React.createElement("div", { id: "collapseThree", className: "accordion-collapse collapse", "data-bs-parent": "#accordionExample" },
                    React.createElement("div", { className: "accordion-body" },
                        React.createElement("strong", null, "This is the third item's accordion body."),
                        " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                        React.createElement("code", null, ".accordion-body"),
                        ", though the transition does limit overflow."))))));
};

export { MyComponent as default };
