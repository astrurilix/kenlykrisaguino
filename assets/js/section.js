$(document).ready(function () {
  var navLinks = $('nav a');
  var dotNavbar = $('#dot-navbar');

  function updateDotPosition(link) {
    var linkPosition = link.position().left + link.width() / 2;
    dotNavbar.css('transform', 'translateX(' + linkPosition + 'px)');
  }

  function handleScrollAndResize() {
    var scrollPosition = $(window).scrollTop();
    var activeLink;

    $('section').each(function () {
      var section = $(this);
      var sectionTop = section.offset().top;
      var sectionHeight = section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight * 0.9) {
        activeLink = navLinks.filter('[href="#' + section.attr('id') + '"]');
        return false; // Break the loop once the active section is found
      }
    });

    if (activeLink && !activeLink.hasClass('active-link')) {
      navLinks.removeClass('active-link');
      activeLink.addClass('active-link');
      updateDotPosition(activeLink);
    }
  }

  function handleNavLinkClick(event) {
    event.preventDefault();

    var targetId = $(this).attr('href');
    var targetSection = $(targetId);

    $('html, body').animate({
      scrollTop: targetSection.offset().top
    }, 75, function () {
      handleScrollAndResize(); // Call the scroll handler after the animation is complete
      $(window).trigger('resize'); // Trigger the resize event manually
    });
  }

  // Update dot position on initial load
  handleScrollAndResize();

  // Update dot position on scroll and resize
  $(window).on('resize', handleScrollAndResize);
  $(window).on('scroll', handleScrollAndResize);

  // Update dot position on nav link click
  navLinks.on('click', handleNavLinkClick);
});
