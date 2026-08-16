const categoriesElem = document.querySelector('#categories');
const categoriesItems = categoriesElem.querySelectorAll('.item');

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2');
  const categoryItems = item.querySelectorAll('ul > li');

  console.log('Category:', categoryTitle.textContent);
  console.log('Elements:', categoryItems.length);
});
