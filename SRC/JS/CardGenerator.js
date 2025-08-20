document.addEventListener("DOMContentLoaded", () => {
  fetch("/SRC/JSON/cards.json?t=" + new Date().getTime())
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((cards) => {
      const cardGrid = document.querySelector(".projects");
      if (cardGrid) {
        cards.forEach((card) => {
          const cardItem = document.createElement("div");
          cardItem.className = "Card-Item";
          cardItem.innerHTML = `
            <div class="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div class="h-48 overflow-hidden">
                    <img src="${card.imgSlot}" alt="${card.imgAlt}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-xl font-semibold">${card.title}</h3>
                            <div class="flex space-x-2">
                                <a href="#" class="text-blue-500 hover:text-blue-700">
                                <i class="fab fa-github"></i>
                                </a>
                                <a href="#" class="text-purple-500 hover:text-purple-700">
                                <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">${card.description}</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="${card.langStyle1}">${card.langTitle1}</span>
                            <span class="${card.langStyle2}">${card.langTitle2}</span>
                            <span class="${card.langStyle3}">${card.langTitle3}</span>
                        </div>
                    </div>
                </div>
                    `;
          cardGrid.appendChild(cardItem);
        });
      }
    })
    .catch((error) => console.error("Error fetching the JSON:", error));
});
