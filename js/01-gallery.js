import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);

const markup = galleryItems
  .map((image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src = "${image.preview}"
      data-source = "${image.original}"
      alt = "${image.description}"
    />
  </a>
</div>`)
  .join("");

gallery.innerHTML = markup;

gallery.addEventListener("click", onClickImage)
  

function onClickImage(event) {
event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }

  const bigImageUrl = event.target.dataset.source;
  const imageDescription = event.target.getAttribute("alt");
  
const instance = basicLightbox.create(`
    <img src="${bigImageUrl}" alt="${imageDescription}" width="800" height="600">
`)

  instance.show()
  
  document.addEventListener('keydown', function(e) {
if (e.code === 'Escape') {
instance.close()
}
});
}