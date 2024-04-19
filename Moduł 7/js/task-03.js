const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Znajdź element galerii w dokumencie HTML
const gallery = document.querySelector('.gallery');

// Przetwórz tablicę obiektów images na ciąg HTML, tworząc elementy <li> z obrazami
const imagesHTML = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`).join(''); // Połącz wszystkie wygenerowane elementy <li> w jeden ciąg HTML

// Wstaw utworzone elementy HTML do galerii na końcu (<ul> jest już otwarty, więc używamy 'beforeend')
gallery.insertAdjacentHTML('beforeend', imagesHTML);