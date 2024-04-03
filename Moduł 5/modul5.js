// Funkcja do podwajania każdej liczby w tablicy za pomocą metody map()

const doubleNumber = (numbers) => {
    const doubledArray = numbers.map((number) => number * 2); // Używamy map() do podwojenia każdej liczby
    return doubledArray; // Zwracamy wynik
}

const tablica = [1, 2, 3, 4];
const wynik = doubleNumber(tablica); // Przypisujemy wynik wywołania funkcji do zmiennej
console.log(wynik); // Wyświetlamy wynik w konsoli






// Funkcja do pobierania imion studentów z tablicy obiektów za pomocą metody map()

function getStudentNames(students) {
    // Używamy metody map(), aby uzyskać dostęp do właściwości 'name' każdego obiektu studenta
    const namesArray = students.map(student => student.name);
    return namesArray;
}

// Przetestuj funkcję getStudentNames

const studentsArray = [
    { name: "Wiktoria", age: 24 },
    { name: "Amelia", age: 20 },
    { name: "Lilianna", age: 20 }
];
let namesArray; 

console.log("Oryginalna tablica studentów:", studentsArray);
namesArray = getStudentNames(studentsArray); 
console.log("Tablica imion studentów:", namesArray); 