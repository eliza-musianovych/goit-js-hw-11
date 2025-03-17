import { fetchData } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", reserch);

function reserch() {
    fetchData().then(response => createMarkup(response));
}