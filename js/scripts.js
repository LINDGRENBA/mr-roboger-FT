//business logic
let translateToRobot = function(initialNumber) {
  let numbers = [];
  for(let i = 0; i <= initialNumber; i++) {
    numbers.push(i);
  }
  return numbers;
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