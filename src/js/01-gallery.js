import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function galleryItemsMarkup(items){
return items.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" 
    src="${item.preview}" 
    alt="${item.description}" />
    </a>`).join('')
};
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup(galleryItems));

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);