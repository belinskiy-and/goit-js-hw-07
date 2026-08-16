const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();

  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log({ email, password });
  e.target.reset();
}
