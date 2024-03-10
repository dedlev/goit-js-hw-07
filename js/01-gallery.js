import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', onGalleryItemsClick);

const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
         />
  </a>
</li>`;
    })
    .join('');
}

function onGalleryItemsClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`<img src="${target.dataset.source}">`, {
    onShow: (instance) => {
    window.addEventListener('keydown', onKeydown)
  },
   onClose: (instance) => {
    window.removeEventListener('keydown', onKeydown)
  }})

  instance.show();
  
    function onKeydown(evt) {
  if(evt.key === 'Escape') {
  instance.close() 
  }
}
  }




