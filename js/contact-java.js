// YOUR CODE HERE
// Event listener for form submission
$("#sent").click(function (){



  // Save the first name as a variable
var input = $("#firstname").val()

  // Set HTML of .modal-body

$(".modal-body").html("Thank you," + input + ".Your message has been sent!");
  //Thank you, . Your message has been sent!
  // Clear all fields in form

  $(".form-control").val("");
} );
