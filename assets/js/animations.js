(function($) {
  
    'use strict';
  
    // variables
    var $isAnimatedSecond = $('.second .is-animated'),
        $isAnimatedThird = $('.third .is-animated'),
        $isAnimatedFourth = $('.fourth .is-animated'),
        $isAnimatedFifth = $('.fifth .is-animated')
    var $progressBar = $('#scroll-progress');

    // initialize fullPage
    $('#fullpage').fullpage({
  
      //options here
      licenseKey: 'gplv3-license',
      paddingTop: '25px',
      anchors:['home', 'about', 'skills', 'projects', 'contact'],
      menu: '#navbar .menu',
      fixedElements: '#navbar',
      scrollingSpeed: 1100,
      scrollOverflow: false,
      loopHorizontal: false,
      slidesNavigation: true,
      
      onLeave: function(index, nextIndex, direction) {
      
        /**
        * use the following condition: 
        *
        *   if( index == 1 && direction == 'down' ) {
        *
        * if you haven't enabled the dot navigation
        * or you aren't interested in the animations that occur 
        * when you jump (using the dot navigation) 
        * from the first section to another sections 
        */
        var i = index.index;
        var n = nextIndex.index;

        // first slide animation
        if( i == 0 && n == 1 ) { 
            $isAnimatedSecond.addClass('blur-in-slide-up');
        }
        
        // second animation
        else if( ( i == 0 || i == 1 ) && n == 2 ) {
            $isAnimatedThird.addClass('blur-in-slide-up');
        }
        
        // third animation
        else if( ( i == 0 || i == 1 || i == 2 ) && n == 3 ) {
            $isAnimatedFourth.addClass('blur-in-slide-up');
        }

        // fourth animation
        else if( ( i == 0 || i == 1 || i == 2 || i == 3 ) && n == 4 ) {
            $isAnimatedFifth.addClass('blur-in-slide-up');
        }

      },

      afterLoad: function(anchorLink, index){
        // progress bar animation
        if(index.index == 0){
            $progressBar.css('height', '5rem');
        }else if(index.index == 1){
            $progressBar.css('height', '10rem');
        }else if(index.index == 2){
            $progressBar.css('height', '15rem');
        }else if(index.index == 3){
            $progressBar.css('height', '20rem');
        }else if(index.index == 4){
            $progressBar.css('height', '25rem');
        }
      }

    });
    
  })(jQuery);
  