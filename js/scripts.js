//business logic
let translateToRobot = function(initialNumber) {
  let numbers = [];
  for(let i = 0; i <= initialNumber; i++) {
    numbers.push(i.toString());
  }
  
  const robotResponse = numbers.map(function(number) {
    if(number.includes("3")) {
      return "Won't you be my neighbor?";
    } else if(number.includes("2")) {
      return "Boop!";
    } else if(number.includes("1")) {
      return "Beep!";
    } else {
      return number;
    }
  });
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