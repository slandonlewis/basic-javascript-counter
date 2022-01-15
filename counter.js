var saveEl = document.getElementById('save-el');
var countEl = document.getElementById('count-el');
var count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function decrement() {
    count -= 1;
    countEl.innerHTML = count;
}

function save() {
    var prevEnteries = ' '+count+','
    saveEl.innerText += prevEnteries;
    count = 0;
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = count;
    saveEl.innerText = 'Previous Enteries:';
}