import "./../../styles.css"
import {generateNavBar} from "../navbar/nav.js";
import {subscribe} from "../../pubsub.js";
import {generateContactTab} from "../contact-tab/contact-tab";

export {generatePage}

subscribe("tab-clicked", renderTabOnScreen);

//const homeSection = generateHomeTab();
//const menuSection = generateMenuTab();
const contactSection = generateContactTab();

const sections = {
  //"0": homeSection,
  //"1": menuSection,
  "2": contactSection,
}

function renderTabOnScreen(position) {
  document.body.append(sections[position]);
}

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