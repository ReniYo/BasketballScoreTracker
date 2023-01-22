let countHomeEl = document.getElementById("count-home")
let countHome = 0
countHomeEl.textContent = countHome

let countGuestEl = document.getElementById("count-guest")
let countGuest = 0
countGuestEl.textContent = countGuest

function addOneHome() {
    countHome += 1
    countHomeEl.textContent = countHome
} 

function addTwoHome() {
    countHome += 2
    countHomeEl.textContent = countHome
} 

function addThreeHome() {
    countHome += 3
    countHomeEl.textContent = countHome
} 

function addOneGuest() {
    countGuest += 1
    countGuestEl.textContent = countGuest
}

function addTwoGuest() {
    countGuest += 2
    countGuestEl.textContent = countGuest
}

function addThreeGuest() {
    countGuest += 3
    countGuestEl.textContent = countGuest
}

function resetScore() {
    countHome = 0
    countHomeEl.textContent = countHome
    countGuest = 0
    countGuestEl.textContent = countGuest
}