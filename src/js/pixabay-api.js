import axios from "axios";

const myApiKey = "49372169-96077d899f4beec9c9139b15f";
const URL = "https://pixabay.com/api/";
const keywordInput = document.querySelector("input");

export function fetchData() {
const keyword = keywordInput.value.trim();
const parametrs = new URLSearchParams({
    key: myApiKey,
    q: keyword,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
});

return axios.get(`${URL}?${parametrs}`)
.then(response => response.data)
.catch(error => console.log(error));
}