import { faqsList } from "./raw-data/faqs";

interface Step {
  title: string; // Enforce string type for title
  description: string;
  steps: any; // Assuming steps within a step is not allowed
}

interface AccordionItem {
  title: string;
  content: string;
  category: string;
  steps?: Step[]; // Array of Step objects
}

// Sample data representing accordion items
// const accordionData: AccordionItem[] = [
//   {
//     id: "collapseOne",
//     title: "How to open a DEMAT account with Naasa Securities online?",
//     description:
//       "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   {
//     id: "collapseTwo",
//     title: "Accordion Item #2",
//     description:
//       "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//   },
//   // Add more items as needed
// ];

const accordionData = faqsList;
// Function to generate HTML for accordion items based on data
function generateAccordionItems(data: AccordionItem[]) {
  const accordion = document.getElementById("faqs");

  if (accordion) {
    data.forEach((item, index) => {
      const accordionItem = document.createElement("div");
      accordionItem.classList.add("accordion");

      let steps = "";
      item?.steps?.map((items, index) => {
        steps += `<div>
                      <span>${items?.title}</span>
                      <span>${items?.description}</span>
                  </div>`;
      });

      {
        item?.steps
          ? (accordionItem.innerHTML = `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${index}" aria-expanded="false" aria-controls="${index}">
            <span>${item.title}</span><span>${item.category}</span>
          </button>
        </h2>
        <div id="${index}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
       
        <div class="accordion-body">
           ${steps}
          </div>
        </div>
        </div>
      `)
          : (accordionItem.innerHTML = `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${index}" aria-expanded="false" aria-controls="${index}">
            <span>${item.title}</span><span>${item.category}</span>
          </button>
        </h2>
        <div id="${index}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
       
        <div class="accordion-body">
            <div>${item.content}</div>
          </div>
        </div>
        </div>
      `);
      }
      // accordionItem.innerHTML = `
      // <div class="accordion-item">
      //   <h2 class="accordion-header">
      //     <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${index}" aria-expanded="false" aria-controls="${index}">
      //       <span>${item.title}</span><span>${item.category}</span>
      //     </button>
      //   </h2>
      //   <div id="${index}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">

      //   <div class="accordion-body">
      //       <div>${item.content}</div>
      //     </div>
      //   </div>
      //   </div>
      // `;

      if (accordion) {
        accordion.appendChild(accordionItem);
      }
    });
  }
}

// Generate accordion items based on data
generateAccordionItems(accordionData);
