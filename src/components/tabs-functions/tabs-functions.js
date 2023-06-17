export {generateSection}

function generateSection(name) {
  const container = document.createElement("div");
  const title = generateTitleElement(name);
  container.classList.add("tab-section");
  container.append(title);
  return container;
}

function generateTitleElement(titleName) {
  const title = document.createElement("h2");
  title.innerText = titleName
  return title;
}