//business logic
let translateToRobot = function(initialNumber, userName) {
  let numbers = [];
  for(let i = 0; i <= initialNumber; i++) {
    numbers.push(i.toString());
  }
  
  const robotResponse = numbers.map(function(number) {
    if(number.includes("3")) {
      if(userName) {
        return "Won't you be my neighbor, " + userName + "?"
      } else {
        return "Won't you be my neighbor?";
      }
    } else if(number.includes("2")) {
      return "Boop!";
    } else if(number.includes("1")) {
      return "Beep!";
    } else {
      return number;
    }
  });
  return [robotResponse.join(" "), robotResponse.reverse().join(" ")];
}



//user interface logic

$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();

    let userFirstName = $("#user-name").val();
    let userNumberInput = parseInt($("#number-input").val());
    let result = translateToRobot(userNumberInput, userFirstName);
    $("#number-input").val("");
    $("#output").text(result[0]);

    $("#reverse-btn").click(function() {
      $("#output-reverse").text(result[1]);
    });

  });
});