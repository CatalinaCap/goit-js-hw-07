import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
}).join('');


galleryContainer.innerHTML = galleryMarkup;
galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) return;
  const largeImageURL = event.target.closest('a').href;
  
  const instance = basicLightbox.create(`
   // <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();
  }


let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250, 
  captionPosition: 'bottom',
});
console.log(galleryItems);