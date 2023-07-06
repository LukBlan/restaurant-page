import OldPhoto from "./old-restaurant-photo.jpg"

export {generateHomeSection}

function generateHomeSection() {
  const container = document.createElement("div");
  const titleSection = generateTextElement("h2", "Open Since 1943");
  const subText = generateTextElement("p", "Best Restaurant of Europe");
  const image = generateImage();

  container.classList.add("tab-section");

  container.append(titleSection);
  container.append(subText);
  container.append(image);
  return container;
}

function generateTextElement(element, text) {
  const title = document.createElement(element);
  title.innerText = text;
  return title;
}

function generateImage() {
  const image = new Image();
  image.src = OldPhoto;
  image.classList.add("old-restaurant-img");
  return image;
}