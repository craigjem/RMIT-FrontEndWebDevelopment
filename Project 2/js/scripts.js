

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


