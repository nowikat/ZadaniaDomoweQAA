
// ZROZUMIENIE KONCEPCJI:

// Słowo kluczowe "this" w JavaScript odnosi się do bieżącego kontekstu wywołania. 
// Jego główne znaczenie polega na umożliwieniu dostępu do właściwości i metod obiektu, w którym jest używane. 
// Dzięki temu można odwoływać się do właściwości i metod obiektu wewnątrz niego samego, co jest kluczowe w programowaniu obiektowym.


// Przykłady demonstrujące użycie "this" w JavaScript:

// Przykład nr 1

const person = {
    name: "Kasia",
    introduce() {
      console.log(`My name is ${this.name}`);
    }
  };
  
  person.introduce(); // Output: My name is Kasia

  // W tym przykładzie, "this" odnosi się do obiektu "person", co pozwala na dostęp do jego właściwości "name".
  
// Przykład nr 2

// Definicja funkcji konstruktora Car:
function Car(make, model) { 
    this.make = make;   // Ustawienie właściwości make obiektu na wartość argumentu make
    this.model = model; // Ustawienie właściwości model obiektu na wartość argumentu model
  }
  
  // Dodanie metody getInfo do prototypu obiektu Car:
  Car.prototype.getInfo = function() {
    console.log(`Make: ${this.make}, Model: ${this.model}`);  // Wyświetlenie informacji o samochodzie zawierającej markę i model
  };
  
  const myCar = new Car("Renault", "Modus"); // Utworzenie nowego obiektu myCar za pomocą konstruktora Car
  myCar.getInfo(); // Output: Make: Renault, Model: Modus
  
 // W tym przykładzie this wskazuje na bieżący obiekt, który wywołał metodę, czyli na obiekt myCar w przypadku wywołania myCar.getInfo().


 // ZASTOSOWANIE PRAKTYCZNE:

// Obiekt reprezentujący osobę
const osoba = {
    // Utworzenie właściwości username i przypisanie jej wartości "Maciej"
    username: "Maciej",
    // Definicja metody showName w obiekcie person
    showName() {
        // Wyświetlenie nazwy użytkownika, korzystając z właściwości username obiektu person
        console.log(`Username: ${this.username}`);
    }
};
  osoba.showName(); // Output: Username: Maciej
  
  // Obiekt reprezentujący półkę na książki

const bookshelf = {
    // Inicjalizacja właściwości authors jako pustej tablicy
    authors: [],
    // Definicja metody getAuthors w obiekcie bookshelf
    getAuthors() {
        // Zwraca zawartość tablicy authors dla bieżącego obiektu (bookshelf)
        return this.authors;
    },
    // Definicja metody addAuthor w obiekcie bookshelf
    addAuthor(authorName) {
        // Dodaje nowego autora do tablicy authors dla bieżącego obiektu (bookshelf)
        this.authors.push(authorName);
    }
};

// Dodanie autorów do półki na książki
bookshelf.addAuthor("Stephen King");
bookshelf.addAuthor("J.K. Rowling");
bookshelf.addAuthor("Stephanie Meyer");

// Wyświetlenie listy autorów znajdujących się na półce za pomocą metody getAuthors
console.log(bookshelf.getAuthors()); // Output: ["Stephen King", "J.K. Rowling" , "Stephanie Meyer"]
