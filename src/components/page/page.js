import "./../../styles.css"
import {generateNavBar} from "../navbar/nav.js";

export {generatePage}

function generatePage() {
    const wrapper = generateContentWrapper();
    const navBar = generateNavBar();
    wrapper.append(navBar)
    return wrapper;
}

function generateContentWrapper() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("content-wrapper");
    return wrapper;
}