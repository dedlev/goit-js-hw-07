import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)

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

  const instance = basicLightbox.create(`<img src="${target.dataset.source}">`)

  instance.show();

  const visible = instance.visible();
  if (visible) {
    window.addEventListener('keydown', onKeydown)

function onKeydown(evt) {
  console.log(evt)
  if(evt.key === 'Escape') {
  instance.close() 
  
    window.removeEventListener('keydown', onKeydown)
  }
  }
}
  }



