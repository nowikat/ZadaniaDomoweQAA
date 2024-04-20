// Tablica zawierająca składniki
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobranie referencji do listy ul#ingredients
const ulIngredients = document.getElementById("ingredients");

// Utworzenie tablicy elementów <li> za pomocą mapowania składników
const listItems = ingredients.map(ingredient => {
  // Utworzenie nowego elementu <li>
  const li = document.createElement("li");
  // Ustawienie zawartości tekstowej elementu <li> na nazwę składnika
  li.textContent = ingredient;
  // Dodanie klasy "item" do elementu <li>
  li.classList.add("item");
  // Zwrócenie utworzonego elementu <li> z aktualnym składnikiem
  return li;
});

// Dodanie wszystkich elementów <li> do listy <ul>
ulIngredients.append(...listItems);
