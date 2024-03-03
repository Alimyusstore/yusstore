//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[
    {
        quote: "be the best you be",
         person: "karma deen"
    },{
        quote: "love yourself you deserve to be happy",
         person: "momma says"
    },{
        quote: "to be a man is not a day job",
         person: "dadda words"
    },{
        quote: "all i see is paradise", 
        person: "j daimond"
    },{
        quote: "baby calm down!",
         person: "rema mavins"
    },{
        quote: "they call me mr money for a reason",
         person: "asake mr money"
    },{
        quote: "money is not that important, but all inportant things needs money",
         person: "mr teacher"
    },{
        quote: "don't wait to buy, buy and wait",
         person: "real estate"
    },{
        quote: "azee see maale see paale",
         person: "mido"
    },{
        quote: "tems araa gba idi ekoja",
         person: "seyi vibes"
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
     
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})