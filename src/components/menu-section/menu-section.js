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
  const foodImage = new Image();
  console.log(Hamburger.src)
  foodImage.src = foodImages[foodName];
  foodImage.classList.add("menu-image");
  return foodImage;
}