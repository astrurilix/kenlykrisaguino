$(document).ready(function () {
    // Get the .projects-content element
    var projectsContent = $(".projects-content");

    // Set the scroll amount for each wheel event
    var scrollAmount = 200;

    // Handle mouse wheel event
    projectsContent.on("wheel", function (event) {
      // Determine the direction of the scroll
      var delta = event.originalEvent.deltaY || -event.originalEvent.wheelDelta || event.originalEvent.detail;

      // Adjust the scroll position based on the direction
      if (delta > 0) {
        projectsContent.scrollLeft(projectsContent.scrollLeft() + scrollAmount);
      } else {
        projectsContent.scrollLeft(projectsContent.scrollLeft() - scrollAmount);
      }

      // Prevent the default scroll behavior
      event.preventDefault();
    });
  });