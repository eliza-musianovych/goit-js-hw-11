import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");


export function createMarkup(response) {

const markup = response.hits
    .map(({webformatURL, largeImageURL, tags}) => 
    `<li class="gallery-item">
    <a class="gallery-link" href="${webformatURL}">
    <img
    class="gallery-image"
    src="${largeImageURL}"
    alt="${tags}"
    width="360px"
    height="200px"
    />
    </a>
    </li>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});
}