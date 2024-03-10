
import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector('.gallery');

const imgElemtens = galleryItems.reduce((acum, item) => {
  return (acum += `<div class="gallery-item">
  <a class="gallery-link" href="${item.original}">
    <img
      class="gallery-image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`);
}, '');

/////
// Отримуємо всі елементи галереї
const galleryItem = document.querySelectorAll('.gallery-item');

// Додаємо обробник події click для кожного елемента галереї
galleryItem.forEach(item => {
    // Обробка кліку на зображення
    item.addEventListener('click', event => {
        // Заборона стандартної поведінки (переадресації)
        event.preventDefault();
        
        // Тут ви можете додати логіку для відкриття модального вікна або інші дії
    });
});


/////
const galleryList = document.querySelector('.gallery');

// Додавання елементів галереї до DOM
const galleryItems = images.map(({ preview, original, description }) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');

    const link = document.createElement('a');
    link.classList.add('gallery-link');
    link.href = original;
    

    const image = document.createElement('img');
    image.classList.add('gallery-image');
    image.src = preview;
    image.dataset.source = original;
    image.alt = description;

    link.appendChild(image);
    galleryItem.appendChild(link);

    return galleryItem;
});

galleryList.append(...galleryItems);







