import OldPhoto from "./old-restaurant-photo.jpg"

export {generateHomeSection}

function generateHomeSection() {
  const container = document.createElement("div");
  const sectionTitle = generateTitle("Since 1943");
  const image = generateImage();

  container.classList.add("tab-section");
  container.append(sectionTitle);
  container.append(image);
  return container;
}

function generateTitle(text) {
  const title = document.createElement("h2");
  title.innerText = text;
  return title;
}

function generateImage() {
  const image = new Image();
  image.src = OldPhoto;
  image.classList.add("old-restaurant-img");
  return image;
}