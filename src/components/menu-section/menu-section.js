import Hamburger from "./images/hamburger.jpg"
import Pizza from "./images/pizza.jpg"
import Ravioli from "./images/ravioli.jpg"
import Steak from "./images/steak.jpg"

export {generateMenuSection}

const foodImages = {
  "hamburger": Hamburger.src,
  "pizza": Pizza.src,
  "ravioli": Ravioli.src,
  "steak": Steak.src,
}


function generateMenuSection() {
  const foodList = ["hamburger", "pizza", "ravioli", "steak"];
  const container = generateSection("Menu");
  foodList.forEach(food => {
    const foodBox = generateFoodBox(food);
    container.append(foodBox);
  })
  return container;
}

function generateFoodBox(foodName) {
  const foodImage = new Image();
  foodImage.src = foodImages[foodName];
  foodImage.classList.add("menu-image");
  return foodImage;
}

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

