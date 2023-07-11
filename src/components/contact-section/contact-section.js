import {generateSection} from "../tabs-functions/tabs-functions.js";
export {generateContactSection}

function generateContactSection() {
  const container = generateContainer();
  const phoneNumber = generatePhoneNumber();
  const localAddress = generateLocalAddress();

  container.append(phoneNumber);
  container.append(localAddress);
  return container;
}

function generateContainer() {
  const container = document.createElement("div");
  container.classList.add("tab-section");
  container.classList.add("contact-section");
  return container;
}

function generatePhoneNumber() {
  const container = document.createElement("div");
  const telNumber = document.createElement("a");
  const paragraph = document.createElement("p");

  telNumber.href = "tel:123 456 789";
  telNumber.innerText = "📞 123 456 789";
  telNumber.classList.add("white-medium-text");

  paragraph.append(telNumber);
  container.append(paragraph);
  return container;
}

function generateLocalAddress() {
  const container = document.createElement("div");
  const address = document.createElement("p");
  address.innerText = "🏠 742 Evergreen Terrace"
  address.classList.add("white-medium-text");

  container.append(address);
  return container;
}