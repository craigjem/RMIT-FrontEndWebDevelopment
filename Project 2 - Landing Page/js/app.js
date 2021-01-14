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
//const navScroll = document.querySelector('#navbar__list ul li');
const activeState = document.querySelector('.your-active-class h2');


//Styling Navigation tag
navigationBar.style.cssText = 'display: block; color: white; font-size: 1.2em;';
//smoothScroll.style.cssText = 'scroll-behavior: smooth;';
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
    navSelect.classList.add("btn");
       
    // Get inner text of data-nav
    navlist.innerText = sectioName;
    
    // Output inner text of data-nav to the menu
    navigationBar.appendChild(navSelect);
    
    // Append link element to parent
    navSelect.append(navlist);

}


// Change Active State on element id click

let navList = document.getElementsByClassName("btn");

for (var i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function(e) {
    
    // Set active class variables
    let active__class = document.querySelector(".your-active-class");
    let reset__active__class = document.querySelector(".your-active-class h2");
    // reset current active class style
    reset__active__class.style.cssText = 'color: white;';
    // remove current active class state
    active__class.classList.remove("your-active-class");
    //prevent the default action of a click, allow to change the behaviour,In this case it will allow to scroll
    e.preventDefault(); 
    // scroll into view clicked link
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: 'smooth' })
    // Add active class to clicked link
    document.querySelector(this.getAttribute("href")).classList.add('your-active-class');
    // Change h2 to red to indicate current section link
    document.querySelector('.your-active-class h2').style.cssText = 'color: red';
  });
}


// Highlight current section on scroll
function navHighlight() {
  
  let scrTop = document.scrollingElement;
  scrTop.scrollTop = 0;
  
  let div = document.getElementById('#navbar__list li a').each(function() {

      let rect = div.getBoundingClientRect();

      let navHeight = rect.outerHeight() + 1;
      let section = div.attr('href');

      // subtract the navbar height from the top of the section
      if(section.position().top - navHeight  <= rect && div.offset().top + section.height()> rect) {
      div.classList.remove("your-active-class");
      div.parent().classList.add("your-active-class");
      } else {
      div.parent().classList.remove("your-active-class");
      }
  });
}


// Listens for scrolling event
window.onscroll = function() {
  navHighlight();
};


//Code that I have tried

//$(window).on("scroll", function() {
//  let currentPos = $(window).scrollTop();

//$('#navbar__list li a').each(function() {
//  let sectionLink = $(this);

// capture the height of the navbar
//  let navHeight = $('.navbar__menu').outerHeight() + 1;
//  let section = $(sectionLink.attr('href'));

// subtract the navbar height from the top of the section
//if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
  
 // $('#navbar__list li').removeClass('your-active-class');
//  sectionLink.parent().addClass('your-active-class');
//  $(".your-active-class h2").style.cssText = 'color: red';
 // } else {
 // sectionLink.parent().removeClass('your-active-class');
 // $("btn").style.cssText = 'color: white';
 // }
// });        
//});  
  



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
  



