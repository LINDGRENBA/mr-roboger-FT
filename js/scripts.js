//business logic
let translateToRobot = function(initialNumber) {
  return initialNumber;
}



//user interface logic

$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();

    let userNumberInput = parseInt($("#number-input").val());
    let result = translateToRobot(userNumberInput);
    $("#output").text(result);

  });
});