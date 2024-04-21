import { faqsList } from "./raw-data/faqs";

interface Step {
  title: string;
  description: string;
  steps: any;
}

interface AccordionItem {
  title: string;
  content: string;
  category: string;
  steps?: Step[];
}

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
          <button class="accordion-button collapsed d-flex flex-wrap" type="button" data-bs-toggle="collapse" data-bs-target="#${index}" aria-expanded="false" aria-controls="${index}">
            <span>${item.title}</span> 
            <span class="border border-success-subtle rounded-pill mx-2 px-2 py-1 fs-6 ">${item.category}</span>
          </button>
        </h2>
        <div id="${index}" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
       
        <div class="accordion-body">
           ${steps}
          </div>
        </div>
        </div>
      `)
          : (accordionItem.innerHTML = `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed d-flex flex-wrap" type="button" data-bs-toggle="collapse" data-bs-target="#${index}" aria-expanded="false" aria-controls="${index}">
            <span>${item.title}</span>
            <span class="border border-success-subtle rounded-pill mx-2 px-2 py-1 fs-6 ">${item.category}</span>
          </button>
        </h2>
        <div id="${index}" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
       
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
