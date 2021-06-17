import {searchFilter} from "./script.js"

const carregar = () => {

    let element =   document.getElementById("searchVideos") != null ? document.getElementById("searchVideos") : null
    
    if(element != null)
        element.innerHTML = '<div class="row" id="searchVideos"></div>';
    
    searchFilter();
}

window.addEventListener('load', carregar());