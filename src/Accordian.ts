import { faqsList } from "./raw-data/faqs";

import { faqCategories } from "./raw-data/faqs";

interface Step {
  title: string;

  description: string;

  steps: {
    title: string;

    content: string;
  }[];
}

interface AccordionItem {
  title: string;

  content: string;

  category: string;

  steps?: Step[];
}

const accordionData = faqsList;

const categoryOptions = faqCategories;

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

      if (accordion) {
        accordion.appendChild(accordionItem);
      }
    });
  }
}

// Generate accordion items based on data

// generateAccordionItems(accordionData);

let filterValue = {
  search: "",

  category: "All Categories",
};

const handleSearchChange = (event: Event) => {
  let target = event.target as HTMLInputElement;

  filterValue = { ...filterValue, search: target.value };

  console.log(target.value);

  console.log(filterValue);

  filterItems();
};

const handleCategoryChange = (event: Event) => {
  let target = event.target as HTMLInputElement;

  filterValue = { ...filterValue, category: target.value };

  console.log(filterValue);

  filterItems();
};

function removeAllChildNodes(parent: HTMLElement) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function filterItems() {
  const container = document.getElementById("faqs");

  if (container) {
    removeAllChildNodes(container);
  }

  const filteredData = accordionData.filter((item) => {
    const titleContainsSearch = item.title

      .toLowerCase()

      .includes(filterValue.search.toLowerCase());

    //Search the "Content" inside the Array

    const contentSearch = item.content

      .toLowerCase()

      .includes(filterValue.search.toLowerCase());

    //Search the description inside the nested object named:steps;

    const desContent = item.steps

      ?.flatMap((step) => step.description.toLowerCase())

      .some((description) =>
        description.includes(filterValue.search.toLowerCase())
      );

    const categoryMatches =
      filterValue.category.toLowerCase() === "all categories" ||
      item.category.toLowerCase() === filterValue.category.toLowerCase();

    return (
      (titleContainsSearch && categoryMatches) ||
      (contentSearch && categoryMatches) ||
      desContent
    );
  });

  console.log(filteredData);

  generateAccordionItems(filteredData);
}

//On DOMContentLoaded

document.addEventListener("DOMContentLoaded", () => {
  // Create input element

  const input = document.createElement("input");

  input.classList.add("form-control", "me-2");

  input.setAttribute("type", "search");

  input.setAttribute("placeholder", "Search");

  input.setAttribute("aria-label", "Search");

  input.addEventListener("change", handleSearchChange);

  // Create Category Select

  const categorySelect = document.createElement("select");

  categorySelect.classList.add("form-select", "form-select-sm");

  categorySelect.addEventListener("change", handleCategoryChange);

  const categoryOption = document.createElement("option");

  categoryOption.value = "All Categories";

  categoryOption.textContent = "All Categories";

  categorySelect.appendChild(categoryOption);

  categoryOptions.map((items) => {
    const option = document.createElement("option");

    option.value = items.value;

    option.textContent = items.value;

    categorySelect.appendChild(option);
  });

  //create form element

  const form = document.createElement("form");

  form.classList.add("d-flex", "justify-content-between");

  form.setAttribute("role", "search");

  // Append input to form

  form.appendChild(input);

  form.appendChild(categorySelect);

  form.addEventListener("submit", (event) => {
    console.log(event);

    event.preventDefault();

    filterItems(); // Filter items when form is submitted
  });

  // Append form to the container

  const container = document.getElementById("searchBox");

  if (container) {
    container.appendChild(form);
  } else {
    console.log("There is no id named:Search");
  }

  generateAccordionItems(faqsList);
});
