const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Pobierz referencję do listy ul#ingredients
const ulIngredients = document.getElementById("ingredients");

// Iteruj przez tablicę ingredients
ingredients.forEach((ingredient) => {
  // Utwórz nowy element li
  const li = document.createElement("li");
  // Ustaw zawartość tekstową elementu li na nazwę składnika
  li.textContent = ingredient;
  // Dodaj klasę item do elementu li
  li.classList.add("item");
  // Dodaj element li do listy ul#ingredients
  ulIngredients.appendChild(li);
});