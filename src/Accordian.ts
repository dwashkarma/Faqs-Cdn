interface AccordionItem {
  id: string;
  title: string;
  body: string;
}

// Sample data representing accordion items
const accordionData: AccordionItem[] = [
  {
    id: "collapseOne",
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: "collapseOne",
    title: "Accordion Item #2",
    body: "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  // Add more items as needed
];

// Function to generate HTML for accordion items based on data
function generateAccordionItems(data: AccordionItem[]) {
  const accordion = document.getElementById("accordion");

  if (accordion) {
    data.forEach((item, index) => {
      const accordionItem = document.createElement("div");
      accordionItem.classList.add("accordion-item");

      accordionItem.innerHTML = `
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${item.id}" aria-expanded="true" aria-controls="${item.id}">
            ${item.title}
          </button>
        </h2>
        <div id="${item.id}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>${item.body}</strong>
          </div>
        </div>
      `;

      if (accordion) {
        accordion.appendChild(accordionItem);
      }
    });
  }
}

// Generate accordion items based on data
generateAccordionItems(accordionData);
