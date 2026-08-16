const inputElem = document.querySelector('#name-input');
const nameElem = document.querySelector('#name-output');

inputElem.addEventListener('input', handleInput);

function handleInput(e) {
  const text = e.target.value.trim();

  nameElem.textContent = text || 'Anonymous';
}
