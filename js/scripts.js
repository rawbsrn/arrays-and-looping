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
  return returnArr

}

//ui logic

$(document).ready(function(){
  event.preventDefault();
  const passage = $("#text-passage").val();
  const wordCount = beepBooper(passage);
  $("#total-count").html(wordCount);
})