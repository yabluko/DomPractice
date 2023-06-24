
// const div = document.createElement('div');


// div.classList.add('wrapper');


// const body = document.body ;

// body.appendChild(div);


// const header = document.createElement('h1');
// header.textContent = "DOM (Document Object Model)";

// div.insertAdjacentElement('beforebegin', header);


// const ul = `
//     <ul>
//     <li>один</li>
//     <li>два</li>
//     <li>три</li>
//     </ul>
// `;




// div.innerHTML = ul;

// // =================================================


// const img = document.createElement('img');



// img.src = 'https://picsum.photos/200';

// img.width = 240;

// img.classList.add('fucker');

// img.alt = 'Syper man';

// div.appendChild(img);

// const div2 = `
//     <div class='pDiv'>
//     <p>Параграф 1</p>
//     <p>Параграф 2</p>
//     </div>
// `;

// const ulElement = div.querySelector('ul');
// ulElement.insertAdjacentHTML("afterbegin", div2);

// const pdiv = document.querySelector('.pDiv');

// pdiv.children[1].classList.add('text');


// pdiv.firstElementChild.remove();



// const generateAutoCard = (brand , color, year) => {
//     const data = new Date;
//     const curryear = data.getFullYear();
//     return  `
//     <div class="autoCard">
//     <h2>${brand} ${year}</h2>
//     <p>Auto ${brand} - ${year} year. Age of auto - ${curryear - year} years.</p>
//     <p>Color: ${color}</p>
//     <button type="button" class="btn">Delete</button>
//     </div>
//     `;
   
// }



// const newdiv = document.createElement('div');

// newdiv.classList.add('autos');


// const carsList = [
//     {brand: 'Tesla', year: 2015, color: 'Red'},
//     {brand: 'Lexus', year: 2016, color: 'Silver'},
//     {brand: 'Nissan', year: 2012, color: 'Black'},
// ]


// const cardsHTML = carsList.map((car) => {
//     return generateAutoCard(car.brand, car.color, car.year);
// }).join('')


// newdiv.innerHTML = cardsHTML;
 


// div.insertAdjacentElement("beforebegin", newdiv);

// const buttons = document.querySelectorAll('.btn');


// function Deleting(e){
//     const currentButton = e.currentTarget;
//     currentButton.closest('.autoCard').remove();
//     console.log(currentButton.parentElement);
// }



// buttons.forEach((button) =>{
//     button.addEventListener("click", Deleting);
// })

//силка на массив
const students = ['Oleg','Yurii','Veronika','Vasia'];



const group2 = students.slice();
group2[0] = 'Sasha';



const group3 = [].concat(students);


const group4 = [...students];

const group5 = Array.from(students);



const person = {
    name :'Peter',
    age: 30 ,
    social: {
        twitter : 'twitter',
        facebook : 'facebook',
    }
}

const student = person;
student.age = 100;

console.log(person);



const policeman = Object.assign({}, person, {skills: 'good communication'});



const newperson = JSON.parse(JSON.stringify(person));
newperson.social.twitter = 'kekeke1111';



console.log(newperson);