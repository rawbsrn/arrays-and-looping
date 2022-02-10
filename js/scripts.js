//business logic

function beepBooper(number){
  count = number.replace(/[\D]/gi, "");
  console.log(count)
  returnArr = []
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
    returnArr.push(i)}

  }
  const returnString=returnArr.join(', ')
  return returnString

}

//ui logic

$(document).ready(function(){
  $("form#number-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#number-passage").val();
    const numberCount = beepBooper(passage);
    $("#total-count").html(numberCount);
    if (numberCount.includes("?")){
      $(".rogers-showing").toggle();
    }
  });
});
