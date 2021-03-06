//business logic
let translateToRobot = function(initialNumber, userName) {
  let numbers = [];
  for(let i = 0; i <= initialNumber; i++) {
    numbers.push(i.toString());
  }
  
  const robotResponse = numbers.map(function(number) {
    let numberForComparison = parseInt(number);
    if(userName && numberForComparison > 0 && numberForComparison % 3 === 0) {
      return "Won't you be my neighbor, " + userName + "?";
    } else {
      if(number.includes("3")) {
        return "Won't you be my neighbor?";
      } else if(number.includes("2")) {
        return "Boop!";
      } else if(number.includes("1")) {
        return "Beep!";
      } else {
        return number;
      }
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
    $("#user-name").val("");
    $("#output-text").text(result[0]);
    $("button#reverse-btn").show();

    $("#reverse-btn").click(function() {
      $("#output-text").text("");
      $("#output-reverse-text").text(result[1]);
      $("button.clear-reversed").show();
      $("button#reverse-btn").hide();
    });
    
  });

  $(".clear-reversed").click(function() {
    $("#output-reverse-text").text("");
  });
});