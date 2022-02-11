//business logic
function beepBooper(number){
  let count = number.replace(/[\D]/gi, "");
  let returnArr = [];
  for (let i=0; i <= count; i++){
    if ((i+"").includes("3")){
      returnArr.push("Won't you be my neighbor?")
    }
    else if ((i+"").includes("2")){
      returnArr.push("Boop!")
    }
    else if ((i+"").includes("1")){
      returnArr.push("Beep!")
    } else {
    returnArr.push(i)
  }
  }
  const returnString=returnArr.join(', ')
  return returnString
}

function countDown(number){
  let count = number.replace(/[\D]/gi, "");
  let returnArr = [];
  for (let i=count; i >= 0; i--){
    if ((i+"").includes("3")){
      returnArr.push("Won't you be my neighbor?")
    }
    else if ((i+"").includes("2")){
      returnArr.push("Boop!")
    }
    else if ((i+"").includes("1")){
      returnArr.push("Beep!")
    } else {
    returnArr.push(i)
  }
  }
  const returnString=returnArr.join(', ')
  return returnString
}

//ui logic
$(document).ready(function(){
  $(".number-counter-up").click(function(event){
    event.preventDefault();
    const passage = $("#number-passage").val();
    const numberCount = beepBooper(passage);
    $("#total-count").html(numberCount);
    if (numberCount.includes("?")){
      $(".rogers-showing").toggle();
    }
  });
  $(".number-counter-down").click(function(event){
    event.preventDefault();
    const passage = $("#number-passage").val();
    const numberCount = countDown(passage);
    $("#total-count").html(numberCount);
    if (numberCount.includes("?")){
      $(".rogers-showing").toggle();
    }
  });
});
