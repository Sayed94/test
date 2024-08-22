// let counter = 0


// function increment() {
//     counter++;
//     document.getElementById("counter-text").innerHTML = counter
// }

// function decrement() {
//     counter--;
//     document.getElementById("counter-text").innerHTML = counter
// }

// function reset() {
//     counter = 0;
//     document.getElementById("counter-text").innerHTML = counter
// }




let counter = 0;
let incrementButton = document.getElementById("increment-btn");
let decrementButton = document.getElementById("decrement-btn");
let resetButton = document.getElementById("reset-btn");
let counterText = document.getElementById("counter-text");

incrementButton.addEventListener("click", () => {
    counter++;
    counterText.innerText = counter;
});

decrementButton.addEventListener("click", () => {
    counter--;
    counterText.innerText = counter;
});

resetButton.addEventListener("click", () => {
    counter = 0;
    counterText.innerText = counter;
});