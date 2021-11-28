const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const addItemIngredients = (elements) =>
  elements.map((element) => {
    const ingredientsElItem = document.createElement("li");
    ingredientsElItem.textContent = element;
    ingredientsElItem.classList.add("item");
    return ingredientsElItem;
  });

const itemsIngredients = addItemIngredients(ingredients);

ingredientsEl.append(...itemsIngredients);
