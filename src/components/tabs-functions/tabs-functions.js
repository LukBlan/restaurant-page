export {generateTitleElement}

function generateTitleElement(titleName) {
  const title = document.createElement("h2");
  title.innerText = titleName
  return title;
}