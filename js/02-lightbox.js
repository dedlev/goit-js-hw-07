import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
   </li>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: 'bottom', captionDelay: 250
    });

