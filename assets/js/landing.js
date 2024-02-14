$(document).ready(function () {
    // Define the skills array
    var skillsArray = ["FULLSTACK WEB DEVELOPER", "BACK-END WEB DEVELOPER", "LARAVEL DEVELOPER", "GOLANG API DEVELOPER"];
    var currentIndex = 0;

    // Function to update landing skills
    function updateLandingSkills() {
      var landingSkills = $("#landing-skills");
      var currentSkill = skillsArray[currentIndex];
      var index = 0;

      // Function to add a letter to landing skills
      function addLetter() {
        landingSkills.text(currentSkill.slice(0, index++));
        if (index <= currentSkill.length) {
          // If not reached the end of the array, continue adding letters
          setTimeout(addLetter, 100);
        } else {
          // If reached the end, pause for 3 seconds and then start deleting letters
          setTimeout(deleteLetter, 3000);
        }
      }

      // Function to delete a letter from landing skills
      function deleteLetter() {
        landingSkills.text(currentSkill.slice(0, index--));
        if (index >= 0) {
          // If not reached the beginning of the array, continue deleting letters
          setTimeout(deleteLetter, 100);
        } else {
          // If reached the beginning, move to the next array element
          currentIndex = (currentIndex + 1) % skillsArray.length;
          // Start updating skills for the next array element
          setTimeout(updateLandingSkills, 1000);
        }
      }

      // Start the process by adding the first letter
      addLetter();
    }

    function animateKenlyKrisaguino() {
      var image = $("#landing-img")
      function animate1() {
        image.css('transform', "rotate(.5deg)")
        setTimeout(animate2, 1000);
      }
      function animate2() {
        image.css('transform', "rotate(-1deg)")
        setTimeout(animate1, 1000);
      }
      animate1()
    }

    // Call the function when the document is ready
    updateLandingSkills();
    animateKenlyKrisaguino()
  });