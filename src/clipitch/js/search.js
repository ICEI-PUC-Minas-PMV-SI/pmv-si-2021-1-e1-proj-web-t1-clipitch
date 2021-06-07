import {searchFilter} from "./script.js"

const carregar = () => {
    document.getElementById("searchVideos").innerHTML = '<div class="row" id="searchVideos"></div>';
    searchFilter();
}

window.addEventListener('load', carregar());