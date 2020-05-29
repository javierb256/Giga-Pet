$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.feed-button').click(clickedFeedButton);
  
    
  $(document).ready(function(){
  $(".treat-button").click(function(){
    $(".response").show();
     $(".response").delay(5000).fadeOut(10);
  });
});
  
  $(document).ready(function(){
  $(".play-button").click(function(){
    $(".play-response").show();
     $(".play-response").delay(5000).fadeOut(10);
  });
});
  
  $(document).ready(function(){
  $(".exercise-button").click(function(){
    $(".exercise-response").show();
     $(".exercise-response").delay(5000).fadeOut(10);
  });
});
  
  $(document).ready(function(){
  $(".feed-button").click(function(){
    $(".feed-response").show();
     $(".feed-response").delay(5000).fadeOut(10);
  });
});
  

  
    
  })

  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    
    var pet_info = new Object();

    var pet_info = {
      name:"Sonic",
      weight:"7", 
      happiness:"2",
      hunger: "4",
    };
  
    //onclick button increas weight & happiness
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      
        pet_info.weight++;
        pet_info.happiness++;
      
      var gulp = document.getElementById("gulp");
      gulp.play();
      checkAndUpdatePetInfoInHtml();
    }
    
    //decrease weight and add happiness if they are greater than 0
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      if(pet_info.weight && pet_info.happiness >0){
      pet_info.weight--;
      pet_info.happiness++;
      pet_info.hunger++;  
      //plays audio when clicked  
      var audio = document.getElementById("dog-bark");
        audio.play();
      }
      checkAndUpdatePetInfoInHtml();
      
    }
    
    //dcrease weight and happiness if both are > 0
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
       if(pet_info.weight && pet_info.happiness >0){
      pet_info.weight--;
      pet_info.happiness--;
      pet_info.hunger++;   
       }
      var whistle = document.getElementById("whistle");
      whistle.play();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedFeedButton(){
      if(pet_info.weight && pet_info.hunger >0){
      pet_info.weight++;
      pet_info.hunger--;
      }
      
      //plays audio when clicked
      var audio = document.getElementById("chewing");
        audio.play();
      
      
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
    }
    
    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.hunger').text(pet_info['hunger']);
    }


    