// Создать div
const div = document.createElement('div');

// Добавить к нему класс wrapper
div.classList.add('wrapper');

// Поместить его внутрь тэга body
const body = document.body ;

body.appendChild(div);

// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = "DOM (Document Object Model)";
// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement('beforebegin', header);

// Создать список <ul></ul>
const ul = `
    <ul>
    <li>один</li>
    <li>два</li>
    <li>три</li>
    </ul>
`;



// Добавить в него 3 элемента с текстом "один, два, три"

// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;

// =================================================
// Создать изображение

const img = document.createElement('img');

// Добавить следующие свойства к изображению
// 1. Добавить атрибут source

img.src = 'https://picsum.photos/200';
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add('fucker');
// 4. Добавить свойство alt со значением "Super Man"
img.alt = 'Syper man';
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const div2 = `
    <div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
    </div>
`;
// Поместить этот DIV до элемента <ul></ul>
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML("afterbegin", div2);
// Добавить для 2-го параграфа класс text
const pdiv = document.querySelector('.pDiv');

pdiv.children[1].classList.add('text');

// console.log(pdiv.children);
// Удалить 1-й параграф
pdiv.firstElementChild.remove();

// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year

const generateAutoCard = (brand , color, year) => {
    const data = new Date;
    const curryear = data.getFullYear();
    return  `
    <div class="autoCard">
    <h2>${brand} ${year}</h2>
    <p>Auto ${brand} - ${year} year. Age of auto - ${curryear - year} years.</p>
    <p>Color: ${color}</p>
    <button type="button" class="btn">Delete</button>
    </div>
    `;
   
}

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos

const newdiv = document.createElement('div');

newdiv.classList.add('autos');

// console.log(newdiv);

// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Red'},
    {brand: 'Lexus', year: 2016, color: 'Silver'},
    {brand: 'Nissan', year: 2012, color: 'Black'},
]


const cardsHTML = carsList.map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('')



// console.log(cardsHTML);
// Поместить эти 3 карточки внутрь DIV с классом autos

newdiv.innerHTML = cardsHTML;


// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement("beforebegin", newdiv);

// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM

// 1. Выбрать все кнопки
const buttons = document.querySelectorAll('.btn');

// 2. Создать функцию удаления
function Deleting(e){
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
    console.log(currentButton.parentElement);
}

// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

buttons.forEach((button) =>{
    button.addEventListener("click", Deleting);
})