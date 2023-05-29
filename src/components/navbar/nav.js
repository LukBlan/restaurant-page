export {generateNavBar};
import '../../styles.css';

function generateNavBar() {
  const nav = document.createElement("nav");
  const header = document.createElement("h1");
  header.textContent = "Restaurant Name"
  const tabList = generateTabList();
  nav.append(header);
  nav.append(tabList);
  return nav;
}

function generateTabList() {
  const tabList = document.createElement("ul");
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
  return tabList;
}