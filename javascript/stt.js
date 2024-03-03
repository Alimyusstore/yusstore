//DOM Document Object Model it's use to manipulate content,
//style and structure and it's one of the most unique and useful tools of JavaScript.
//DOM Manipulation
const title = document.querySelector('#main-heaing')
title.style.color = 'red';
const listL9st =document.querySelectorAll('.list-item')
for (let i = 0; i < listL9st.length; i++){
listL9st[i].style.fontSize = '5rem';
};


//GetElementById
const titles = document.getElementById('main-heading');
console.log(titles);
//GetElementsByClassName
const listItem = document.getElementsByClassName('list-item');
console.log(listItem);
//GetElementsByTagName
const liy = document.getElementsByTagName('liy');
console.log(liy);
//querySelector()
const container = document.querySelector('div');
console.log(container);

//querySelectorAll()
const containers = document.querySelectorAll('div');
console.log(containers);


//Creating Element 
const uul = document.querySelector('ul');
const li = document.querySelector('li');
//Adding Element
ul.append(li)

//Modifying the text
const firstListItem = document.querySelector('.list-items');
li.innerText = 'X-men';
//Modifying Attributes & Classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading')
li.getAttribute('id')

li.classList.add('list-items')
li.classList.remove('list-items')
console.log(li.classList.contains('list-items'))

//Remove Element 
li.remove(); 

//Parent Node Traversal
let ul = document.querySelector('ul');
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);
//Children Node Traversal

let ull = document.querySelector('ull');
console.log(ull.childNodes);
console.log(ull.firstChild);
console.log(ull.lastChild);
ull.childNodes[1].style.backgroundColor = 'blue';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal

let uull = document.querySelector('uull');
const div = document.querySelector('div');
console.log(div.childNodes); 
console.log(uull.previousSibling);
console.log(uull.nextSibling);

console.log(uull.previousElementSibling);
console.log(uull.nextElementSibling);

//
//Event listeners
//element.addEventListener('click', function);
const buttonTwo = querySelector('.btn-2');
function alertBtn() {
    alert('I  also love JavaScript');
}; 

buttonTwo.addEventListener('click', alertBtn);


//Mouseover
const newBackgroundColor = document.querySelector('box-3');
function changeBgColor(){
    newBackgroundColor.sytle.backgroundColor = 'blue';
};

newBackgroundColor.addEventListener('mouseover', changeBgColor);

// Reveal Event

const revealBtn = querySelector('.reveal-btn');
const hiddenContent = querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
        }else{
            hiddenContent.classList.add('reveal-btn')
        }
}
revealBtn.addEventListener('click', revealContent);  

// Event Probagation

window.addEventListener('click', function(){
    console.log('Window')
},true);

document.addEventListener('click', function(){
    console.log('Document')
},true);

document.querySelector('.div2').addEventListener('click', function(){
    //  e.stopPropagation()
    console.log('Div 2')
},{only: true});

document.querySelector('.div1').addEventListener('click', function(){
    console.log('Div 1')
},true);

document.querySelector('button').addEventListener('click', function(e){
    //e.preventDefault()
    console.log(e.target.innerText = 'clicked!');
},true)

// Event Delegation
//it allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descentants that match a selector.

document.querySelector('#football').addEventListener('click', function(){
    console.log('football is clicked');

    const tsrget = e.tsrget;
    if(tsrget.matches('li')){
        tsrget.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#sports').addEventListener('click', function(e){
console.log(e.target.getAttribute('id') + ' is clicked');
const targets = e.targets;
if(targets.matches('li')){
 targets.style.backgroundColor = 'lightgrey';
}
})

const sports = document.querySelector('#sport');
const newSport = document.querySelector('li');

newSport.innerText = 'rudgy';
newSport.setAttribute('id', 'rudgy');

sports.appendChild(newSport);

