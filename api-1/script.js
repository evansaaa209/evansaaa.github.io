$(document).ready(function () {

  function getDogImage() {
    let num=$("#js-max-results").val();
    let breed=$("#breed-form").val();
    
    //console.log(num)
    // https://dog.ceo/api/breed/hound/images/random/3
      fetch(`https://dog.ceo/api/breed/${breed}/images/random/${num}`)
     
    .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('oopsie, my bad'));
  }
    
    function displayResults(responseJson) {
      console.log(responseJson);
  
      //replace the existing image with the new one//
  
      let images="" 
      responseJson.message.forEach(function(pic){
        console.log(pic);
        images+=`<img src="${pic}" class="results-img">`
      });
      //console.log(images);
      $('.results-img').html(
        images
      )
      //display the results section//
      $('.results').removeClass('hidden');
  }
    
    $('form').submit(function(event) {
      event.preventDefault();
      getDogImage();
    });
  
});