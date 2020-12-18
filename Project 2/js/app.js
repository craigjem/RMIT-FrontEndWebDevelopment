/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigationBar = document.querySelector('#navbar__list');

//Styling Navigation tag
navigationBar.style.cssText = 'color: white; font-size: 1.4em;';

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// select the first (main) heading of the page
//const mainHeading = document.querySelector('#navbar__list');

// create a brand new <span> element
//const newSpan = document.createElement('li');

// add text to the element
//newSpan.textContent = 'Section 1';

// add the <span> element as the last child element of the main heading
//mainHeading.appendChild(newSpan);
//document.body.appendChild(mainHeading);


//Insert HTML element to build navigation
const htmlTextToAdd = '<li href="#section1"> ${section1} </li>';
navigationBar.insertAdjacentHTML ('afterbegin', htmlTextToAdd);


// Grab Section 1
//let firstSection = document.getElementById('section1');
// Get Section 1 h2 heading
//let firstSectionHeading = document.querySelector('h2').innerHTML;

// Create li element
//let menuOptionOne = document.createElement('li');
// link element to li
//menuOptionOne.textContent = firstSectionHeading;

// Set Nav Ul - Li to section 1 heading
//document.getElementById('navbar__list');
//const navHeading = document.querySelector('ul');
//navHeading.appendChild(menuOptionOne);


//menuOption.textContent = "Menu";
//const mainHeading = document.querySelector('ul');
//mainHeading.appendChild (menuOption);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


