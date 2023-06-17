import {generateTitleElement} from "../tabs-functions/tabs-functions.js";
export {generateContactSection}

function generateContactSection() {
  const container = document.createElement("div");
  const title = generateTitleElement("Contact");
  container.classList.add("tab-section");
  container.append(title);
  return container;
}