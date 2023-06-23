import "./../../styles.css"
import {generateNavBar} from "../navbar/nav.js";
import {subscribe} from "../../pubsub.js";
import {generateContactSection} from "../contact-section/contact-section";
import {generateMenuSection} from "../menu-section/menu-section";
import {generateHomeSection} from "../home-section/home-section";

export {generatePage, displayFirstLoad}

const wrapper = generateContentWrapper();

subscribe("tab-clicked", renderTabOnScreen);

const homeSection = generateHomeSection();
const menuSection = generateMenuSection();
const contactSection = generateContactSection();
let currentSection;

const sections = {
  "0": homeSection,
  "1": menuSection,
  "2": contactSection,
}

function displayFirstLoad() {
  currentSection = homeSection;
  wrapper.append(currentSection);
}

function renderTabOnScreen(position) {
  const sectionToRender = sections[position];
  wrapper.removeChild(currentSection);
  currentSection = sectionToRender;
  wrapper.append(sectionToRender);
}

function generatePage() {
  const navBar = generateNavBar();
  wrapper.append(navBar)
  return wrapper;
}

function generateContentWrapper() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("content-wrapper");
  return wrapper;
}