function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body');
const buttonElem = document.querySelector('.change-color');
const colorValueElem = document.querySelector('.color');

buttonElem.addEventListener('click', handlerClick);

function handlerClick() {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  colorValueElem.textContent = color;
}
