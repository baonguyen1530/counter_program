const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease_btn");
const increaseBtn = document.getElementById("increase_btn");
const resetBtn = document.getElementById("reset_btn");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    counter.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    counter.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}
