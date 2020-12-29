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
const navigationBar = document.querySelector('ul#navbar__list');
const hamMenu = document.querySelector('.navbar__menu');
const navElement = document.querySelector('nav');
const items = document.getElementsByTagName('section');
const homeNav = navigationBar.innerHTML = '<a id="btn-home" href="#">Home</a>';
const smoothScroll = document.querySelector('html');
const activeState = document.querySelector('.your-active-class h2');


//Styling Navigation tag
navigationBar.style.cssText = 'display: block; color: white; font-size: 1.2em;';
smoothScroll.style.cssText = 'scroll-behavior: smooth;';
activeState.style.cssText = 'color: red;';


//home button style
let btnStyle = document.getElementById('btn-home');
btnStyle.style.cssText = 'display: inline-block; text-decoration: none; padding: 20px 10px; margin: 0 auto; height: 4rem; text-align: right; font-size: 1.4em; color: white; font-weight: normal; cursor: pointer;';
btnStyle.addEventListener("mouseover", function( event ) {
  btnStyle.style.cssText = 'display: inline-block; text-decoration: none; padding: 20px 10px; margin: 0 auto; height: 4rem; text-align: right; font-size: 1.4em; color: white; font-weight: bold; cursor: pointer;';
});
btnStyle.addEventListener("mouseleave", function( event ) {
  btnStyle.style.cssText = 'display: inline-block; text-decoration: none; padding: 20px 10px; margin: 0 auto; height: 4rem; text-align: right; font-size: 1.4em; color: white; font-weight: normal; cursor: pointer;';
});

   

/**
 * End Global Variables
 * 
 * 
*/



/**
 * 
 * Begin Main Functions
 * 
*/

// build the nav

// add the <id="displayMenu"> element to the main heading
 navElement.setAttribute('id', 'displayMenu');
 
 
 
// Insert HTML element to build navigation
for (let i=0; i<=3; i++) {
    // Add Parent and Child elements
    const navSelect = document.createElement('a');
    const navlist = document.createElement('li');
    
    // Get attributes of parent element
    let sectioName = items[i].getAttribute('data-nav');
    let getSectionId = items[i].getAttribute('id');
 
    // Add links to a tag
    navSelect.setAttribute('href', '#' + getSectionId);
    navSelect.classList.add("btn__Selector");
  
    // Get inner text of data-nav
    navlist.innerText = sectioName;
    
    // Output inner text of data-nav to the menu
    navigationBar.appendChild(navSelect);
    
    // Append link element to parent
    navSelect.append(navlist);

}

// Change Active State on element id click

let navList = document.getElementsByClassName("btn__Selector");

for (var i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function() {
  
  // Removes your-active-class from section
  let activeClass = document.querySelector(".your-active-class");
  activeClass.classList.remove("your-active-class");
  // Changes style of section header to white
  document.querySelector(".landing__container h2").style.cssText = 'color: white';
  // Add your-active-class to section
  let sectionTag = document.querySelector('section');
  sectionTag.classList.add("your-active-class");

  });
}


  // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
let prevScroll = window.pageYOffset;
window.onscroll = function() {
  let currentScroll = window.pageYOffset;
  // Test condition of scroll position with if else statement
  if (prevScroll >= currentScroll) {
      // Display Menu on Scrolling Down
        document.getElementById('displayMenu').style.display='block';
  } else {
      // Hide Menu on Scrolling Up
        document.getElementById('displayMenu').style.display='none';    
  }
  prevScroll = currentScroll;
}
  
// Show scrollButton when scrolled a certain length of the page
//let scrollPosition = window.pageYOffset;
//if (scrollPosition <= 800 ) {
//   document.getElementById('btn-scroll').style.display='block';
//}   
//else {
 //  document.getElementById('btn-scroll').style.display='none';
//}

 
 

