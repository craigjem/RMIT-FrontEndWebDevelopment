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

// Adding id of displayMenu to hide and show menu on scroll
// create a brand new <span> element
// let newIdDisplay = document.createElement('id');

// add the <id="displayMenu"> element to the main heading
navElement.setAttribute('id', 'displayMenu');

 // Add Hamburger Menu Class to NavigationBar
 hamMenu.classList.add("hamburgerMenu");


// Insert HTML element to build navigation
for (let i=0; i<=3; i++) {
    // Add Parent and Child elements
    const navSelect = document.createElement('a');
    //const addHref = document.createElement('href');
    const navlist = document.createElement('li');

    
   // let navlist = document.createElement('li');
    // Get attribute of data-nav
    let sectioName = items[i].getAttribute('data-nav');
    let getSectionId = items[i].getAttribute('id');
  //  console.log(getSectionId);

   // let setSectionId = items[i].setAttribute('id', '="#', getSectionId, '"');
   // console.log(setSectionId);
    // Get inner text of data-nav
    navlist.innerText = sectioName;
    //addHref.innerHTML = setSectionId;
    let addHref = navSelect.append('href', '#' + getSectionId);
    navSelect.append(addHref);
    // Output inner text of data-nav to the menu
    navigationBar.appendChild(navSelect);
    //addHref.append(navSelect);
    navSelect.append(navlist);

    

    //const appendValue = navSelect.append(addHref);
    //console.log(appendValue);
    //navSelect.appendChild(addHref);
    //console.log(appendChildValue);

   


   // addHref.append('="#', getSectionId, '"');

}


  
    
  //  navigationBar.insertAdjacentElement('afterbegin', list);
    
  //console.log(sectioName);





//loop each section  
//for (const x of items) {
//    if ( x )
//}

//add each section to the menu




//onclick eventlistner for items clicked in the menu

//navbar__list 
document.querySelectorAll('a').addEventListener('click', function() {

    const whiteRabbit = document.getElementById("section3");

    let rabbitDownKeyframes = new KeyframeEffect(
        whiteRabbit, 
        [
          { transform: 'translateY(0%)' }, 
          { transform: 'translateY(100%)' }
        ], 
        { duration: 3000, fill: 'forwards' }
      );

      let rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);

// Play rabbit animation
  rabbitDownAnimation.play();

});










// select the first (main) heading of the page
//const mainHeading = document.querySelector('#navbar__list');

// create a brand new <span> element
//const newSpan = document.createElement('li');

// add text to the element
//newSpan.textContent = 'Section 1';

// add the <span> element as the last child element of the main heading
//mainHeading.appendChild(newSpan);
//document.body.appendChild(mainHeading);





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


