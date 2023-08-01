// Handles all interactive animations on the website
'use strict';

// animated content variables
const isAnimatedFirst = document.querySelectorAll('.first .js-animated');
const isAnimatedSecond = document.querySelectorAll('.second .js-animated');
const isAnimatedThird = document.querySelectorAll('.third .js-animated');
const isAnimatedFourth = document.querySelectorAll('.fourth .js-animated');
const isAnimatedFifth = document.querySelectorAll('.fifth .js-animated');

// website progress bar variable
const progressBar = document.getElementById('scroll-progress');
progressBar.style.height = '5rem'; // set initial height before onLeave can be called

// background parallax variables
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const rb = document.getElementById('rb');
const lb = document.getElementById('lb');
const lf1 = document.getElementById('lf1');
const floor = document.getElementById('floor');
const rf = document.getElementById('rf');
const lf2 = document.getElementById('lf2');

let starsScale = 1;
let starsDeg = 0;
let moonY = 0;
let moonScale = 1;

const floorY = 24;
const rbX = 72;
const rfX = 96;
const lbX = -64;
const lf1X = -80;
const lf2x = -96;

// initialize fullPage
new fullpage('#fullpage', {
    // options here
    licenseKey: 'gplv3-license',
    anchors: ['home', 'about', 'skills', 'projects', 'contact'],
    menu: '#navbar .menu',
    fixedElements: '#navbar',
    scrollingSpeed: 1800,
    scrollOverflow: false,
    loopHorizontal: false,
    slidesNavigation: true,
      
    onLeave: function(index, nextIndex, direction) {
        const i = index.index;
        const n = nextIndex.index;
        const slidesJumped = Math.abs(i - n);
        const slideNumber = n + 1;
        
        // background parallax effect
        if( direction == 'down' ) {
            starsDeg -= 8 * slidesJumped;
            starsScale += 0.03 * slidesJumped;

            moonY -= 2.2 * slidesJumped;
            moonScale -= 0.03 * slidesJumped;
        } else if (direction == 'up') {
            starsDeg += 8 * slidesJumped;
            starsScale -= 0.03 * slidesJumped;

            moonY += 2.2 * slidesJumped;
            moonScale += 0.03 * slidesJumped;
        }
        stars.style.transform = 'scale(' + starsScale + ') rotate(' + starsDeg + 'deg)';
        moon.style.transform = 'translateY(' + moonY + 'vh) scale(' + moonScale + ')';

        // mountain parallax effect
        if( i == 0 && direction == 'down' ) {
            floor.style.transform = 'translateY(' + floorY + 'px)';
            
            rb.style.transform = 'translateX(' + rbX + 'px)';
            rf.style.transform = 'translateX(' + rfX + 'px)';

            lb.style.transform = 'translateX(' + lbX + 'px)';
            lf1.style.transform = 'translateX(' + lf1X + 'px)';
            lf2.style.transform = 'translateX(' + lf2x + 'px)';

        } else if (n == 0 && direction == 'up') {
            floor.style.transform = 'translateY(' + 0 + 'px)';
            
            rb.style.transform = 'translateX(' + 0 + 'px)';
            rf.style.transform = 'translateX(' + 0 + 'px)';

            lb.style.transform = 'translateX(' + 0 + 'px)';
            lf1.style.transform = 'translateX(' + 0 + 'px)';
            lf2.style.transform = 'translateX(' + 0 + 'px)';
        }
          
        // Reset all slide content animations
        removeClasses(isAnimatedFirst, ['blur-in-slide-down', 'fade-in', 'slide-up']); //the extra two animations cause conflicts so remove them as well
        removeClasses(isAnimatedSecond, ['blur-in-slide-up', 'blur-in-slide-down']);
        removeClasses(isAnimatedThird, ['blur-in-slide-up', 'blur-in-slide-down']);
        removeClasses(isAnimatedFourth, ['blur-in-slide-up', 'blur-in-slide-down']);
        removeClasses(isAnimatedFifth, ['blur-in-slide-up']);
        
        // Forward slide content animations
        if (i === 0 && n === 1) {
            addClasses(isAnimatedSecond, ['blur-in-slide-up']);
        } else if ((i === 0 || i === 1) && n === 2) {
            addClasses(isAnimatedThird, ['blur-in-slide-up']);
        } else if ((i === 0 || i === 1 || i === 2) && n === 3) {
            addClasses(isAnimatedFourth, ['blur-in-slide-up']);
        } else if ((i === 0 || i === 1 || i === 2 || i === 3) && n === 4) {
            addClasses(isAnimatedFifth, ['blur-in-slide-up']);
        }
        
        // Backward slide content animations
        else if (i === 4 && n === 3) {
            addClasses(isAnimatedFourth, ['blur-in-slide-down']);
        } else if ((i === 4 || i === 3) && n === 2) {
            addClasses(isAnimatedThird, ['blur-in-slide-down']);
        } else if ((i === 4 || i === 3 || i === 2) && n === 1) {
            addClasses(isAnimatedSecond, ['blur-in-slide-down']);
        } else if ((i === 4 || i === 3 || i === 2 || i === 1) && n === 0) {
            addClasses(isAnimatedFirst, ['blur-in-slide-down']);
        }
          
        // progress bar animation
        const remCalc = (slideNumber) * 8;
        progressBar.style.height = remCalc + 'vh';

    }

});

// helpers
function removeClasses(elements, classNames) {
    elements.forEach(element => {
      classNames.forEach(className => element.classList.remove(className));
    });
}
  
function addClasses(elements, classNames) {
    elements.forEach(element => {
      classNames.forEach(className => element.classList.add(className));
    });
}