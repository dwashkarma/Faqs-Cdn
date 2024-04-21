'use strict';

// Sample data representing accordion items
var accordionData = [
    {
        id: "collapseOne",
        title: "Accordion Item #1",
        body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    // Add more items as needed
];
// Function to generate HTML for accordion items based on data
function generateAccordionItems(data) {
    var accordion = document.getElementById("accordion");
    if (accordion) {
        data.forEach(function (item, index) {
            var accordionItem = document.createElement("div");
            accordionItem.classList.add("accordion-item");
            accordionItem.innerHTML = "\n        <h2 class=\"accordion-header\">\n          <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#".concat(item.id, "\" aria-expanded=\"true\" aria-controls=\"").concat(item.id, "\">\n            ").concat(item.title, "\n          </button>\n        </h2>\n        <div id=\"").concat(item.id, "\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#accordionExample\">\n          <div class=\"accordion-body\">\n            <strong>").concat(item.body, "</strong>\n          </div>\n        </div>\n      ");
            if (accordion) {
                accordion.appendChild(accordionItem);
            }
        });
    }
}
// Generate accordion items based on data
generateAccordionItems(accordionData);
//# sourceMappingURL=index.js.map
