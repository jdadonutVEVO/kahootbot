var kid = readInt("What is the kahoot id? ");
var ksm = readInt("How many bots do you want to make? ")
var userid = 1
for(var i = 0; i < ksm; i++){
  addKahootNPC(kid);
}
function addKahootNPC(id){
  var inputses = document.getElementById("inputSession");
  inputses.value = id
  document.getElementById("submit").click();
  if(Boolean(document.getElementByClassName("name-spinner_overlay") === true)){
    document.getElementsByClassName("ng-binding btn btn-greyscale namerator__button").click()
    setTimeout(pause, 3000)
    document.getElementsByClassName("btn btn-greyscale namerator__button ng-binding ng-scope").click()
  } else {
    var username = readLine("What should the Username be? ")
    var un = document.getElementById("username")
    un.value = username + userid
    userid += 1 
  }

}

function pause(){
  var x = 123
}
