export {generateNavBar};
import './../../styles.css';

function generatePageStructure() {
  const nav = generateNavBar();
}

function generateNavBar() {
  const nav = document.createElement("nav");
  const header = document.createElement("h1");
  const tabList = generateTabList();
  nav.append(header);
  nav.append(tabList);
  nav.classList.add("test");
  return nav;
}

function generateTabList() {
  const list = document.createElement("li");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");
  list.append(homeTab);
  list.append(menuTab);
  list.append(contactTab);
  return list;
}