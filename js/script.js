!(function($) {
  "use strict";
  
    // Mobile Nav

    $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle .toggle-icon').toggleClass('fa-bars fa-times');
      });

      $(document).click(function(e) {
        var container = $(".mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle .toggle-icon').toggleClass('fa-bars fa-times');
          }
        }
      });
    
    
            // Navigation active state on scroll
          var nav_sections = $('section');
          var main_nav = $('.main-nav, #mobile-nav');

          $(window).on('scroll', function() {
            var cur_pos = $(this).scrollTop() + 300;

            nav_sections.each(function() {
              var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

              if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                  main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
              }
              if (cur_pos < 200) {
                $(".main-nav ul:first li:first").addClass('active');
              }
            });
          });

            // Back to top button
          $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
              $('.back-to-top').fadeIn('slow');
            } else {
              $('.back-to-top').fadeOut('slow');
            }
          });

          $('.back-to-top').click(function() {
            $('html, body').animate({
              scrollTop: 0
            }, 1500);
            return false;
          });



          // add smooth scrolling

          $('body a').on('click', function(e) {
          //check for a hash value
          if(this.hash !== '') {
              //Prevent default behavior
              e.preventDefault();
              
              // Store hash
             const hash= this.hash;
              
              // Animate Smooth Scroll
              
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              },900, function() {
                  // Add hash to URL after scroll
                  window.location.hash= hash;
              });
              
              
          }
      });
    
            
    
 
    
    AOS.init();
    
    
    // Init AOS
            AOS.init({
              duration: 1000,
              once: true
            });
    
    
    // Tooltips
    
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

            // EKKO LIGHTBOX

              $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                  event.preventDefault();
                  $(this).ekkoLightbox();
                });

    
    
})(jQuery);



 


        
