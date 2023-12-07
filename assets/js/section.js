$(document).ready(function() {

  const sentences = [
    "FULLSTACK DEVELOPER",
    "BACKEND DEVELOPER",
    "WEB DEVELOPER"
  ];

  let currentSentenceIndex = 0;
  let currentWordIndex = 0;
  let currentWord = '';
  let isDeleting = false;
  
    function isSectionOnScreen(sectionId) {
      var section = $(sectionId);
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var sectionOffset = section.offset().top;
      var sectionHeight = section.outerHeight();
      var threshold = 0.5; // 50%
      return (
        scrollTop < sectionOffset + sectionHeight * threshold &&
        scrollTop + windowHeight > sectionOffset
      );
    }

    function updateActiveLink() {
      $("a.font-adam-bold").removeClass("active-link");

      $("section").each(function() {
        var sectionId = "#" + $(this).attr("id");
        var linkSelector = 'a[href="' + sectionId + '"]';

        if (isSectionOnScreen(sectionId)) {
          $(linkSelector).addClass("active-link");
        }
      });
    }

    updateActiveLink();

    $(window).on("scroll", function() {
      updateActiveLink();
    });
  });