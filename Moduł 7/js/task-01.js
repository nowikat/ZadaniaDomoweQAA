// Poniższy fragment kodu używa document.querySelectorAll() do znalezienia wszystkich elementów <li> o klasie item
// znajdujących się wewnątrz <ul> o id categories. Wynik jest zapisywany w zmiennej categories:

const categories = document.querySelectorAll('ul#categories > li.item');

// Ta linia kodu zapisuje długość (liczbę elementów) tablicy categories do zmiennej numberOfCategories, 
// co odpowiada liczbie znalezionych kategorii:

const numberOfCategories = categories.length;

// Wyświetlamy liczbę kategorii w konsoli
console.log(`Number of categories: ${numberOfCategories}`);

// Iterujemy przez każdą kategorię - Pętla forEach iteruje przez każdy element tablicy categories, 
// a każdy element jest przekazywany do funkcji zwrotnej jako argument category:
categories.forEach(category => {

// Pobieramy tytuł kategorii - Wewnątrz pętli 'forEach' dla każdej kategorii 'category', 
// ten fragment kodu znajduje pierwszy element <h2> wewnątrz 'category' i pobiera jego tekst (za pomocą textContent), 
// który jest następnie zapisywany do zmiennej categoryName:

const categoryName = category.querySelector('h2').textContent;

// Pobieramy wszystkie elementy li wewnątrz kategorii -  ten fragment kodu znajduje wszystkie elementy <li> 
//znajdujące się bezpośrednio wewnątrz każdej kategorii i zapisuje je do zmiennej categoryElements:
const categoryElements = category.querySelectorAll('ul > li');

  // Liczymy liczbę elementów w kategorii
  const numberOfElements = categoryElements.length;

  // Wyświetlamy tytuł kategorii i liczbę elementów w konsoli
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
});
