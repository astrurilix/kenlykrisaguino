$(document).ready(function() {
    // Cache jQuery selections
    var navLinks = $('nav a');
    var dotNavbar = $('#dot-navbar');
  
    // Function to update the dot position
    function updateDotPosition(link) {
      var linkPosition = link.position().left + link.width() / 2;
      dotNavbar.css('transform', 'translateX(' + linkPosition + 'px)');
    }
  
    // Function to handle scroll and resize events
    function handleScrollAndResize() {
      // Get the current scroll position
      var scrollPosition = $(window).scrollTop();
  
      // Flag to determine if the active section is found
      var activeSectionFound = false;
  
      // Loop through each section
      $('section').each(function() {
        if (activeSectionFound) return; // Skip the loop if the active section is found
  
        var sectionTop = $(this).offset().top;
        var sectionHeight = $(this).outerHeight();
  
        // Check if the user has scrolled to at least 51% of the section
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight * 0.49) {
          // Remove 'active' class from all navigation links
          navLinks.removeClass('active-link');
  
          // Add 'active' class to the corresponding navigation link
          var activeLink = navLinks.filter('[href="#' + $(this).attr('id') + '"]');
          activeLink.addClass('active-link');
  
          // Update the dot position
          updateDotPosition(activeLink);
  
          // Set the flag to true since the active section is found
          activeSectionFound = true;
        }
      });
    }
  
    // Call the function on page load
    handleScrollAndResize();
  
    // Event listener for scroll and resize events
    $(window).on('scroll resize', function() {
      handleScrollAndResize();
    });
  });
  