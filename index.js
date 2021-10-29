const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
const outputDiv = document.querySelector("#output");

var count = 0;
function incrementCounter(){
 count = count + 1; 
 outputDiv.innerHTML = count
 decrementBtn.disabled = false;
}

function decrementCounter(){
      count = count - 1; 
      outputDiv.innerHTML = count
      if(count == 0){
            decrementBtn.disabled = true;
      }
}

incrementBtn.addEventListener("click", incrementCounter)
decrementBtn.addEventListener("click", decrementCounter)