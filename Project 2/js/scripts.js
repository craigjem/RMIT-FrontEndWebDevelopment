

// KeyPress event handler
const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});


// Event listner
console.log('howdy'); // 1
document.addEventListener('click', // 2
  function numbers() {
    console.log('123');
});
console.log('ice cream is tasty'); // 3


// Running a function later
setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);


// timeout during counting
// This code starts off by setting a count variable to 1. This will keep track of the number of paragraphs that have been added. The generateParagraphs() 
// function will add 500 paragraphs to the page each time it's invoked. The interesting thing is that there's a setTimeout() call at the end of the generateParagraphs() function. 
// If there are less than twenty thousand elements, then the setTimeout() will be used to call the generateParagraphs() function.
// If you try running this code on a page, you can still interact with the page while the code is running. It doesn't lock up or freeze the page. And it doesn't lock up or freeze because 
// of the setTimeout() calls.

let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();


// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);



document.getElementsByTagName('p');
document.getElementsByTagName('article');

// selects the DOM element with an ID of "sidebar"
const sidebarElement = document.getElementById('sidebar');

// searches within the "sidebar" element for any elements with a class of "sub-heading"
const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');


// NodeList
const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}


// code is directed at the parent element
mainHeading.parentElement.removeChild(mainHeading);


const parent = document.createElement('div');
const child = document.createElement('p');
const appendValue = parent.append(child);
console.log(appendValue) // undefined
const appendChildValue = parent.appendChild(child);
console.log(appendChildValue) // <p><p>


var whiteRabbit = document.getElementById("rabbit");

var rabbitDownKeyframes = new KeyframeEffect(
    whiteRabbit, 
    [
      { transform: 'translateY(0%)' }, 
      { transform: 'translateY(100%)' }
    ], 
    { duration: 3000, fill: 'forwards' }
  );

var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);

// On tap or click,
whiteRabbit.addEventListener("mousedown", downHeGoes, false);
whiteRabbit.addEventListener("touchstart", downHeGoes, false);

// Trigger a single-fire animation
function downHeGoes(event) {

  // Remove those event listeners
  whiteRabbit.removeEventListener("mousedown", downHeGoes, false);
  whiteRabbit.removeEventListener("touchstart", downHeGoes, false);  

  // Play rabbit animation
  rabbitDownAnimation.play();
    
}


var element = document.querySelector('.element');
var dataAttribute = element.getAttribute('data-name');
// replace "data-name" with your data attribute name

console.log(dataAttribute);