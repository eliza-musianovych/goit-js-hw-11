import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchData } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector("form");
const keywordInput = document.querySelector("input");

const loader = document.querySelector(".loader");
function showLoader() {
    loader.style.display = `block`
}
function hideLoader() {
    loader.style.display = `none`
}

form.addEventListener("submit", reserch);

function reserch(event) {
    event.preventDefault();
    
    document.querySelector(".gallery").innerHTML = "";

    const keyword = keywordInput.value.trim();
  if (!keyword) {
    iziToast.error({
      message: "Please enter a search query before submitting!",
      position: "topRight"
    });
    return;
  }

  showLoader();

    fetchData()
    .then(response => {
        if (response.hits.length === 0) {
            iziToast.error({
              message: "Sorry, there are no images matching your search query. Please try again!",
              position: "topRight",
              closeOnClick: true,
              color: `#fafafb;`,
              messageColor: `#fafafb`,
              backgroundColor: '#ef4040',
            });
            return;
          }
          createMarkup(response)})
    .finally(() => {
        hideLoader();
    });
}