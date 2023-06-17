import {generateTitleElement} from "../tabs-functions/tabs-functions.js";
export {generateHomeTab}

function generateHomeTab() {
  const container = document.createElement("div");
  const title = generateTitleElement("Home");
  container.append(title);
  return container;
}