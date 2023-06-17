export {generateNavBar};

import '../../styles.css';
import {emit} from '../../pubsub.js'

const tabList = document.createElement("ul");

function generateNavBar() {
  const nav = document.createElement("nav");
  const header = document.createElement("h1");
  header.textContent = "Restaurant Name"
  const tabList = generateTabList();
  nav.append(header);
  nav.append(tabList);
  return nav;
}

function getTabClicked(event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName === "LI") {
    const position = Array.from(tabList.childNodes).indexOf(event.target);
    emit("tab-clicked", position);
  }
}

function generateTabList() {
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";

  tabList.classList.add("tab-menu");
  tabList.append(homeTab);
  tabList.append(menuTab);
  tabList.append(contactTab);
  tabList.addEventListener("click", getTabClicked);
  return tabList;
}