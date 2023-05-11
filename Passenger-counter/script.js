let saveEl = document.getElementById("save-el")
let counter = document.getElementById("counter");
let count = 0

function increment() {
    count += 1
    counter.innerText = count;   
}
 function save() {
    let counted = count + " - "
    saveEl.textContent += counted
    counter.innerText = 0
    count = 0
 }