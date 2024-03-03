console.log('hello world');
//creat object {object litreal syntax}
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
   
    draw: function(){
        console.log('draw');
    }
};

//circle.draw();

//const circle = {
    //raduis: 2,
    //location: {
       // x: 2,
      //  y: 2
    //},
    //draw: function(){
    //console.log('draw');
  //  }
//};
circle.draw();
//factor function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circles = createCircle(1)
circles.draw()

//construction function
function Circles(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
//Circles.call({}, 1);
//Circles.apply({}, [1, 2, 3 ])
const another = new Circles(1);
another.location = { x: 1 };
another['location'] = { x: 1 };

// Value vs Refrences types
// Value: NUmber, String,  Boolean, Symbol, null, undefined
//Refrences: Object, Function, Array
//primitives are copied by their value
let xa = 10;
let yb = xa;
xa = 20;
//Object are copied by their reference
let xac = { value: 10 };
let ybd = xac;
xac.value = 20; 
//Enumerating 
for (let key in another){
    if(typeof another[key] !== "function")
    console.log(key, another[key]);
}
const object = Object.keys(another)
console.log(object);

if ('location' in another)
console.log('Circle has a location.')

//Abstraction hide the details and show the essential
//private Properties and METHODS
function Circles(radius){
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    let computerOptimumLocation = function(factor) {
        //....
    }

this.draw = function() {
    computerOptimumLocation(0.1);
    console.log('draw');
};
};
const circ = new Circles(10);
circ .draw();


//Getters ,  Setters

// STOP-WATCH
function Stopwatch() {
   let startTime, endTime, running, duration = 0;
};
this.start = function() {
    if (running)
    throw new Error('stopWatch has already started.');
      running = true;
      startTime = new Date();
};
this.end = function() {
    if (!running)
    throw new Error('stopWatch is not started.');
    running = false;
    endTime = new Date();
 const second = (endTime.getTime() - startTime.getTime()) / 1000;
duration += second;
};
this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
};

Object.defineProperty(this, 'duration', {
    get: function(){ return duration;
    }
});
//Add element to the page
 const body = document.body
 document.createElement('div')
 div.innerText = 'Hello World'
 div.textContent = "hello World"
 body.append(div)
const div = document.querySelector('div')
 console.log(div.textContent)
 console.log(div.innerText) 
 div.interHTML = "<strong>Hello World</strong>"
 const strong = document.createElement('strong')
 strong.interText = "Hello World 2"
 div.append(strong)
