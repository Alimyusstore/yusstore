const name = 'yusuf';
const age = 27;
const rating = 9.5;
const isCool = true;
const Xz = null;
const ct = undefined;
let z;
//string, Numbers, Boolean, null, undefined
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//variables
//var let const
// concatenation
console.log('My name is ' + name + ' and i am ' + age);

//* template string
console.log(`My name is ${name} and i am ${age}`);

const hello = `My name is ${name} and i am ${age}`;

console.log(hello);

const s = 'hello, world!!';
console.log(s.toUpperCase().substring(0, 12).split(','));

//Arrays - variables that hold multiple values

const numbers = [1,2,3,4,5];
console.log(numbers);
const fruits = ['mangoes', 'grapes', 'oranges'];
fruits[3] = 'melon';
fruits.push('apple');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits)
console.log(Array.isArray(fruits));
console.log(Array.isArray('mangoes'));
console.log(fruits.indexOf('melon'));
//object
const person = {
    firstName: 'yusuf',
    lastName: 'tajudeen',
    age: 25,
    hobbies: ['reading', 'makingMoney'],
    address: {
        country: 'nigeria',
        state: 'lagos',
        city: 'ojo'
    }
}
person.email = 'yusuftajudeenajibola@gmail.com';

console.log(person);
console.log(person.hobbies[1]);
const {firstName, lastName, address: {city}} = person;
console.log(city);

//arrays todos
const todos = [
    {
     id: 1,
     text: 'real estates classes',
     isCompleted: true
    },
    {
      id: 2,
      text: 'real estates launching',
      isCompleted: false
    },
    {
        id: 3,
       text: 'real estates inspection',
       isCompleted: false
    },
];
console.log(todos[1].text);

//json
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
//while
let i = 0;
while(i < 10) {
i++
console.log(`while loop number: ${i}`);
}
for(let todo of todos) {
    console.log(todo[1].id);
}
// forEach, map, filter
todos.forEash(function(todo) {
console.log(todo.text)
});
const todoText = todos.filter(function(todo) {
    return todo.text;
    console.log(todoText)

    });
 const todoTest = todos.map(function(todo) {
        return todo.text;
    console.log(todoText);
        });

        //conditional
        const X = 10;
        if(X === 10) {
            console.log('X is 10');
        }
        else if(X > 10) {
            console.log('X is greater than 10');
        }
        else {
            console.log('X is less than 10');
        }

        const qw = 10;
        const uy = 15;
        if(x > 8 && y > 13) {
            console.log('x is more than 5 or y is more than 10');
        }
//
const x = 10;
const color = x > 10 ? 'red' : 'blue';
switch(color) {
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default: 
    console.log('color is not red or blue');
}

//function
function addnumbs(num1, num2) {
    console.log(num1 + num2);
}
addnumbs(5, 4);
function addnumbs(num1 = 1, num2 = 1) {
    return num1 + num2;
}4
console.log(addnumbs(5, 5));

const addnumbs = (num1 = 1, num2 = 1) =>
     console.log(num1 + num2);
addnumbs(5, 6);

//constructor function 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

//Instantiate object 
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '7-9-1992');
console.log(person1);

//prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastname}`;
}

//class
 class Person {
    constructor(firstName, lastName, dob) {
       this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob; 
    }
    getBirthYear() {
         return this.dob.getFullYear();
    }
    getFullName(){
    return `${this.firstName} ${this.lastname}`;
    }
 }

 //single element selector 
console.log(getElementById('my-form'));
console.log(querySelector('#my-form'));
 //multiple element selector
console.log(querySelectorAll('.items'));
console.log(getElementByClassName('items'));

const items = document.querySelectorAll('.item');
items.forEach(function(item) {
     console.log(item);
});

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.class);

document.querySelector('#my-form').style.background = '#ccc';
document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';
});
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
     msg.innerHTML =  'please enter all fields';

     setTimeout(() => msg.remove(), 3000);
    }else if(li = document.createElement('li')){;
    li.appendChild(document.createTextNote(`${nameInput.value} : ${emailInput.value}`));
   userList.appendChild(li);

   //clear fields
   nameInput.value = '';
   emailInput.value = '';
    }else {
    console.log('success');
}
}

companies.forEach(company =>
{
    console.log(company)
})

const ageTwentyOne = ages.filter(age => age >= 21);

const retailCompany = companies.filter(company => company.category === 'Retail')

const eigthCompanies = companies.filter(company => (company.start >= 1980 && company.start 
    < 1990));

const lastTenYears = companies.fliter(company => (company.end - company.start >= 10));

const collectionCompany = companies.map(company => `${company.name} [${company.start} - ${company.firstElementChild}]`);

const cosMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);

const sortedCompanies = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1))
.sort((a,b) => a.end - a.end) 


const  reduceEnd = ages.reduce((total, age) => total + age, 0);

const nam = "Dev Ed";
function toUpperCase() {
console.log('party time')
console.log('party time')
console.log('party time')
console.log('party time')
}
toUpperCase();

//OBJECT ORIENTED PROGRAMMING is a programming paradigm centered around objects rather than functions. 
 //OOP is not a programming language or tool!
 // 4 pillar of OOP: 1.Encapsulation: Reduce complexity + increase reusability 2.Abstraction: Reduce complexity + isole impact of changes 3.inheritance: Eliminate redundant code 4.polymorphism: Refactor ugly switch/case statements
//string
const st = 'hello';
console.log(typeof st);
//object
const ss = new String('hello');
console.log(typeof ss)

//DOM object
console.log(window);
alert(1);

console.log(navigator.appVersion); 
