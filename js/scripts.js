$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#voter').show();
  }
    else {
    alert("Now don't go crazy!");
      $('#minor').show();


    }
});
