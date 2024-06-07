(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
        // filter
        $(document).ready(function() {
            // Show completed projects by default
            $('.portfolio-item.first').show();
            $('.portfolio-item.second').hide();
          
            $('#portfolio-filter li').click(function() {
              // Remove 'filter-active' class from all filter items
              $('#portfolio-filter li').removeClass('filter-active');
              // Add 'filter-active' class to the clicked filter item
              $(this).addClass('filter-active');
          
              // Get the filter value
              var filterValue = $(this).attr('data-filter');
          
              // Hide all portfolio items
              $('.portfolio-item').hide();
          
              // Show the filtered items based on the filter value
              if (filterValue === '.first') {
                // Show completed projects
                $('.portfolio-item.first').show();
              } else if (filterValue === '.second') {
                // Show ongoing projects
                $('.portfolio-item.second').show();
              }
            });
          });
        
    // Slideshow 
   
    const portfolioWraps = document.querySelectorAll('.portfolio-warp');

    portfolioWraps.forEach((portfolioWrap) => {
      console.log('Portfolio wrap:', portfolioWrap);
    
      const portfolioImages = portfolioWrap.querySelectorAll('.portfolio-img img');
      console.log('Portfolio images:', portfolioImages);
    
      const arrows = portfolioWrap.querySelectorAll('.arrow');
      console.log('Arrows:', arrows);
    
      let currentImageIndex = 0;
    
      // Hide all images except the first one
      portfolioImages.forEach((image, index) => {
        if (index!== 0) {
          image.style.display = 'none';
        }
      });
    
      // Show the first image
      portfolioImages[currentImageIndex].style.display = 'block';
    
      // Add click event listeners to the arrows
      arrows.forEach((arrow) => {
        arrow.addEventListener('click', (e) => {
          e.preventDefault();
    
          console.log('Arrow clicked:', e.target);
    
          // Determine the direction of the arrow click
          const direction = e.target.classList.contains('arrow-left')? -1 : 1;
          console.log('Direction:', direction);
    
          // Update the current image index
          currentImageIndex = (currentImageIndex + direction + portfolioImages.length) % portfolioImages.length;
          console.log('Current image index:', currentImageIndex);
    
          // Hide all images
          portfolioImages.forEach((image) => {
            image.style.display = 'none';
          });
    
          // Show the next/previous image
          portfolioImages[currentImageIndex].style.display = 'block';
        });
      });
    });



})(jQuery);

