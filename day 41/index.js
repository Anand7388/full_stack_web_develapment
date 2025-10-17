
let count = 0;
const countEl = document.getElementById("count-el");
const saveBtn = document.getElementById("save-btn");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    console.log("Count saved: " + count);
    // Optional: Reset count after saving
    count = 0;
    countEl.textContent = count;
}