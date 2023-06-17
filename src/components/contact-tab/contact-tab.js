import {generateTitleElement} from "../tabs-functions/tabs-functions.js";
export {generateContactTab}

function generateContactTab() {
  const container = document.createElement("div");
  const title = generateTitleElement("Contact");
  container.append(title);
  return container;
}