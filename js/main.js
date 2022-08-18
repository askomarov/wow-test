console.log('hello');

const promoText = document.querySelector('.promo__text');


let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

const URL = 'https://baconipsum.com/api/?type=lucky';

function getTextData(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL);
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
};

function renderPromoText(response) {
  const dataText = response;
  promoText.textContent = dataText[0];
  return;
};

getTextData(renderPromoText);

const searchForm = document.forms['search-form'];
const inputSeacrh = searchForm.elements['id-search'];

let inputValid = false;

inputSeacrh.addEventListener('input', () => {
  if (useRegex(inputSeacrh.value)) {
    console.log('data very bad');
    inputSeacrh.style.boxShadow = 'inset 0 0 3px 1px red';
    inputSeacrh.setCustomValidity('Введены запрщенные символы! Попробуйте ввести только буквы и цифры');
    return;
  } else {
    console.log('good data');
    inputSeacrh.setCustomValidity('');
    inputSeacrh.style.boxShadow = '';
  }
  inputSeacrh.reportValidity();
  return inputValid = true;
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (inputValid) {
    searchForm.reset();
  }
})

function useRegex(value) {
  const regex = /^(?=.*[!@#$%^&()<>])/;
  return regex.test(value);
}
