import Hamburger from "./images/hamburger.jpg"
import Pizza from "./images/pizza.jpg"
import Ravioli from "./images/ravioli.jpg"
import Steak from "./images/steak.jpg"

export {generateMenuSection}

const foodImages = {
  "hamburger": Hamburger,
  "pizza": Pizza,
  "ravioli": Ravioli,
  "steak": Steak,
}

function generateMenuSection() {
  const container = document.createElement("div");
  const title = generateTitleElement("Menu");
  const menuOptions = generateFoodSection();

  container.classList.add("tab-section");
  container.append(title);
  container.append(menuOptions);
  return container;
}

function generateFoodSection() {
  const foodList = ["hamburger", "pizza", "ravioli", "steak"];
  const menuOptions = document.createElement("div");

  menuOptions.classList.add("food-section");
  foodList.forEach(food => {
    const foodBox = generateFoodBox(food);
    menuOptions.append(foodBox);
  })
  return menuOptions;
}

function generateFoodBox(foodName) {
  const foodImage = new Image();
  console.log(Hamburger.src)
  foodImage.src = foodImages[foodName];
  foodImage.classList.add("menu-image");
  return foodImage;
}

function generateTitleElement(titleName) {
  const title = document.createElement("h2");
  title.innerText = titleName
  return title;
}

