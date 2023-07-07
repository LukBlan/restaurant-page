import Hamburger from "./images/hamburger.jpg"
import Pizza from "./images/pizza.jpg"
import Ravioli from "./images/ravioli.jpg"
import Steak from "./images/steak.jpg"

export {generateMenuSection}

const foodImages = {
  "hamburger": {
    name: "Deluxe Burger",
    src: Hamburger,
  },
  "pizza": {
    name: "Ultramarine Pizza",
    src: Pizza,
  },
  "ravioli": {
    name: "Green day Ravioli",
    src: Ravioli,
  },
  "steak": {
    name: "Classic Steak",
    src: Steak,
  },
}

function generateMenuSection() {
  const container = document.createElement("div");
  const foodList = ["hamburger", "pizza", "ravioli", "steak"];


  foodList.forEach(food => {
    const foodBox = generateFoodBox(food);
    container.append(foodBox);
  })
  container.classList.add("food-section");
  container.classList.add("tab-section");
  return container;
}

function generateFoodBox(foodName) {
  const container = document.createElement("div");
  const foodObject = foodImages[foodName]
  const foodImage = getFoodImage(foodObject);
  const foodInfo = getFoodInfo(foodObject);

  container.classList.add("food-card");
  container.append(foodImage);
  container.append(foodInfo);
  return container;
}

function getFoodImage(foodObject) {
  const foodImage = new Image();
  console.log(Hamburger.src)
  foodImage.src = foodObject.src;
  foodImage.classList.add("food-image");
  return foodImage;
}

function getFoodInfo(foodObject) {
  const container = document.createElement("div");
  const foodNameBox = generateFoodNameContainer(foodObject.name);

  container.classList.add("food-info");
  container.append(foodNameBox);
  return container;
}

function generateFoodNameContainer(foodName) {
  const foodNameBox = document.createElement("h3");
  foodNameBox.innerText = foodName;
  return foodNameBox;
}