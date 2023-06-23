import OldPhoto from "./old-restaurant-photo.jpg"

export {generateHomeSection}

function generateHomeSection() {
  const container = document.createElement("div");
  const sectionTitle = generateTitle("Since 1943");
  const image = new Image();
  image.src = OldPhoto;

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
