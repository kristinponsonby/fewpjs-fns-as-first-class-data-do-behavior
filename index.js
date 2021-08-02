/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(timeString) {
 let shortTime = timeString.split(":")
 let shorterTime = parseInt(shortTime)
  if (shorterTime < 12 ) {
     return "Good Morning";

  } if (shorterTime > 15) {
     return "Good Evening";

  } else { 
     return "Good Afternoon";
  }
}


function displayMessage (testContent) {
    document.getElementById("greeting").innerHTML = (testContent)
 
}

